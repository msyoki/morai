/**
 * PayPal payment service abstraction.
 *
 * Provides a clean interface for creating and capturing PayPal orders.
 * All secrets are read from environment variables at runtime inside
 * Netlify Functions — never in the frontend.
 *
 * When PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET are not configured,
 * the service operates in mock/sandbox mode.
 */

export interface PayPalConfig {
  clientId: string
  clientSecret: string
  environment: 'sandbox' | 'production'
}

export interface PayPalOrderRequest {
  amount: number
  currency: string
  description: string
  items: Array<{
    name: string
    unit_amount: { currency_code: string; value: string }
    quantity: string
  }>
}

export interface PayPalOrderResponse {
  success: boolean
  orderId?: string
  approvalUrl?: string
  message?: string
  mock?: boolean
}

function getConfig(): PayPalConfig {
  return {
    clientId: process.env.PAYPAL_CLIENT_ID || '',
    clientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
    environment: (process.env.PAYPAL_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox',
  }
}

export function isConfigured(): boolean {
  const config = getConfig()
  return Boolean(config.clientId && config.clientSecret)
}

function getBaseUrl(): string {
  const config = getConfig()
  return config.environment === 'production'
    ? 'https://api.paypal.com'
    : 'https://api.sandbox.paypal.com'
}

async function getAccessToken(): Promise<string> {
  const config = getConfig()
  const auth = Buffer.from(`${config.clientId}:${config.clientSecret}`).toString('base64')

  const response = await fetch(`${getBaseUrl()}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    throw new Error(`PayPal auth failed: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

/**
 * Create a PayPal order.
 */
export async function createPayPalOrder(
  request: PayPalOrderRequest,
): Promise<PayPalOrderResponse> {
  if (!isConfigured()) {
    return {
      success: true,
      orderId: `mock_order_${Date.now()}`,
      approvalUrl: `https://sandbox.paypal.com/checkoutnow?token=mock_token_${Date.now()}`,
      message: 'Mock PayPal order created. Configure PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET for real transactions.',
      mock: true,
    }
  }

  const accessToken = await getAccessToken()

  const response = await fetch(`${getBaseUrl()}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: request.description,
          amount: {
            currency_code: request.currency,
            value: request.amount.toFixed(2),
          },
          items: request.items,
        },
      ],
      application_context: {
        brand_name: 'Moirai',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
      },
    }),
  })

  const data = await response.json()

  if (data.id) {
    const approvalUrl = data.links?.find((link: any) => link.rel === 'approve')?.href
    return {
      success: true,
      orderId: data.id,
      approvalUrl,
    }
  }

  return {
    success: false,
    message: data.message || 'PayPal order creation failed',
  }
}

/**
 * Capture a PayPal order after approval.
 */
export async function capturePayPalOrder(
  orderId: string,
): Promise<{ success: boolean; message?: string; mock?: boolean }> {
  if (!isConfigured()) {
    return {
      success: true,
      message: 'Mock PayPal capture. Configure credentials for real transactions.',
      mock: true,
    }
  }

  const accessToken = await getAccessToken()

  const response = await fetch(
    `${getBaseUrl()}/v2/checkout/orders/${orderId}/capture`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  )

  const data = await response.json()

  if (data.status === 'COMPLETED') {
    return { success: true }
  }

  return {
    success: false,
    message: data.message || 'PayPal capture failed',
  }
}
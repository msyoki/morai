/**
 * M-Pesa payment service abstraction.
 *
 * This module provides a clean interface for initiating M-Pesa STK Push
 * transactions. All credentials are read from environment variables at
 * runtime inside Netlify Functions — never in the frontend.
 *
 * When MPESA_CONSUMER_KEY and MPESA_CONSUMER_SECRET are not configured,
 * the service operates in mock/sandbox mode so development can proceed
 * without production credentials.
 */

export interface MpesaConfig {
  consumerKey: string
  consumerSecret: string
  shortcode: string
  passkey: string
  callbackUrl: string
  environment: 'sandbox' | 'production'
}

export interface MpesaInitiateRequest {
  amount: number
  phone: string
  accountReference: string
  transactionDesc: string
}

export interface MpesaInitiateResponse {
  success: boolean
  merchantRequestId?: string
  checkoutRequestId?: string
  message?: string
  mock?: boolean
}

function getConfig(): MpesaConfig {
  return {
    consumerKey: process.env.MPESA_CONSUMER_KEY || '',
    consumerSecret: process.env.MPESA_CONSUMER_SECRET || '',
    shortcode: process.env.MPESA_SHORTCODE || '174479',
    passkey: process.env.MPESA_PASSKEY || '',
    callbackUrl: process.env.MPESA_CALLBACK_URL || '',
    environment: (process.env.MPESA_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox',
  }
}

export function isConfigured(): boolean {
  const c = getConfig()
  return Boolean(c.consumerKey && c.consumerSecret && c.passkey)
}

/**
 * Generate OAuth access token for M-Pesa API.
 * In mock mode, returns a dummy token.
 */
export async function getAccessToken(): Promise<string> {
  const config = getConfig()

  if (!isConfigured()) {
    return 'mock_access_token'
  }

  const auth = Buffer.from(
    `${config.consumerKey}:${config.consumerSecret}`,
  ).toString('base64')

  const endpoint =
    config.environment === 'production'
      ? 'https://api.safaricom.co.ke/oauth/v1/access_token?grant_type=client_credentials'
      : 'https://sandbox.safaricom.co.ke/oauth/v1/access_token?grant_type=client_credentials'

  const response = await fetch(endpoint, {
    headers: { Authorization: `Basic ${auth}` },
  })

  if (!response.ok) {
    throw new Error(`M-Pesa auth failed: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

/**
 * Initiate an M-Pesa STK Push.
 * Returns a response indicating success or failure.
 */
export async function initiateMpesa(
  request: MpesaInitiateRequest,
): Promise<MpesaInitiateResponse> {
  const config = getConfig()
  const accessToken = await getAccessToken()

  // Mock mode when credentials are unavailable
  if (!isConfigured()) {
    return {
      success: true,
      merchantRequestId: `mock_mer_${Date.now()}`,
      checkoutRequestId: `mock_chk_${Date.now()}`,
      message: 'Mock STK Push initiated. Configure MPESA_CONSUMER_KEY and MPESA_CONSUMER_SECRET for real transactions.',
      mock: true,
    }
  }

  const endpoint =
    config.environment === 'production'
      ? 'https://api.safaricom.co.ke/mpesa/stkpush/v1/request'
      : 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/request'

  const body = {
    BusinessShortCode: config.shortcode,
    Password: Buffer.from(
      `${config.shortcode}${config.passkey}${new Date().getTime()}`,
    ).toString('base64'),
    Timestamp: new Date().toISOString().replace(/[-:]/g, '').slice(0, 14),
    TransactionType: 'CustomerPayBillSSK',
    Amount: request.amount,
    PartyB: config.shortcode,
    PhoneNumber: request.phone,
    AccountReference: request.accountReference,
    TransactionDesc: request.transactionDesc,
    CallbackURL: config.callbackUrl,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  if (data.ResponseCode === '0') {
    return {
      success: true,
      merchantRequestId: data.MerchantRequestID,
      checkoutRequestId: data.CheckoutRequestID,
      message: data.ResponseDescription,
    }
  }

  return {
    success: false,
    message: data.ResponseDescription || 'M-Pesa transaction failed',
  }
}
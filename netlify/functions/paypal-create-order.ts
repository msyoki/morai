/**
 * Netlify Function: PayPal order creation
 *
 * POST /netlify/functions/paypal-create-order
 * Body: { amount, currency, description, items }
 *
 * NEVER expose secrets in the frontend. This function reads them
 * from Netlify environment variables.
 */

import type { Context, Handler } from '@netlify/functions'
import { createPayPalOrder, isConfigured } from '../../src/services/paypal'

export const config = {
  path: '/paypal-create-order',
}

export const handler: Handler = async (event: Context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    const { amount, currency, description, items } = body

    if (!amount || !currency) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Amount and currency are required' }),
      }
    }

    const result = await createPayPalOrder({
      amount: Number(amount),
      currency: String(currency),
      description: String(description || 'Moirai Donation'),
      items: items || [
        {
          name: 'Moirai Support',
          unit_amount: { currency_code: String(currency), value: String(amount) },
          quantity: '1',
        },
      ],
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: result.success,
        orderId: result.orderId,
        approvalUrl: result.approvalUrl,
        message: result.message,
        mock: result.mock || !isConfigured(),
        configured: isConfigured(),
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'PayPal order creation failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
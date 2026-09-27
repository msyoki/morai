/**
 * Netlify Function: PayPal order capture
 *
 * POST /netlify/functions/paypal-capture-order
 * Body: { orderId }
 */

import type { Context, Handler } from '@netlify/functions'
import { capturePayPalOrder, isConfigured } from '../../src/services/paypal'

export const config = {
  path: '/paypal-capture-order',
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
    const { orderId } = body

    if (!orderId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Order ID is required' }),
      }
    }

    const result = await capturePayPalOrder(String(orderId))

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: result.success,
        message: result.message,
        mock: result.mock || !isConfigured(),
        configured: isConfigured(),
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'PayPal capture failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
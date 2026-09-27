/**
 * Netlify Function: M-Pesa callback endpoint
 *
 * POST /netlify/functions/mpesa-callback
 * Receives M-Pesa transaction results from Safaricom.
 */

import type { Context, Handler } from '@netlify/functions'

export const config = {
  path: '/mpesa-callback',
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

    // In production, validate the callback and update donation records.
    // For now, log and acknowledge.
    console.log('M-Pesa callback received:', JSON.stringify(body))

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Callback received',
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Callback processing failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
/**
 * Netlify Function: M-Pesa STK Push initiation
 *
 * POST /netlify/functions/mpesa-initiate
 * Body: { amount, phone, accountReference, transactionDesc }
 *
 * NEVER expose credentials in the frontend. This function reads them
 * from Netlify environment variables.
 */

import type { Context, Handler } from '@netlify/functions'
import { initiateMpesa, isConfigured } from '../../src/services/mpesa'

export const config = {
  path: '/mpesa-initiate',
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
    const { amount, phone, accountReference, transactionDesc } = body

    if (!amount || !phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Amount and phone are required' }),
      }
    }

    const result = await initiateMpesa({
      amount: Number(amount),
      phone: String(phone),
      accountReference: String(accountReference || 'Moirai Donation'),
      transactionDesc: String(transactionDesc || 'Moirai Support'),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: result.success,
        merchantRequestId: result.merchantRequestId,
        checkoutRequestId: result.checkoutRequestId,
        message: result.message,
        mock: result.mock || !isConfigured(),
        configured: isConfigured(),
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'M-Pesa initiation failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
    }
  }
}
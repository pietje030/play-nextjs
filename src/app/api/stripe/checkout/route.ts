import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { priceId, successUrl, cancelUrl } = await request.json();

    // Create Checkout Sessions from body params
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Prompt Pocket - Lifetime Access',
              description: 'Privacy-friendly Chrome extension to save, organize, and export your AI prompts locally.',
              images: ['https://promptpocket.com/images/product-preview.png'],
            },
            unit_amount: 3900, // $39.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        product_id: 'prompt_pocket_lifetime',
      },
      payment_intent_data: {
        metadata: {
          product_id: 'prompt_pocket_lifetime',
        },
      },
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
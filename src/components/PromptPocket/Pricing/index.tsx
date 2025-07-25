"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PromptPocketPricing = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // Redirect to Stripe checkout
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'prompt_pocket_lifetime',
          successUrl: `${window.location.origin}/prompt-pocket/success`,
          cancelUrl: `${window.location.origin}/prompt-pocket`,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    "Complete Chrome Extension (ZIP)",
    "Installation Guide with Screenshots",
    "20 Premium AI Prompts Collection",
    "Lifetime Updates & Improvements",
    "100% Privacy - Local Storage Only",
    "Export/Import Functionality",
    "Advanced Search & Tagging",
    "30-Day Money Back Guarantee"
  ];

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                Simple Pricing
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Get Prompt Pocket{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                One-time payment. Lifetime access. No subscriptions. No hidden fees.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[470px] px-4">
            <div className="relative z-10 rounded-lg bg-white px-8 py-10 shadow-lg dark:bg-dark-2 md:px-12 md:py-16">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-sm font-semibold text-white">
                  🔥 Most Popular
                </span>
              </div>

              {/* Header */}
              <div className="mb-8 text-center">
                <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white">
                  Lifetime Access
                </h3>
                <p className="text-body-color dark:text-dark-6">
                  Everything you need to organize your AI prompts
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 text-center">
                <div className="flex items-end justify-center space-x-2">
                  <span className="text-lg text-gray-400 line-through">$99</span>
                  <span className="text-5xl font-bold text-dark dark:text-white">$39</span>
                </div>
                <p className="mt-2 text-sm text-body-color dark:text-dark-6">
                  One-time payment • No monthly fees
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-body-color dark:text-dark-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <button
                  onClick={handlePurchase}
                  disabled={isLoading}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "🚀 Get Instant Access - $39"
                  )}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center">
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 text-center">
                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">Secure payment powered by</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600">Stripe</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                      💳 Card
                    </div>
                    <div className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                      🅿️ PayPal
                    </div>
                  </div>
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 p-1 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="h-full w-full rounded-lg bg-white dark:bg-dark-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
            <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h4 className="text-lg font-bold">30-Day Money-Back Guarantee</h4>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Not satisfied? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPocketPricing;
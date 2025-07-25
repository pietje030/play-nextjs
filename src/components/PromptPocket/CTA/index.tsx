"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PromptPocketCTA = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
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

  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black py-16 md:py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container relative">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-4xl text-center">
              {/* Main Headline */}
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Stop Losing Your Best{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Prompts
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="mb-8 text-lg text-gray-300 sm:text-xl">
                Join hundreds of AI power users who've transformed their workflow with Prompt Pocket. 
                Your prompts, organized, searchable, and always private.
              </p>

              {/* Urgency & Scarcity */}
              <div className="mb-8 rounded-lg bg-yellow-500/20 border border-yellow-500/30 p-4">
                <div className="flex items-center justify-center space-x-2 text-yellow-300">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Launch Special: $39 (normally $99) • Limited Time</span>
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Instant Setup</h3>
                  <p className="text-sm text-gray-300">Download, install, and start organizing in under 2 minutes</p>
                </div>

                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">100% Private</h3>
                  <p className="text-sm text-gray-300">Your data never leaves your device. No cloud, no tracking</p>
                </div>

                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Lifetime Access</h3>
                  <p className="text-sm text-gray-300">One payment, forever yours. All future updates included</p>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="mb-8">
                <button
                  onClick={handlePurchase}
                  disabled={isLoading}
                  className="w-full max-w-md rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-xl font-bold text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "🚀 Get Prompt Pocket Now - $39"
                  )}
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Access</span>
                </div>
              </div>

              {/* Social Proof Numbers */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">4.9⭐</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">0%</div>
                  <div className="text-sm text-gray-400">Data Shared</div>
                </div>
              </div>

              {/* Final Compelling Message */}
              <p className="text-lg text-gray-300">
                Don't lose another great prompt. 
                <strong className="text-white"> Start organizing your AI workflow today.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute left-8 top-1/4 animate-float">
        <div className="h-4 w-4 rounded-full bg-blue-400 opacity-20"></div>
      </div>
      <div className="absolute right-8 top-1/3 animate-float-delayed">
        <div className="h-3 w-3 rounded-full bg-purple-400 opacity-30"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-pulse">
        <div className="h-2 w-2 rounded-full bg-white opacity-10"></div>
      </div>
    </section>
  );
};

export default PromptPocketCTA;
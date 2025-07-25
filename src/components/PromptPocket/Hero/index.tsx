"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const PromptPocketHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container relative">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                {/* Logo/Brand */}
                <div className="mb-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                      <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-white">Prompt Pocket</h1>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Save & Organize Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    AI Prompts
                  </span>{" "}
                  Locally
                </h1>

                {/* Subtitle */}
                <p className="mb-12 text-base !leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                  Privacy-friendly Chrome extension to save, tag, search and export your ChatGPT prompts & AI snippets. 
                  Works completely offline with local storage — no cloud, no login required.
                </p>

                {/* Social Proof */}
                <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>100% Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Works Offline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Lifetime Access</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#pricing"
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg"
                  >
                    Get Prompt Pocket - $39
                  </Link>
                  <Link
                    href="#demo"
                    className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-300 hover:border-white hover:text-white"
                  >
                    See Demo
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute left-4 top-1/2 animate-bounce">
          <div className="h-3 w-3 rounded-full bg-blue-400 opacity-20"></div>
        </div>
        <div className="absolute right-4 top-1/3 animate-pulse">
          <div className="h-2 w-2 rounded-full bg-purple-400 opacity-30"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-ping">
          <div className="h-1 w-1 rounded-full bg-white opacity-10"></div>
        </div>
      </section>
    </>
  );
};

export default PromptPocketHero;
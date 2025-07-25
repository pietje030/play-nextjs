"use client";
import { useState, useEffect } from "react";

const PromptPocketWhatYouGet = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const deliverables = [
    {
      icon: (
        <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Chrome Extension (ZIP)",
      description: "Complete, working Chrome extension ready to install. No external dependencies or setup required.",
      details: ["Fully functional extension", "No build process needed", "Works immediately after upload", "Latest version included"],
      badge: "Core Product"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Installation Guide",
      description: "Step-by-step instructions with screenshots. Get up and running in under 2 minutes.",
      details: ["Visual walkthrough", "Chrome extension setup", "First-time configuration", "Troubleshooting tips"],
      badge: "Documentation"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "20 Premium AI Prompts",
      description: "Curated collection of high-performing prompts for various use cases. Import directly into your library.",
      details: ["Marketing prompts", "Writing templates", "Business automation", "Creative prompts"],
      badge: "Bonus Content"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Lifetime Updates",
      description: "Get all future updates and improvements at no extra cost. Always have the latest features.",
      details: ["Free version updates", "New features included", "Bug fixes & improvements", "Feature requests considered"],
      badge: "Long-term Value"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                Complete Package
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What You Get for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $39
                </span>
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Everything you need to start organizing your AI prompts today. One payment, lifetime access.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {deliverables.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-1/2">
              <div className="group mb-12">
                <div className="wow fadeInUp relative overflow-hidden rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-dark-2" data-wow-delay=".1s">
                  {/* Badge */}
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 transition-all duration-300 group-hover:bg-blue-50 dark:bg-dark-3 dark:group-hover:bg-dark-2">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mb-6 text-body-color dark:text-dark-6">
                    {item.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-body-color dark:text-dark-6">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-12">
          <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
            <h3 className="mb-4 text-2xl font-bold">
              Total Value: $200+
            </h3>
            <p className="mb-6 text-lg opacity-90">
              Professional Chrome extension + Documentation + Premium prompts + Lifetime updates
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-body-color dark:text-dark-6">
            Join hundreds of AI power users who have already transformed their workflow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-blue-600">500+</span>
              <span>Downloads</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-green-600">4.9</span>
              <span>Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-purple-600">100%</span>
              <span>Privacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPocketWhatYouGet;
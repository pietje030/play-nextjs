"use client";
import { useState, useEffect } from "react";

const PromptPocketFeatures = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: (
        <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "One-Click Save",
      description: "Save prompts and AI responses directly from ChatGPT with a single click. No copy-pasting required.",
      highlight: "Direct Integration"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a2 2 0 012-2z" />
        </svg>
      ),
      title: "Smart Tagging",
      description: "Organize your prompts with custom tags, categories, and notes. Find exactly what you need instantly.",
      highlight: "Powerful Organization"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Lightning Search",
      description: "Advanced search and filtering by tags, keywords, date, or content. Fuzzy search included.",
      highlight: "Find Anything Fast"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Private",
      description: "All data stays on your device. No cloud sync, no tracking, no analytics. Your prompts remain private.",
      highlight: "Privacy First"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: "Export & Backup",
      description: "Export your prompt library as JSON or Markdown. Perfect for backup, sharing, or migration.",
      highlight: "Your Data, Your Control"
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Works Offline",
      description: "No internet required after installation. Access your prompts anytime, anywhere.",
      highlight: "Always Available"
    }
  ];

  return (
    <section id="features" className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                Core Features
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Everything You Need for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Productivity
                </span>
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Prompt Pocket is designed for power users who want complete control over their AI workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="group mb-12">
                <div className="wow fadeInUp relative z-10 rounded-lg bg-white px-8 py-10 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-dark-2" data-wow-delay=".1s">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 transition-all duration-300 group-hover:bg-blue-50 dark:bg-dark-3 dark:group-hover:bg-dark-2">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {feature.title}
                  </h4>

                  {/* Highlight Badge */}
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-body-color dark:text-dark-6">
                    {feature.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Perfect for AI Power Users
            </h3>
            <p className="mb-6 text-body-color dark:text-dark-6">
              Whether you're a freelancer, developer, marketer, or student — organize your AI workflow like a pro.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>ChatGPT Power Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Content Creators</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Developers & VAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Students & Researchers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPocketFeatures;
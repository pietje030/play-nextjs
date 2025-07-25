"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const PromptPocketMockups = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const mockups = [
    {
      title: "Save from ChatGPT",
      subtitle: "One-click integration",
      description: "The 'Save to Prompt Pocket' button appears directly in ChatGPT interface. Save any prompt or response with a single click.",
      features: ["Direct ChatGPT integration", "One-click saving", "Automatic prompt detection", "Context preservation"],
      mockupContent: (
        <div className="rounded-lg bg-gray-900 p-6 text-green-400">
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400">ChatGPT</span>
          </div>
          <div className="space-y-4">
            <div className="rounded bg-gray-800 p-3">
              <p className="text-blue-300">User:</p>
              <p className="text-gray-300">Write a compelling email subject line for a SaaS product launch</p>
            </div>
            <div className="rounded bg-gray-800 p-3">
              <p className="text-green-300">ChatGPT:</p>
              <p className="text-gray-300">"🚀 [Product Name] is Live: Transform Your [Industry] Workflow in 5 Minutes"</p>
              <div className="mt-3 flex space-x-2">
                <button className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700">
                  📁 Save to Prompt Pocket
                </button>
                <button className="rounded bg-gray-600 px-3 py-1 text-xs text-white">Copy</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Smart Organization",
      subtitle: "Tag-based library",
      description: "Organize prompts with custom tags, search by keywords, and create your personal AI snippet library.",
      features: ["Custom tagging system", "Powerful search & filter", "Favorites & folders", "Quick access dashboard"],
      mockupContent: (
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Prompt Library</h3>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Search prompts..." 
                className="rounded border border-gray-300 px-3 py-1 text-sm"
              />
              <button className="rounded bg-blue-600 px-3 py-1 text-sm text-white">+ Add</button>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {["📧 Email", "💼 Business", "✍️ Writing", "🎯 Marketing", "⭐ Favorites"].map((tag) => (
              <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            {[
              { title: "Email Subject Lines", tags: ["📧 Email", "🎯 Marketing"], date: "2 days ago" },
              { title: "Social Media Copy", tags: ["✍️ Writing", "🎯 Marketing"], date: "5 days ago" },
              { title: "Code Documentation", tags: ["💼 Business"], date: "1 week ago" }
            ].map((item, i) => (
              <div key={i} className="rounded border border-gray-200 p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <div className="mt-2 flex space-x-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Export Your Library",
      subtitle: "Complete data control",
      description: "Export your entire prompt collection as JSON or Markdown. Perfect for backup, sharing, or switching devices.",
      features: ["JSON export format", "Markdown export", "Backup & restore", "Cross-device sync"],
      mockupContent: (
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Export Your Prompts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred export format</p>
          </div>
          
          <div className="mb-6 space-y-3">
            <div className="rounded border-2 border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">📄 JSON Format</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Machine-readable, perfect for backup</p>
                </div>
                <button className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                  Export JSON
                </button>
              </div>
            </div>
            
            <div className="rounded border-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">📝 Markdown Format</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Human-readable, great for documentation</p>
                </div>
                <button className="rounded bg-gray-600 px-4 py-2 text-sm text-white hover:bg-gray-700">
                  Export MD
                </button>
              </div>
            </div>
          </div>

          <div className="rounded bg-gray-100 p-4 dark:bg-gray-700">
            <h5 className="mb-2 font-medium text-gray-900 dark:text-white">Export Summary</h5>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Total Prompts:</span>
                <span className="font-medium">127</span>
              </div>
              <div className="flex justify-between">
                <span>Total Tags:</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated:</span>
                <span className="font-medium">Today</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="demo" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                Live Demo
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                See Prompt Pocket{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  In Action
                </span>
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Experience how Prompt Pocket transforms your AI workflow with these interactive previews.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            {mockups.map((mockup, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === index
                    ? "bg-white text-blue-600 shadow-sm dark:bg-gray-700 dark:text-blue-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {mockup.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Mockup */}
        <div className="mx-auto max-w-6xl">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h3 className="mb-3 text-2xl font-bold text-dark dark:text-white sm:text-3xl">
                  {mockups[activeTab].title}
                </h3>
                <p className="mb-4 text-lg text-blue-600 dark:text-blue-400">
                  {mockups[activeTab].subtitle}
                </p>
                <p className="mb-6 text-body-color dark:text-dark-6">
                  {mockups[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {mockups[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-body-color dark:text-dark-6">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative">
                {mockups[activeTab].mockupContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPocketMockups;
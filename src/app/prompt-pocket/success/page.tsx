import Link from "next/link";

export const metadata = {
  title: "Thank You! - Prompt Pocket Download",
  description: "Thank you for purchasing Prompt Pocket! Download your Chrome extension and get started organizing your AI prompts.",
};

export default function PromptPocketSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-16 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl dark:bg-dark-2 md:p-12">
        {/* Success Icon */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
            <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white">
            🎉 Welcome to Prompt Pocket!
          </h1>
          <p className="text-lg text-body-color dark:text-dark-6">
            Thank you for your purchase! Your Chrome extension is ready to download.
          </p>
        </div>

        {/* Download Section */}
        <div className="mb-8 space-y-6">
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                  📦 Chrome Extension (ZIP)
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Ready-to-install Chrome extension. No setup required.
                </p>
              </div>
              <a
                href="/downloads/prompt-pocket-extension.zip"
                download
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Download ZIP
              </a>
            </div>
          </div>

          <div className="rounded-lg border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                  📖 Installation Guide
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Step-by-step instructions with screenshots.
                </p>
              </div>
              <a
                href="/downloads/prompt-pocket-installation-guide.pdf"
                download
                className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                  ⭐ 20 Premium AI Prompts
                </h3>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Curated prompt collection in JSON format.
                </p>
              </div>
              <a
                href="/downloads/prompt-pocket-premium-prompts.json"
                download
                className="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
              >
                Download JSON
              </a>
            </div>
          </div>
        </div>

        {/* Quick Start Steps */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
            Quick Start (2 minutes):
          </h3>
          <ol className="space-y-3 text-body-color dark:text-dark-6">
            <li className="flex items-start space-x-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                1
              </span>
              <span>Download the ZIP file above</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                2
              </span>
              <span>Open Chrome → Settings → Extensions → Enable "Developer mode"</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
              <span>Click "Load unpacked" and select the extracted folder</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                4
              </span>
              <span>Visit ChatGPT and start saving prompts! 🚀</span>
            </li>
          </ol>
        </div>

        {/* Important Info */}
        <div className="mb-8 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <div className="flex items-start space-x-3">
            <svg className="mt-0.5 h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300">
                Important: Save these links!
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Bookmark this page for future downloads and updates. Check your email for the download links too.
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
            Need Help?
          </h3>
          <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="mailto:support@promptpocket.com"
              className="inline-flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Support</span>
            </a>
            <a
              href="/downloads/prompt-pocket-installation-guide.pdf"
              className="inline-flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Guide</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-body-color dark:text-dark-6">
            Thank you for choosing Prompt Pocket! We hope you love organizing your AI prompts.
          </p>
          <div className="mt-4">
            <Link
              href="/prompt-pocket"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ← Back to Prompt Pocket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
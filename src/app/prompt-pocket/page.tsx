import dynamic from 'next/dynamic';

// Import components dynamically to avoid SSR issues
const PromptPocketHero = dynamic(() => import('@/components/PromptPocket/Hero'), { ssr: false });
const PromptPocketFeatures = dynamic(() => import('@/components/PromptPocket/Features'), { ssr: false });
const PromptPocketMockups = dynamic(() => import('@/components/PromptPocket/Mockups'), { ssr: false });
const PromptPocketPricing = dynamic(() => import('@/components/PromptPocket/Pricing'), { ssr: false });
const PromptPocketWhatYouGet = dynamic(() => import('@/components/PromptPocket/WhatYouGet'), { ssr: false });
const PromptPocketFAQ = dynamic(() => import('@/components/PromptPocket/FAQ'), { ssr: false });
const PromptPocketCTA = dynamic(() => import('@/components/PromptPocket/CTA'), { ssr: false });

export const metadata = {
  title: "Prompt Pocket - Save & Organize Your AI Prompts Locally",
  description: "Privacy-friendly Chrome extension to save, tag, search and export your ChatGPT prompts & AI snippets. Works completely offline with local storage.",
  keywords: "ChatGPT prompts, AI prompts, Chrome extension, privacy, offline, local storage, AI productivity",
};

export default function PromptPocketPage() {
  return (
    <>
      <PromptPocketHero />
      <PromptPocketFeatures />
      <PromptPocketMockups />
      <PromptPocketWhatYouGet />
      <PromptPocketPricing />
      <PromptPocketFAQ />
      <PromptPocketCTA />
    </>
  );
}
"use client";
import { useState, useEffect } from "react";

const PromptPocketFAQ = () => {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Moet ik iets installeren?",
      answer: "Nee, je hoeft alleen de extensie te uploaden via Chrome extensiebeheer. De ZIP-file bevat alles wat je nodig hebt. Geen externe software, geen setup, geen registratie vereist."
    },
    {
      question: "Werkt het offline?",
      answer: "Ja, volledig! Prompt Pocket slaat alle data lokaal op in je browser. Na installatie heb je geen internetverbinding nodig om je prompts te bekijken, bewerken of exporteren."
    },
    {
      question: "Is mijn data veilig?",
      answer: "Absoluut. Alles blijft lokaal op jouw apparaat opgeslagen. Geen cloud, geen tracking, geen analytics. Jouw prompts verlaten nooit je computer, tenzij je ze zelf exporteert."
    },
    {
      question: "Kan ik het exporteren?",
      answer: "Ja! Je kunt je complete prompt-bibliotheek exporteren als JSON (machine-readable) of Markdown (human-readable). Perfect voor backup, delen of migreren naar een ander apparaat."
    },
    {
      question: "Kan ik het gebruiken op meerdere apparaten?",
      answer: "Ja, via de ZIP-file. Je kunt de extensie op zoveel computers installeren als je wilt. Gebruik de export/import functie om je prompts tussen apparaten te synchroniseren."
    },
    {
      question: "Werkt het met andere AI tools dan ChatGPT?",
      answer: "Momenteel is Prompt Pocket geoptimaliseerd voor ChatGPT, maar je kunt handmatig prompts van elke AI-tool toevoegen. Toekomstige updates kunnen ondersteuning voor andere platforms bevatten."
    },
    {
      question: "Wat als ik problemen heb met de installatie?",
      answer: "De installatie-guide bevat stap-voor-stap instructies met screenshots. Als je er niet uitkomt, kun je contact opnemen voor ondersteuning. De meeste installaties duren minder dan 2 minuten."
    },
    {
      question: "Krijg ik updates?",
      answer: "Ja! Alle toekomstige updates zijn gratis inbegrepen. Je krijgt toegang tot een downloadpagina waar je altijd de nieuwste versie kunt ophalen."
    },
    {
      question: "Kan ik mijn geld terugkrijgen?",
      answer: "Uiteraard. Als je niet tevreden bent binnen 30 dagen, krijg je je geld volledig terug. Geen vragen gesteld."
    },
    {
      question: "Hoeveel prompts kan ik opslaan?",
      answer: "Er is geen limiet! Je kunt zoveel prompts opslaan als je browser's lokale storage toelaat (meestal vele duizenden). De extensie is geoptimaliseerd voor snelle prestaties, zelfs met grote collecties."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">
                Veel Gestelde Vragen
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Heb je nog{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vragen?
                </span>
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Hier vind je antwoorden op de meest gestelde vragen over Prompt Pocket.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12 lg:mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="wow fadeInUp rounded-lg bg-white shadow-md dark:bg-dark-2"
                  data-wow-delay=".1s"
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="text-lg font-semibold text-dark dark:text-white">
                      {faq.question}
                    </h4>
                    <div className="ml-4 flex-shrink-0">
                      <svg
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? "rotate-180" : ""
                        } text-blue-600`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="px-6">
                      <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                        <p className="text-body-color dark:text-dark-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md dark:bg-dark-2">
            <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
              Nog steeds vragen?
            </h3>
            <p className="mb-6 text-body-color dark:text-dark-6">
              Aarzel niet om contact op te nemen. We helpen je graag verder met Prompt Pocket.
            </p>
            <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="mailto:support@promptpocket.com"
                className="inline-flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Ondersteuning</span>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Probeer Nu - $39</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptPocketFAQ;
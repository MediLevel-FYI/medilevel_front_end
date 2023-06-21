'use client'
import React, { useState } from 'react';

interface QAdata {
  question: string;
  answer: string;
}

type Props = {
  faqs: QAdata[];
};

const Faq = ({ faqs }: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto text-center mb-5 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">FAQ</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {faqs.map((faq, index) => (
            <div
              className={`hs-accordion ${expandedIndex === index ? 'hs-accordion-active:bg-gray-100' : ''} rounded-xl p-6 dark:${
                expandedIndex === index ? 'hs-accordion-active:bg-white/[.05]' : ''
              }`}
              id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
              key={index}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <svg
                  className={`${
                    expandedIndex === index ? 'hidden' : ''
                  } hs-accordion-active:block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg
                  className={`${
                    expandedIndex === index ? 'hs-accordion-active:block' : 'hidden'
                  } w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div
                id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                  expandedIndex === index ? '' : 'h-0'
                }`}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
              >
                <p className="text-gray-800 dark:text-gray-200">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

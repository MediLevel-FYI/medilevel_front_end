import React from 'react';

interface QAdata {
  question: string;
  answer: string | string[];
}

type FaqProps = {
  faqs: QAdata[];
};

const Faq = ({ faqs }: FaqProps) => {
  const renderAnswer = (answer: string) => {
    // Regular expression to match URLs
    const urlRegex = /https?:\/\/[^\s]+/g
    const matchedPattern = answer.match(urlRegex);

    // If not matches, there's no URL, return the answer
    if (!matchedPattern) {
      return <span>{answer}</span>;
    }
    // Split the answer by URLs and create an array of parts (text and links)
    const url = matchedPattern[0];
    const matchIndex = answer.indexOf(url);
    const urlLength = url.length;
    const beforeUrl = answer.slice(0, matchIndex);
    const afterUrl = answer.slice(matchIndex + urlLength);

    return (
      <>
        <span>{beforeUrl}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {url}
        </a>
        <span>{afterUrl}</span>
      </>
    );
  };

    return (
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-1 sm:space-y-4">
          {faqs.map((faq, index) => (
            <li 
              key={index}
              className="p-2 sm:p-6 rounded-xl"
            >
              <h3 
                className="mb-2 text-xl font-semibold text-black sm:text-2xl md:text-3xl"
              >
                {faq.question}
              </h3>
              {Array.isArray(faq.answer) ? (
                faq.answer.map((answer, index) => {
                  return (
                    <p 
                      className="py-1 text-sm text-gray-600 sm:py-2 sm:text-base"
                      key={index}
                    >
                      {renderAnswer(answer)}
                    </p>
                  );
                })
              ) : (
                <p
                  className="text-sm text-gray-600 sm:text-base"
                >
                  {renderAnswer(faq.answer)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Faq;

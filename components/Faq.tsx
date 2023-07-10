import React from 'react';

interface QAdata {
  question: string;
  answer: string;
}

type Props = {
  faqs: QAdata[];
};

const Faq = ({ faqs }: Props) => {  
  return (
    <div className="max-w-3xl mx-auto">
      <ul className="space-y-1 sm:space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="p-2 sm:p-6 rounded-xl">
            <h3 className="mb-2 text-xl font-semibold text-black sm:text-2xl md:text-3xl">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              faq.answer.map((answer, index) => {
                return <p className="py-1 text-sm text-gray-600 sm:py-2 sm:text-base" key={index}>{answer}</p>
              })) : (
                <p className="text-sm text-gray-600 sm:text-base">{faq.answer}</p>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;

// const Faq = ({ faqs }: Props) => {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     if (index === expandedIndex) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   return (
//     <>
//       <div className="max-w-3xl mx-auto">
//         <div className="hs-accordion-group">
//           {faqs.map((faq, index) => (
//             <div
//               className={`hs-accordion hs-accordion-active:bg-[#012060] bg-[#012060] my-4 rounded-xl p-6 dark:${expandedIndex === index ? 'hs-accordion-active:bg-white/[.05]' : ''
//                 }`}
//               id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
//               key={index}
//             >
//               <button
//                 className="inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-white transition hs-accordion-toggle group gap-x-3 md:text-xl hover:text-white/70 dark:text-gray-200 dark:hover:text-gray-400"
//                 aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 {faq.question}
//                 <svg
//                   className={`${expandedIndex === index ? 'hidden' : ''
//                     } hs-accordion-active:block w-3 h-3 text-white group-hover:text-white/70 dark:text-gray-400`}
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//                 <svg
//                   className={`${expandedIndex === index ? 'hs-accordion-active:block' : 'hidden'
//                     } w-3 h-3 text-white group-hover:text-white dark:text-gray-400`}
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </button>
//               <div
//                 id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
//                 className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-1000 animate-accordion-up ${expandedIndex === index ? 'animate-accordion-down' : 'h-0'
//                   }`}
//                 aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
//               >
//                 <p className='p-3 text-gray-800 bg-white rounded-md dark:text-gray-200'>
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Faq;

import React from 'react'
import Blockquote from '@/components/Blockquote'

const AboutUs = () => {
  return (
    <div className="max-w-2xl mx-auto">

      <ul className="mt-4">
        <Blockquote 
          quote="“When I was applying for jobs out of residency, I had to figure out whether anyone I knew was at a practice, then I had to see if they would be willing to provide me any information about how they&apos;re paid. Sharing this information is done so ad-hoc and informally - it&apos;s so hard to understand what my best options are, as far as pay, until I invest a ton of time and hopefully receive an offer.”"
        />

        <Blockquote 
          quote="“Looking at an offer from a hospital, I have no idea whether I&apos;m being paid more, less, or the same as my future colleagues. I always get the sense that they&apos;re trying to pay me as little as they need to - I wish the process was more transparent and clear.”"
        />
        <Blockquote 
          quote="“During COVID, I found out through conversations that new hires were being paid substantially more than the rest of the team who have been here for years, if not over a decade. Admin never felt like they had to address this - but we all talked about it behind the scenes.”"
        />
        {/* <blockquote className="italic border-l-4 border-gray-300 text-gray-800 p-2 rounded-sm my-2 dark:text-gray-200">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
         <p> “When I was applying for jobs out of residency, I had to figure out whether anyone I knew was at a practice, then I had to see if they would be willing to provide me any information about how they&apos;re paid. Sharing this information is done so ad-hoc and informally - it&apos;s so hard to understand what my best options are, as far as pay, until I invest a ton of time and hopefully receive an offer.”</p>
        </blockquote> */}
        {/* <blockquote className="italic bg-gray-200 text-gray-800 p-2 rounded-sm my-2 dark:text-gray-200">
          “Looking at an offer from a hospital, I have no idea whether I&apos;m being paid more, less, or the same as my future colleagues. I always get the sense that they&apos;re trying to pay me as little as they need to - I wish the process was more transparent and clear.”
        </blockquote>
        <blockquote className="italic bg-gray-200 text-gray-800 p-2 rounded-sm my-2 dark:text-gray-200">
          “During COVID, I found out through conversations that new hires were being paid substantially more than the rest of the team who have been here for years, if not over a decade. Admin never felt like they had to address this - but we all talked about it behind the scenes.”
        </blockquote> */}
      </ul>

      <div className="mt-5">
        <p className="my-2 text-gray-800 dark:text-gray-200">
          At MedPay, we understand the transformative potential of information sharing on boosting compensation for workers. We&apos;ve witnessed the power of organized knowledge exchange to transform technology, professional services, and other industry practices firsthand. Now, we aim to extend this impact to the medical field.
        </p>
        <p className="my-2 text-gray-800 dark:text-gray-200">
          Our mission is to create a platform that empowers medical workers by facilitating transparency, allowing discussions for fair wages. By fostering a culture of transparency, organization, and community, we aspire to revolutionize compensation practices for medical providers. Join us on this journey toward a future where wage transparency and collective empowerment redefine possibilities for all medical professionals.
        </p>
      </div>
    </div>

  )
}

export default AboutUs

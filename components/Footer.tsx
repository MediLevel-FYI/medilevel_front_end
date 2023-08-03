import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

      <div className="text-center">
        <div>
          <Link
            className="flex-none text-xl font-semibold text-black dark:text-white" href="/"
            aria-label="Brand"
          >
            MedPay
          </Link>
        </div>


        <div className="mt-3">
          <p className="text-gray-500">
            Level up your medical career with <span className="font-semibold text-black underline">accurate</span> salary data.
          </p>
          <p className="text-gray-500">
            © MedPay. 2023 &middot; All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer

'use client'
import { useContext } from 'react'
import useActiveLink from '@/hooks/useActiveLink'
import { MobileMenuContext } from '@/context/mobile-menu.context'
import Link from 'next/link'
import ContributeModal from './ContributeModal'

const NavLinks = () => {
  const isHomeActive = useActiveLink('/')
  const isAboutActive = useActiveLink('/about')
  const isFaqActive = useActiveLink('/faq')
  const { state, toggleMobileMenu } = useContext(MobileMenuContext)

  return (
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <Link
        className={`font-medium ${isHomeActive ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500`}
        href="/"
        aria-current="page"
        onClick={toggleMobileMenu}
      >
        Home
      </Link>
      <Link
        className={`font-medium ${isAboutActive ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500`}
        href="/about"
        onClick={toggleMobileMenu}
      >
        About
      </Link>
      <Link
        className={`font-medium ${isFaqActive ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500`}
        href="/faq"
        onClick={toggleMobileMenu}
      >
        FAQ
      </Link>
      <Link
        className={`font-medium ${isFaqActive ? 'text-blue-500' : 'text-gray-600'} hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500`}
        href="/contact"
        onClick={toggleMobileMenu}
      >
        Contact Us
      </Link>
      <ContributeModal />
      {/* <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Salaries</Link> */}
      {/* <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Hospitals</Link> */}
      {/* <Link className="flex items-center font-medium text-gray-600 gap-x-2 sm:pl-6 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        Log in 
      </Link> */}
    </div>
  )
}

export default NavLinks

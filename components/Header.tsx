'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
// import SearchBar from './SearchBar'
import Image from 'next/image'
import { MobileMenuContext } from '@/context/mobile-menu.context'
import NavLinks from './NavLinks'

const Header = () => {
  const { state, toggleMobileMenu } = useContext(MobileMenuContext)

  return (
    <header className="z-50 flex flex-wrap w-full py-4 text-sm bg-white sm:justify-start sm:flex-nowrap dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link className="inline-flex items-center text-xl font-semibold gap-x-2 dark:text-white" href="/">
            <Image className="rounded-full" src="/MediLevel_Logo.svg" width={40} height={40} alt="A blue cross with a superimposed trend line going up and to the right, representing the increasing compensation that is expected with increased experience in the medical profession."/>
            MedPay
          </Link>
          
            
          <div className="sm:hidden">
            <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
              <svg className='w-4 h-4 hs-collapse-open:hidden' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg className='hidden w-4 h-4 hs-collapse-open:block' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* <div className="hidden min-[930px]:flex items-center justify-center basis-full grow shrink">
          <SearchBar />
        </div> */}

        <div 
          id="navbar-image-and-text-1"
          // className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
          className={`overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block ${state.isOpen === true ? 'block' : 'hidden'}`}
          >
          <NavLinks />
        </div>
      </nav>
    </header>
  )
}

export default Header

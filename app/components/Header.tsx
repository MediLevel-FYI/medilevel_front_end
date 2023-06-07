import React from 'react'
import Logo from './Logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="items-center block bg-gray-200">
     <div>
       <nav className="flex justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
         <div className="flex items-center">
         <form>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg"
              >
                Search
              </button>
            </div>
          </form>
         </div>
         <div className="flex items-center">
          <button className="p-2">Sign In</button>
          <button className="p-2">Sign Up</button>
         </div>
       </nav>
     </div>
    </header>
  )
}

export default Header

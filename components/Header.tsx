import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

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
              <SearchBar />
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

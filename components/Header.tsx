import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { Button } from '@/components/ui/button'

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
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

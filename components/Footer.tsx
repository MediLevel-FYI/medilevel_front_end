import React from 'react'
import Logo from './Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='block bg-gray-200'>
      <div className="flex items-center">
        <Logo />
        <p className="flex items-center">Helping medical providers build better careers</p>
      </div>
    </div>
  )
}

export default Footer

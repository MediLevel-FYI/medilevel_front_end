import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <>
      <div className="relative w-10 h-10">
        <Link href="/">
          <Image 
            src='/MediLevel_Logo.png'
            alt='A blue cross with a line trending up and to the right representing increasing compensation with experience.'
            fill
            className="object-contain rounded-md"
            />
        </Link>
      </div>
        <p className="p-2 m-1">
          MediLevels.fyi
        </p>
    </>
  )
}

export default Logo

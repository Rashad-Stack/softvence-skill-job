import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full shadow-md bg-white fixed top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0 py-4 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Company Logo"
            width={250}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Button */}
        {/* <Link className="text-sm sm:text-base bg-[#038317] text-white px-4 py-2 rounded-lg hover:bg-[#40854a] transition font-pop font-semibold" href="/careers" aria-label="View all job roles">
            View all roles
        </Link> */}

      </div>
    </nav>
  )
}



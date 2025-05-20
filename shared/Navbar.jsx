import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/images/logo.png';

export default function Navbar() {
  return (
    <header className="w-full shadow-md bg-white fixed top-0 z-10">
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-0 py-4 flex items-center justify-between gap-4"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Softvence Company Logo"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
      </nav>
    </header>
  );
}



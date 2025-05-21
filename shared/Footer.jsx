'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import bg from '@/assets/images/BG.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full py-14 h-[260px] bg-center bg-cover bg-no-repeat text-white bg-[#f3f4f6]"
      style={{ backgroundImage: `url(${bg.src})` }}
      aria-label="Website Footer"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        
        {/* Navigation Links */}
        <nav className="mb-6" aria-label="Footer navigation">
          <ul className="flex justify-center space-x-8 font-semibold text-black">
            <li>
              <Link href="/" aria-label="Go to homepage">Home</Link>
            </li>
            <li>
              <Link href="/" aria-label="View career opportunities">Careers</Link>
            </li>
            <li>
              <Link href="/" aria-label="Read our privacy policy">Privacy</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-[#22c55e]" aria-label="Social media links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Softvence on Facebook"
            className="rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Softvence on Twitter"
            className="rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Softvence on Instagram"
            className="rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Softvence on YouTube"
            className="rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-sm text-black">
          <p>© {currentYear} <strong>Softvence</strong>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

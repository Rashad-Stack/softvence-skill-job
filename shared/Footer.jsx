'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import bg from '@/assets/images/BG.png';
import Image from 'next/image';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return <footer
      className="w-full py-14 h-[260px] bg-center bg-cover bg-no-repeat text-white bg-[#f3f4f6]"
      style={{ backgroundImage: `url(${bg.src})`}}
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex justify-center space-x-8 font-semibold text-black ">
            <li>
              <Link href="/" className="" aria-label="Go to homepage">
                Home
              </Link>
            </li>
            <li>
              <Link href="/career" className="" aria-label="Career opportunities">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="" aria-label="Privacy policy">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 text-[#22c55e]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 hover:bg-[#22c55e] hover:text-white transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-sm text-black">
          <p>© {currentYear} Softvence. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}

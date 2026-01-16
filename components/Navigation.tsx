'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const menuItemsLeft = [
  { name: 'Domov', href: '/' },
  { name: 'Novinky', href: '/novinky' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Hudba', href: '/hudba' },
];

const menuItemsRight = [
  { name: 'Tour', href: '/tour' },
  { name: 'Merch', href: '/merch' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Sleduj nás', href: '/sleduj-nas' },
];

const allMenuItems = [...menuItemsLeft, ...menuItemsRight];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-b from-[#1a1a1a]/80 via-[#000000]/60 to-transparent backdrop-blur-md pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Menu Items */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {menuItemsLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wide hover:scale-110 hover:-translate-y-1 hover:bg-[#ff0000] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] rounded ${
                  pathname === item.href ? 'text-[#ff0000] bg-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.5)]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo in Center */}
          <Link href="/" className="flex-shrink-0 mx-8 transition-transform duration-300 hover:scale-110">
            <Image
              src="/images/cc_logo.png"
              alt="Crea Cage Logo"
              width={120}
              height={60}
              className="h-auto w-auto max-h-16 object-contain"
              priority
            />
          </Link>

          {/* Right Menu Items */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {menuItemsRight.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wide hover:scale-110 hover:-translate-y-1 hover:bg-[#ff0000] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] rounded ${
                  pathname === item.href ? 'text-[#ff0000] bg-[#ff0000]/20 shadow-[0_0_15px_rgba(255,0,0,0.5)]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-[#333]/50">
            <div className="flex flex-col space-y-4">
              {allMenuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 transition-all duration-300 text-sm font-medium uppercase tracking-wide hover:bg-[#ff0000] hover:text-white hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] hover:translate-x-2 rounded ${
                    pathname === item.href ? 'text-[#ff0000] bg-[#ff0000]/20' : 'text-white'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}

// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const pathname = usePathname();

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
    { name: 'Geology', href: '/geology' },
    { name: 'Logistics', href: '/logistics' },
    { name: 'Energy', href: '/energy' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1
                className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-red-600' : 'text-green-600'
                }`}
              >
                Logo
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm lg:text-base font-medium ${
                    pathname === link.href ? 'text-green-500' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <span className={`text-sm font-medium ${language === 'EN' ? 'text-green-500' : 'text-gray-400'}`}>
                  EN
                </span>
                <span className="text-white">|</span>
                <span className={`text-sm font-medium ${language === 'FR' ? 'text-green-500' : 'text-gray-400'}`}>
                  FR
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white"
              >
                <span className="text-sm">EN</span>
                <span>|</span>
                <span className="text-sm">FR</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
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
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl hover:text-green-500 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: '64px' }}
        />
      )}
    </>
  );
};

export default Navbar;
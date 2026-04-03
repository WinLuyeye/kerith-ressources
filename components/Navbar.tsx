'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'A propos', href: '/about' },
    { name: 'Projet', href: '/project' },
    { name: 'Géologie', href: '/geology' },
    { name: 'Logistique', href: '/logistics' },
    { name: 'Énergie', href: '/energy' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  // Version pendant l'hydratation
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-40 md:w-56 h-12 md:h-16">
                <Image
                  src="/logo1.png"
                  alt="Kerith Ressources Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-white transition-colors duration-200 text-base lg:text-base font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cf9001] transition-all duration-300 group-hover:w-full group-hover:bg-[#cf9001]"></span>
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <button className="flex items-center space-x-2 text-white">
                <span className="text-base font-medium text-[#cf9001]">EN</span>
                <span className="text-gray-500">|</span>
                <span className="text-base font-medium text-gray-400">FR</span>
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button className="text-white">
                <span className="text-base">EN</span>
              </button>
              <button className="text-white">
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo avec animation */}
            <Link href="/" className="flex-shrink-0 transition-all duration-500">
              <div className={`relative transition-all duration-500 ${
                isScrolled || isMobileMenuOpen
                  ? 'w-40 md:w-52 h-12 md:h-14' 
                  : 'w-44 md:w-60 h-14 md:h-18'
              }`}>
                <Image
                  src={isScrolled || isMobileMenuOpen ? '/logo2.png' : '/logo1.png'}
                  alt="Kerith Ressources Logo"
                  fill
                  className="object-contain transition-opacity duration-500"
                  priority
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative transition-colors duration-200 text-base lg:text-base font-medium ${
                    isScrolled || isMobileMenuOpen
                      ? 'text-black' 
                      : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled || isMobileMenuOpen
                      ? 'bg-[#cf9001] group-hover:bg-[#cf9001]' 
                      : 'bg-[#cf9001] group-hover:bg-[#cf9001]'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Language Switcher Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 transition-colors duration-200 ${
                  isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'
                }`}
              >
                <span className={`text-base font-medium transition-colors duration-200 ${
                  language === 'EN' 
                    ? 'text-[#cf9001]' 
                    : (isScrolled || isMobileMenuOpen ? 'text-gray-400' : 'text-gray-400')
                }`}>
                  EN
                </span>
                <span className={isScrolled || isMobileMenuOpen ? 'text-gray-400' : 'text-gray-500'}>|</span>
                <span className={`text-base font-medium transition-colors duration-200 ${
                  language === 'FR' 
                    ? 'text-[#cf9001]' 
                    : (isScrolled || isMobileMenuOpen ? 'text-gray-400' : 'text-gray-400')
                }`}>
                  FR
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className={`transition-colors duration-200 text-base ${
                  isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'
                }`}
              >
                <span>EN</span>
                <span className="mx-1">|</span>
                <span>FR</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none transition-all duration-200 z-50 relative ${
                  isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'
                }`}
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
      </nav>

      {/* Mobile Navigation - Glisse de droite à gauche */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full z-40 transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: 0 }}
      >
        {/* Overlay sombre */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
          <div className="flex flex-col pt-24 pb-8 px-6">
            {/* Header avec logo dans le menu */}
            {/* <div className="mb-8 pb-4 border-b border-gray-200">
              <div className="relative w-40 h-12 mx-auto">
                <Image
                  src="/logo2.png"
                  alt="Kerith Ressources Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div> */}
            
            {/* Liens de navigation */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black text-lg hover:text-[#cf9001] transition-colors duration-200 font-medium px-4 py-3 rounded-lg hover:bg-gray-50"
                  style={{
                    animation: isMobileMenuOpen ? `slideInFromRight 0.4s ease-out ${index * 0.05}s forwards` : 'none',
                    opacity: 0,
                    transform: 'translateX(20px)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Séparateur */}
            <div className="h-px bg-gray-200 my-6"></div>
            
            {/* Langues dans le menu mobile */}
            <div className="flex items-center justify-center space-x-6 py-4">
              <button
                onClick={() => {
                  setLanguage('EN');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-base font-medium transition-colors ${
                  language === 'EN' ? 'text-[#cf9001]' : 'text-gray-500'
                }`}
              >
                ENGLISH
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => {
                  setLanguage('FR');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-base font-medium transition-colors ${
                  language === 'FR' ? 'text-[#cf9001]' : 'text-gray-500'
                }`}
              >
                FRANÇAIS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
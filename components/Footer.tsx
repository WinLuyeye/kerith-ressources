'use client';

import Link from "next/link";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projet', href: '/project' },
    // { name: 'Géologie', href: '/geology' },
    // { name: 'Logistique', href: '/logistics' },
    // { name: 'Énergie', href: '/energy' },
    { name : 'Actualités', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  // const legalLinks = [
  //   { name: 'Mentions légales', href: '/legal' },
  //   { name: 'Politique de confidentialité', href: '/privacy' },
  //   { name: 'Conditions générales', href: '/terms' },
  // ];

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10 },
  };

return (
  <footer className="bg-[#003233] text-white">
    {/* Section réseaux sociaux */}
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
      <h4 className="text-base lg:text-base font-medium mb-4 md:mb-0">Suivez-nous sur</h4>
      <div className="flex space-x-4">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
          <motion.a
            key={idx}
            href="#"
            rel="noopener noreferrer"
            className="p-2 bg-[#cf8e02] rounded-full"
            whileHover="hover"
            variants={iconVariants}
            aria-label={`Social ${idx}`}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>

    <hr className="border-gray-700" />

    {/* Section contact et menus */}
    <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between gap-10 flex-wrap">
      {/* Contact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-base lg:text-base font-extrabold mb-4">Nous contacter</h4>
        <ul className="space-y-6 text-base lg:text-base font-medium">
          <li className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
            <span>
              01. Avenue OUA, République Démocratique du Congo,
              <br />
              Concession Procoki, Ngaliema - Kinshasa
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt className="flex-shrink-0" />
            <a href="tel:+243999999999" className="hover:text-[#cf8e02] transition-colors">
              +243 999 999 999
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="flex-shrink-0" />
            <a href="mailto:contact@kerithressourcesdrc.com" className="hover:text-[#cf8e02] transition-colors">
              contact@kerithressourcesdrc.com
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Navigation principale */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h4 className="text-base lg:text-base font-extrabold mb-4">Navigation</h4>
        <ul className="space-y-2 text-base lg:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-[#cf8e02] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Ressources */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h4 className="text-base lg:text-base font-extrabold mb-4">Ressources</h4>
        <ul className="space-y-2 text-base lg:text-base font-medium">
          <li>
            <Link href="/news" className="hover:text-[#cf8e02] transition-colors">
              Actualités
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-[#cf8e02] transition-colors">
              Galerie
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#cf8e02] transition-colors">
              FAQ
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* Liens légaux - Commentés mais prêts à être utilisés */}
      {/*
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h4 className="text-base lg:text-base font-extrabold mb-4">Légal</h4>
        <ul className="space-y-2 text-base lg:text-base font-medium">
          {legalLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-[#cf8e02] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      */}
    </div>

    <hr className="border-gray-700" />

    {/* Footer bas */}
    <motion.div 
      className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p>© {currentYear} KERITH RESSOURCES SARL. Tous droits réservés.</p>
      <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
        <Link href="/#" className="hover:text-[#cf8e02] transition-colors text-xs">
          Confidentialité
        </Link>
        <span className="text-gray-600">|</span>
        <Link href="/#" className="hover:text-[#cf8e02] transition-colors text-xs">
          Conditions d&apos;utilisation
        </Link>
        <span className="text-gray-600">|</span>
        <Link href="/#" className="hover:text-[#cf8e02] transition-colors text-xs">
          Cookies
        </Link>
      </div>
    </motion.div>
  </footer>
);
}
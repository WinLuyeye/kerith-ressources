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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Liens principaux identiques à la navbar
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projet', href: '/project' },
    { name: 'Géologie', href: '/geology' },
    { name: 'Logistique', href: '/logistics' },
    { name: 'Énergie', href: '/energy' },
    { name: 'Contact', href: '/contact' },
  ];

  // Liens légaux (à ajouter)
  const legalLinks = [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Conditions générales', href: '/terms' },
  ];

  return (
    <footer className="bg-[#003233] text-white">
      {/* Section réseaux sociaux */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-base lg:text-base font-medium mb-4 md:mb-0">Suivez-nous sur</h4>
        <div className="flex space-x-4">
          <a 
            href="#" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="#" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="#" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="#" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Section contact et menus */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact */}
        <div>
          <h4 className="text-base lg:text-base font-extrabold mb-4">Nous contacter</h4>
          <ul className="space-y-3 text-base lg:text-base font-medium">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
              <span>
                01. Avenue OUA, République Démocratique du Congo,
                <br />
                Concession Procoki, Ngaliema - Kinshasa
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="flex-shrink-0" />
              <a href="tel:+243999999999" className="hover:text-[#cf8e02] transition-colors">
                +243 999 999 999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="flex-shrink-0" />
              <a href="mailto:contact@kerithressourcesdrc.com" className="hover:text-[#cf8e02] transition-colors">
                contact@kerithressourcesdrc.com
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation principale */}
        <div>
          <h4 className="text-base lg:text-base font-extrabold mb-4">Navigation</h4>
          <ul className="space-y-2 text-base lg:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:text-[#cf8e02] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ressources */}
        <div>
          <h4 className="text-base lg:text-base font-extrabold mb-4">Ressources</h4>
          <ul className="space-y-2 text-base lg:text-base font-medium">
            <li>
              <Link href="/news" className="hover:text-[#cf8e02] transition-colors">
                Actualités
              </Link>
            </li>
            {/* <li>
              <Link href="/blog" className="hover:text-[#cf8e02] transition-colors">
                Blog
              </Link>
            </li> */}
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
        </div>

        {/* Liens légaux */}
        <div>
          <h4 className="text-base lg:text-base font-extrabold mb-4">Légal</h4>
          <ul className="space-y-2 text-base lg:text-base font-medium">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:text-[#cf8e02] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Footer bas */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        <p>
          © {currentYear} KERITH RESSOURCES SARL. Tous droits réservés.
        </p>
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
      </div>
    </footer>
  );
}
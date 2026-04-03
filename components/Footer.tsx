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
  
  return (
    <footer className="bg-[#003233] text-white">
      {/* Section réseaux sociaux */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-sm font-semibold mb-4 md:mb-0">Suivez-nous sur</h4>
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#cf8e02] rounded-full hover:bg-[#f59e0b] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
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
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Nous contacter</h4>
          <ul className="space-y-3 text-sm">
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

        {/* Liens rapides */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#cf8e02] transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#cf8e02] transition-colors">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link href="#activities" className="hover:text-[#cf8e02] transition-colors">
                Nos activités
              </Link>
            </li>
            <li>
              <Link href="#publications" className="hover:text-[#cf8e02] transition-colors">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#cse" className="hover:text-[#cf8e02] transition-colors">
                RSE
              </Link>
            </li>
            <li>
              <Link href="#media" className="hover:text-[#cf8e02] transition-colors">
                Médias
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#cf8e02] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Médias & Actualités */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Médias & Actualités</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/news" className="hover:text-[#cf8e02] transition-colors">
                Actualités
              </Link>
            </li>
            <li>
              <Link href="/press-releases" className="hover:text-[#cf8e02] transition-colors">
                Communiqués de presse
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#cf8e02] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#cf8e02] transition-colors">
                Galerie
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Footer bas */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        <p>
          © {currentYear} KERITH RESSOURCES SARL. Tous droits réservés.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/legal" className="hover:text-[#cf8e02] transition-colors text-xs">
            Mentions légales
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-[#cf8e02] transition-colors text-xs">
            Politique de confidentialité
          </Link>
          <span>|</span>
          <Link href="/cookies" className="hover:text-[#cf8e02] transition-colors text-xs">
            Gestion des cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003233] text-white">
      {/* Section réseaux sociaux */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <h4 className="text-sm font-semibold mb-4 md:mb-0">Suivez-nous sur</h4>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/gecaminessa/" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-700 rounded-full hover:bg-orange-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/gecaminessa" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-700 rounded-full hover:bg-orange-600 transition">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-700 rounded-full hover:bg-orange-600 transition">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-orange-700 rounded-full hover:bg-orange-600 transition">
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
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 419, Blvd Kamanyola, Lshi, RDC
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:+243970053195">+243 970 053 195</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:info@gecamines.cd">info@gecamines.cd</a>
            </li>
          </ul>
        </div>

        {/* Médias */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Médias</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="https://gecamines.cd/news/">Actualités</Link>
            </li>
            <li>
              <Link href="https://gecamines.cd/communiques-de-presse/">Communiqués de presse</Link>
            </li>
          </ul>
        </div>

        {/* Qui sommes-nous */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Qui sommes-nous ?</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="https://gecamines.cd/">Home</Link>
            </li>
            <li>
              <Link href="#">Who We Are</Link>
            </li>
            <li>
              <Link href="#">Activities</Link>
            </li>
            <li>
              <Link href="#">Publications</Link>
            </li>
            <li>
              <Link href="#">CSE</Link>
            </li>
            <li>
              <Link href="#">Media</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Footer bas */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
        ©2026 KERITH RESSOURCES SARL.
      </div>
    </footer>
  );
}
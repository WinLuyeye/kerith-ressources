"use client";
import { useState, useRef, SetStateAction } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Vérifier reCAPTCHA
    if (!recaptchaToken) {
      alert("Veuillez vérifier que vous n'êtes pas un robot");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
        setFormData({ name: "", email: "", message: "" });
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
      } else {
        alert(`❌ Erreur: ${data.error}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("❌ Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 px-5 min-h-[700px]">
      {/* Google Maps background + overlay */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4556641835625!2d15.2741812!3d-4.325179399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3129ac4e4fa5%3A0xa6babea9dabcacd3!2sConcession%20Safricas!5e0!3m2!1sfr!2scd!4v1775236361802!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="py-16 px-8 bg-white relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 z-10 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column - Info */}
        <motion.div
          className="text-black flex flex-col justify-center px-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-[#1f2937] mb-4">
            Contactez-nous
          </h2>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-[#cf8e02]"
          />
          <p className="text-base font-medium mb-6 max-w-lg mt-4">
            Vous avez une question ou souhaitez en savoir plus sur nos projets ?
            N&apos;hésitez pas à nous contacter.
          </p>
          <ul className="font-medium text-base space-y-3">
            <li>📞 +243 999 999 999</li>
            <li>✉️ contact@kerithressourcesdrc.com</li>
            <li>
              📍 01. Avenue OUA, République Démocratique du Congo,
              <br />
              Concession Procoki, Ngaliema - Kinshasa
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors rounded-md"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors rounded-md"
            required
            disabled={isLoading}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={5}
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors rounded-md"
            required
            disabled={isLoading}
          />
          
          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token: SetStateAction<string | null>) => setRecaptchaToken(token)}
              theme="light"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className={`bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light hover:bg-white hover:text-[#003233] hover:border hover:border-[#003233] cursor-pointer transition-colors rounded-md ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
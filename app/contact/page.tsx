"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(
          "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(`Erreur: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mines.cd/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-15.27.28.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0f2a3d]/70" />

        <motion.h1
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="hidden md:block absolute text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase leading-none pointer-events-none select-none"
        >
          Kerith
        </motion.h1>

        <div className="max-w-7xl relative px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-extrabold text-white leading-tight mb-6"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-base sm:text-lg md:text-xl text-gray-300"
          >
            KERITH RESOURCES SARL est une société minière congolaise engagée
            dans une exploitation responsable, durable et innovante de ses 30
            concessions à Luozi, Kongo-Central.
          </motion.p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <motion.div
          className="text-black flex flex-col justify-center px-5 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ghost Text */}
          <motion.span
            className="absolute text-[#0f2a3d] font-extrabold text-[2rem] md:text-[4rem] lg:text-[8rem] top-24 left-16  transform -translate-y-1/4 pointer-events-none select-none opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            Contact
          </motion.span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1f2937] mb-4 z-10 relative">
            Contactez-nous
          </h2>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            transition={{ duration: 0.8 }}
            className="border-t-2 border-[#cf8e02] z-10 relative"
          />
          <p className="text-xl font-medium mb-6 max-w-lg mt-4 z-10 relative">
            Vous avez une question ou souhaitez en savoir plus sur nos projets ?
            N&apos;hésitez pas à nous contacter.
          </p>
          <ul className="font-medium text-lg space-y-3 z-10 relative">
            <li>+243 999 999 999</li>
            <li>winnerluyeye1@gmail.com</li>
            <li>
              01. Avenue OUA, République Démocratique du Congo,
              <br />
              Concession Procoki, Ngaliema - Kinshasa
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-8"
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
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
            required
            disabled={isLoading}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
            required
            disabled={isLoading}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={5}
            className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
            required
            disabled={isLoading}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className={`bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light hover:bg-white hover:text-[#003233] hover:border hover:border-[#003233] cursor-pointer transition-colors ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer"}
          </motion.button>
        </motion.form>
      </section>

      {/* Google Maps */}
      <section className="relative w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4556641835625!2d15.2741812!3d-4.325179399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3129ac4e4fa5%3A0xa6babea9dabcacd3!2sConcession%20Safricas!5e0!3m2!1sfr!2scd!4v1775236361802!5m2!1sfr!2scd"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
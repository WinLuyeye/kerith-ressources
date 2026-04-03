// components/ContactSection.tsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
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
      <div className="py-16 px-8 bg-white relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 z-10">
        {/* Left Column - Info */}
        <div className="text-black flex flex-col justify-center px-5">
          <h2 className="text-4xl font-extrabold text-[#1f2937] mb-4">
            Contactez-nous
          </h2>
          <hr className="border-t-2 border-[#cf8e02] w-42 mb-6"/>
          <p className="text-base font-medium mb-6 max-w-lg">
            Vous avez une question ou souhaitez en savoir plus sur nos projets ?
            N&apos;hésitez pas à nous contacter.
          </p>
          <ul className="font-medium text-base space-y-3">
            <li>+243 999 999 999</li>
            <li>contact@kerithressourcesdrc.com</li>
            <li>
              01. Avenue OUA, République Démocratique du Congo,
              <br />
              Concession Procoki, Ngaliema - Kinshasa
            </li>
          </ul>
        </div>

        {/* Right Column - Formulaire */}
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows={5}
              className="border border-gray-300 p-3 text-[#1f2937] focus:outline-none focus:border-[#cf8e02] transition-colors"
              required
            />
            <button
              type="submit"
                className="bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light hover:bg-white hover:text-[#003233] hover:border hover:border-[#003233] cursor-pointer transition-colors" 
              >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-5"
      style={{ minHeight: "700px" }}
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wp-themes.com/wp-content/themes/kubio/starter-content/media/image-24.jpg')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-transparent z-10">
        {/* Left Column - Info */}
        <div className="text-white flex flex-col justify-center px-5">
          <h2 className="text-4xl font-bold text-[#f87171] mb-4">Contactez-nous</h2>
          <hr className="border-t-2 border-[#f87171] w-16 mb-6" />
          <p className="text-lg font-medium mb-6 max-w-lg">
            Vous avez une question ou souhaitez en savoir plus sur nos projets ? N’hésitez pas à nous contacter.
          </p>
          <ul className="text-[#f87171] font-medium text-lg space-y-3">
            <li>+243 999 999 999</li>
            <li>contact@kerithressources.com</li>
            <li>Concession Safricas, Kinshasa</li>
          </ul>
        </div>

        {/* Right Column - Formulaire */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="border border-gray-300 rounded-md p-3 text-[#1f2937] focus:outline-none focus:border-[#f87171]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="border border-gray-300 rounded-md p-3 text-[#1f2937] focus:outline-none focus:border-[#f87171]"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows={5}
              className="border border-gray-300 rounded-md p-3 text-[#1f2937] focus:outline-none focus:border-[#f87171]"
              required
            />
            <button
              type="submit"
              className="bg-[#f87171] text-white font-bold py-3 rounded-md hover:bg-[#f59e0b] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
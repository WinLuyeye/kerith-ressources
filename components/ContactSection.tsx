// components/ContactSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu pourras ajouter la logique pour envoyer le formulaire (API ou email)
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative w-full min-h-[700px] py-24 px-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/"
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div> {/* overlay */}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 bg-white/20 backdrop-blur-md p-10 rounded-lg">
        {/* Left Column */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <hr className="border-orange-200 my-6 w-24" />
          <p className="mb-6 text-lg font-medium">
            Lorem ipsum dolor sit amet, at mei dolore tritani in his nemore temporibus consequuntur, vim ad prima vivendum consetetur. Viderer feugiat at pro, mea.
          </p>
          <ul className="space-y-3 text-lg font-medium">
            <li>01. Avenue OUA, République Démocratique du Congo</li>
            <li>Concession Procoki, Ngaliema - Kinshasa</li>
            <li>+243 81 50 07 414</li>
            <li>+243 81 37 45 770</li>
            <li>fsamuna@kerithressourcesdrc.com</li>
            <li>nsamuna@kerithressourcesdrc.com</li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-white rounded-lg p-8 shadow-lg text-black">
          {submitted ? (
            <div className="text-center text-green-600 font-bold">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 text-white font-bold py-3 rounded-md hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
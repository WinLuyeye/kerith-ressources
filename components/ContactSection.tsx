// components/ContactSection.tsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative w-full min-h-[700px] py-24 px-6 md:px-10">
      {/* Google Maps Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.4478614775385!2d15.274151374736482!3d-4.326664895647328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a317ca321a443%3A0x23097a380de3d70c!2s1%20O.U.A%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1775230777974!5m2!1sfr!2scd"
          className="w-full h-full object-cover"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-black/60"></div> {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 bg-white/20 backdrop-blur-md p-6 md:p-10 rounded-lg">
        {/* Left Column */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <hr className="border-orange-200 my-6 w-20 md:w-24" />
          <p className="mb-6 text-base md:text-lg font-medium">
            Lorem ipsum dolor sit amet, at mei dolore tritani in his nemore temporibus consequuntur, vim ad prima vivendum consetetur. Viderer feugiat at pro, mea.
          </p>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-lg font-medium">
            <li>01. Avenue OUA, République Démocratique du Congo</li>
            <li>Concession Procoki, Ngaliema - Kinshasa</li>
            <li>+243 xx xx xx xxx</li>
            <li>contact@kerithressourcesdrc.com</li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 bg-white rounded-lg p-6 md:p-8 shadow-lg text-black">
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
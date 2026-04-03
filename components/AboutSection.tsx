// components/About.tsx
'use client';

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-[90px] pb-[90px] px-5 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Texte */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <h2 className="text-[2.5rem] text-[#1f2937] mb-1">A propos</h2>

            <div className="py-4">
              <hr className="border-t-2 border-[#003233] w-16" />
            </div>

            <p className="text-[#1f2937] text-lg font-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquet convallis.
            </p>

            <p className="text-[#1f2937] text-base font-light leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat
              aliquet convallis. Morbi cursus scelerisque est, a sodales mi fringilla sit
              amet. Donec ultrices id ante a tempus. Sed scelerisque elit in lectus fermentum
              condimentum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#003233] text-white px-10 py-5 uppercase text-sm font-light tracking-wider hover:bg-[#003233] transition-colors"
              >
                A savoir plus
              </a>
            </div>
          </div>

          {/* Image avec next/image */}
          <div className="lg:w-7/12 mt-10 lg:mt-0 relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
                          src="/public/logo2.png"
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-md"
                          priority alt={""}            />
          </div>
        </div>
      </div>
    </section>
  );
}
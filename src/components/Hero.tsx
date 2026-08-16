'use client';

import Image from 'next/image';
import { FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Desktop / Tablet Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/landing1234.png"
          alt="Harish CP"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/landingmobile.png"
          alt="Harish CP"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent md:from-black md:via-black/60 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

          <div className="max-w-[320px] sm:max-w-md md:max-w-2xl">

            {/* Intro */}
            <p
              className="
                text-yellow-500
                uppercase
                tracking-[0.35em]
                text-[10px]
                sm:text-xs
                md:text-sm
                mb-4
                font-light
              "
            >
              HEY THERE, I AM
            </p>

            {/* Name */}
            <h1
              className="
                leading-none
                font-extrabold
                mb-5
              "
            >
              <span
                className="
                  text-white
                  text-[42px]
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  tracking-wide
                "
              >
                HARISH
              </span>

              <span
                className="
                  ml-2
                  md:ml-3
                  text-yellow-500
                  text-[42px]
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  tracking-wide
                "
              >
                CP
              </span>
            </h1>

            {/* Role */}
            <p
              className="
                font-mono
                uppercase
                text-yellow-500
                text-[11px]
                sm:text-sm
                md:text-lg
                tracking-[0.18em]
                md:tracking-[0.22em]
                leading-relaxed
                mb-8
              "
            >
              {'< PYTHON FULLSTACK DEVELOPER />'}
            </p>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-4">

              <button
                className="
                  px-8
                  py-4
                  bg-yellow-500
                  text-black
                  font-semibold
                  rounded-full
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-yellow-500/20
                "
              >
                View Projects
              </button>

              <button
                className="
                  px-8
                  py-4
                  border
                  border-white/20
                  text-white
                  rounded-full
                  backdrop-blur-sm
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Contact Me
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:hidden">

        {/* Projects */}
        <button
          className="
            flex
            items-center
            gap-3
            bg-yellow-500
            text-black
            px-5
            py-3
            rounded-full
            shadow-xl
            font-semibold
            active:scale-95
            transition-all
            duration-300
          "
        >
          <FaFolderOpen size={18} />
          <span>Projects</span>
        </button>

        {/* Contact */}
        <button
          className="
            flex
            items-center
            gap-3
            bg-white/95
            backdrop-blur-md
            text-black
            px-5
            py-3
            rounded-full
            shadow-xl
            font-semibold
            active:scale-95
            transition-all
            duration-300
          "
        >
          <FaEnvelope size={18} />
          <span>Contact</span>
        </button>

      </div>

    </section>
  );
}
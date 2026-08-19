'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFolderOpen, FaEnvelope } from 'react-icons/fa';


const ROLES = [
  'PYTHON FULLSTACK DEVELOPER',
  'DJANGO • FASTAPI • REACT',
  'BUILDING SCALABLE WEB APPS',
];

const FLOATING_SYMBOLS = [
  { symbol: '</>', top: '18%', left: '8%', size: 'text-2xl', duration: '9s', delay: '0s' },
  { symbol: '{ }', top: '68%', left: '5%', size: 'text-xl', duration: '11s', delay: '1.2s' },
  { symbol: '( )', top: '30%', left: '85%', size: 'text-3xl', duration: '10s', delay: '0.6s' },
  { symbol: '01', top: '75%', left: '90%', size: 'text-lg', duration: '8s', delay: '2s' },
  { symbol: '=>', top: '10%', left: '92%', size: 'text-xl', duration: '12s', delay: '1.6s' },
  { symbol: '#', top: '55%', left: '95%', size: 'text-2xl', duration: '9.5s', delay: '0.4s' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 65;
    const pauseAtFull = 1800;
    const pauseAtEmpty = 400;

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), pauseAtFull);
      return () => clearTimeout(pause);
    }



    if (isDeleting && displayText === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, pauseAtEmpty);
      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? currentRole.slice(0, prev.length - 1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const nameLetters = (word: string, startDelay: number) =>
    word.split('').map((letter, i) => (
      <span
        key={`${word}-${i}`}
        className={`inline-block ${mounted ? 'animate-letter-in' : 'opacity-0'}`}
        style={{ animationDelay: `${startDelay + i * 0.06}s` }}
      >
        {letter}
      </span>
    ));

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
          className="object-cover object-[70%_center] brightness-110 contrast-110"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/landingmobile1.png"
          alt="Harish CP"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center brightness-110 contrast-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent md:from-black md:via-black/60 md:to-transparent" />

      {/* Ambient floating code symbols */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {FLOATING_SYMBOLS.map((item, i) => (
          <span
            key={i}
            className={`absolute font-mono text-premium-red/20 ${item.size} animate-float`}
            style={{
              top: item.top,
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

          <div className="max-w-[320px] sm:max-w-md md:max-w-2xl">

            {/* Intro */}
            <div className="mb-4 overflow-hidden">
              <p
                className={`
                  text-premium-red
                  uppercase
                  tracking-[0.35em]
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  font-light
                  flex
                  items-center
                  gap-3
                  ${mounted ? 'animate-slide-in' : 'opacity-0'}
                `}
              >
                <span className="inline-block h-px w-6 bg-premium-red origin-left animate-line-draw" />
                HEY THERE, I AM
              </p>
            </div>

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
                {nameLetters('HARISH', 0.3)}
              </span>

              <span
                className="
                  ml-2
                  md:ml-3
                  text-premium-red
                  text-[42px]
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl
                  tracking-wide
                  bg-gradient-to-r
                  from-premium-red
                  via-premium-red-light
                  to-premium-red
                  bg-[length:200%_auto]
                  bg-clip-text
                  text-transparent
                  animate-shimmer
                "
              >
                {nameLetters('CP', 0.65)}
              </span>
            </h1>

            {/* Role - typewriter */}
            <p
              className="
                font-mono
                uppercase
                text-premium-red
                text-[11px]
                sm:text-sm
                md:text-lg
                tracking-[0.18em]
                md:tracking-[0.22em]
                leading-relaxed
                mb-8
                min-h-[1.5em]
              "
            >
              {'< '}
              {displayText}
              <span className="animate-blink border-r-2 border-premium-red ml-0.5" />
              {' />'}
            </p>

            {/* Desktop Buttons */}
            <div
              className={`hidden md:flex gap-4 ${mounted ? 'animate-fade-up-delayed' : 'opacity-0'}`}
            >

              <button
                className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  bg-premium-red
                  text-black
                  font-semibold
                  rounded-full
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-premium-red/20
                "
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
              </button>

              <button
                className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  border
                  border-white/20
                  text-white
                  rounded-full
                  backdrop-blur-sm
                  hover:bg-white/10
                  hover:border-premium-red/50
                  transition-all
                  duration-300
                "
              >
                <span className="relative z-10">Contact Me</span>
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:hidden">
        {/* Projects */}
        <button
          onClick={() => scrollToSection("projects")}
          className="
      flex items-center gap-3
      bg-premium-red text-black
      px-5 py-3 rounded-full
      shadow-xl font-semibold
      active:scale-95
      transition-all duration-300
    "
        >
          <FaFolderOpen size={18} />
          <span>Projects</span>
        </button>

        {/* Contact */}
        <button
          onClick={() => scrollToSection("contact")}
          className="
      flex items-center gap-3
      bg-white/95 backdrop-blur-md
      text-black
      px-5 py-3 rounded-full
      shadow-xl font-semibold
      active:scale-95
      transition-all duration-300
    "
        >
          <FaEnvelope size={18} />
          <span>Contact</span>
        </button>
      </div>


    </section>
  );
}
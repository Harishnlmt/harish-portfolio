'use client';

import { useEffect, useRef, useState } from 'react';
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

// Base (always visible) and reveal (only visible under the cursor spotlight) images.
const BASE_IMAGE_DESKTOP = '/superhero.png';
const BASE_IMAGE_MOBILE = '/landingmobile1.png';
const REVEAL_IMAGE = '/landing1234.png';
const SPOTLIGHT_R = 260;

/**
 * RevealLayer no longer takes cursor coordinates as React props/state.
 * Instead it exposes its DOM node via `layerRef` so the parent can update
 * the CSS mask position imperatively (direct style mutation) inside a
 * requestAnimationFrame loop. This avoids calling setState 60x/sec, which
 * is what was causing "Maximum update depth exceeded".
 */
function RevealLayer({
  image,
  layerRef,
}: {
  image: string;
  layerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={layerRef}
      className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
      style={{
        backgroundImage: `url(${image})`,
        WebkitMaskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at -999px -999px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`,
        maskImage: `radial-gradient(circle ${SPOTLIGHT_R}px at -999px -999px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`,
      }}
    />
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);

  // Cursor tracking for the spotlight reveal — kept entirely out of React
  // state so the animation loop can run every frame without triggering
  // re-renders (and without ever risking an update-depth error).
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

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

  useEffect(() => {
    const footer = document.getElementById('footer');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideButtons(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.disconnect();
    };
  }, []);

  // Track mouse position relative to the hero section, with smoothing.
  // The loop mutates the reveal layer's CSS mask directly via the DOM ref
  // instead of calling setState, so it can safely run on every
  // requestAnimationFrame tick without causing render loops.
  useEffect(() => {
    let active = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const loop = () => {
      if (!active) return;

      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

      const el = revealRef.current;
      if (el) {
        const gradient = `radial-gradient(circle ${SPOTLIGHT_R}px at ${smooth.current.x}px ${smooth.current.y}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
        el.style.maskImage = gradient;
        el.style.webkitMaskImage = gradient;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    // Start the loop.
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      active = false;
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
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
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Desktop / Tablet Background (base image, always visible) */}
      <div
        className="absolute inset-0 hidden md:block bg-center bg-cover bg-no-repeat brightness-110 contrast-110"
        style={{ backgroundImage: `url(${BASE_IMAGE_DESKTOP})` }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden bg-center bg-cover bg-no-repeat brightness-110 contrast-110"
        style={{ backgroundImage: `url(${BASE_IMAGE_MOBILE})` }}
      />

      {/* Cursor-spotlight reveal (desktop only — reveals REVEAL_IMAGE under the cursor) */}
      <div className="absolute inset-0 hidden md:block">
        <RevealLayer image={REVEAL_IMAGE} layerRef={revealRef} />
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
              {/* HARISH */}
              <span
                className="
                  text-white
                  text-[30px]
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  tracking-wide
                "
              >
                {nameLetters('HARISH', 0.3)}
              </span>

              {/* Space + CP */}
              <span
                className="
                  ml-4
                  text-red-500
                  text-[30px]
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  tracking-wide
                "
              >
                {nameLetters('CP', 0.3)}
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
      <div
        className={`fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:hidden transition-all duration-300 ${
          hideButtons
            ? 'opacity-0 pointer-events-none translate-y-10'
            : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Projects */}
        <button
          onClick={() => scrollToSection('projects')}
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
          onClick={() => scrollToSection('contact')}
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
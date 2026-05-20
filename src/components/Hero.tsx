'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const techStack = [
  "React",
  "FastAPI",
  "OpenAI",
  "RAG",
  "Python",
  "LangChain",
];

const terminalLines = [
  "✓ Initializing AI Systems",
  "✓ Loading FastAPI",
  "✓ Connecting LLMs",
  "✓ Starting RAG Engine",
  "✓ Ready"
];

export default function Hero() {

  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < terminalLines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-50">

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full animate-pulse"/>

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse"/>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

      </div>


      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
              <Sparkles className="w-4 h-4 text-purple-400"/>

              <span className="text-xs uppercase tracking-[4px] text-gray-300">
                Available For New Projects
              </span>

            </motion.div>

            <motion.h2
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:.7}}
              className="text-gray-400 text-xl mb-4"
            >
              Building intelligent systems with
            </motion.h2>


            <motion.h1
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.3}}
              className="text-6xl md:text-8xl font-black leading-none mb-8"
            >
              <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Harish
              </span>

              <br/>

              <span className="text-white">
                C P
              </span>
            </motion.h1>


            <motion.p
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:.6}}
              className="text-gray-400 text-xl leading-relaxed max-w-xl"
            >
              Generative AI Developer • Full Stack Engineer

              <br/><br/>

              Creating scalable AI systems using
              FastAPI, React, LLMs, RAG pipelines and automation.
            </motion.p>


            {/* STATS */}

            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:.8}}
              className="grid grid-cols-3 gap-4 mt-10"
            >

              {[
                {
                  value:"50+",
                  label:"Projects"
                },
                {
                  value:"AI",
                  label:"RAG + LLM"
                },
                {
                  value:"24/7",
                  label:"Learning"
                }

              ].map((item)=>(

                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-4"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.label}
                  </p>

                </div>

              ))}

            </motion.div>


            {/* BUTTONS */}

            <div className="flex gap-4 mt-10">

              <a
                href="#projects"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold flex items-center"
              >

                View Projects

                <ArrowRight className="ml-2 group-hover:translate-x-2 transition"/>

              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg"
              >
                Contact
              </a>

            </div>


            {/* TERMINAL */}

            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:1}}
              className="mt-10 bg-black/40 rounded-3xl border border-white/10 p-6 backdrop-blur-xl"
            >

              <div className="flex gap-2 mb-5">

                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>

              </div>

              <div className="space-y-2 font-mono text-sm">

                {terminalLines
                  .slice(0,lineIndex+1)
                  .map((line)=>(

                  <motion.div
                    key={line}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    className="text-green-400"
                  >

                    {line}

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>


          {/* RIGHT */}

          <motion.div
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{duration:.8}}
            className="relative hidden lg:block"
          >

            <div className="relative w-[450px] h-[450px] mx-auto">

              {/* glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl rounded-full"/>


              {/* orbit labels */}

              {techStack.map((item,index)=>{

                const angle=(index/techStack.length)*360;

                const radius=240;

                const x=Math.cos(angle*Math.PI/180)*radius;

                const y=Math.sin(angle*Math.PI/180)*radius;

                return(

                  <motion.div
                    key={item}
                    animate={{
                      y:[0,-10,0]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:3+index
                    }}
                    style={{
                      left:`calc(50% + ${x}px)`,
                      top:`calc(50% + ${y}px)`
                    }}
                    className="absolute px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-sm"
                  >

                    {item}

                  </motion.div>

                )

              })}


              {/* IMAGE */}

              <motion.div
                whileHover={{
                  rotateY:8,
                  rotateX:5,
                  scale:1.04
                }}
                className="relative h-full w-full rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 z-10"/>

                <Image
                  src="/harish.jpeg"
                  alt="Harish"
                  fill
                  priority
                  className="object-cover"
                />

              </motion.div>

            </div>

          </motion.div>

        </div>


        {/* SCROLL */}

        <motion.div
          animate={{
            y:[0,10,0]
          }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >

          <ChevronDown className="text-white"/>

        </motion.div>

      </div>

    </section>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Brain,
  Code2,
  Cpu,
  Database,
  Zap
} from 'lucide-react';

const bootMessages = [
  "Initializing AI Core...",
  "Loading FastAPI services...",
  "RAG System Online...",
  "System Ready ✓"
];

const cards = [
  {
    title:"AI Systems",
    icon:<Brain size={20}/>,
    desc:"RAG • LLM • Agents"
  },
  {
    title:"Frontend",
    icon:<Code2 size={20}/>,
    desc:"React • NextJS"
  },
  {
    title:"Backend",
    icon:<Cpu size={20}/>,
    desc:"FastAPI • APIs"
  },
  {
    title:"Database",
    icon:<Database size={20}/>,
    desc:"PostgreSQL"
  }
];

export default function Hero(){

const [visible,setVisible]=useState(1);

useEffect(()=>{

if(visible<bootMessages.length){

const timer=setTimeout(()=>{
setVisible(prev=>prev+1)
},500)

return ()=>clearTimeout(timer)

}

},[visible])


return(

<section className="relative min-h-screen overflow-hidden bg-black text-white">

{/* background */}

<div className="absolute inset-0 overflow-hidden">

<div className="absolute top-[10%] left-[10%] w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[150px] animate-pulse"/>

<div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"/>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"/>

</div>


<div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">

{/* LEFT */}

<div>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
>

<Sparkles
size={16}
className="text-purple-400"
/>

<span className="uppercase tracking-[4px] text-xs text-gray-300">

Available for Projects

</span>

</motion.div>


<motion.h1
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:.7}}
className="text-4xl md:text-6xl font-black leading-none"
>

<span className="bg-gradient-to-r from-purple-300 via-white to-cyan-300 bg-clip-text text-transparent">

Building Intelligent

</span>

<br/>

Systems

</motion.h1>


<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.5}}
className="mt-8 text-gray-400 text-xl leading-relaxed max-w-xl"
>

Hi, I'm <span className="text-white font-semibold">Harish C P</span>

<br/><br/>

Generative AI Developer & Full Stack Engineer creating scalable systems using FastAPI, React, LLMs and automation.

</motion.p>


<div className="flex gap-4 mt-10">

<a
href="#projects"
className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center font-semibold"
>

Explore Work

<ArrowRight
className="ml-2 group-hover:translate-x-2 transition"
/>

</a>


<a
href="#contact"
className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
>

Contact

</a>

</div>


<div className="grid grid-cols-3 gap-4 mt-12">

<div className="rounded-3xl bg-white/5 p-5 border border-white/10">

<h2 className="text-3xl font-bold">
50+
</h2>

<p className="text-gray-400 text-sm">
Projects
</p>

</div>


<div className="rounded-3xl bg-white/5 p-5 border border-white/10">

<h2 className="text-3xl font-bold">
AI
</h2>

<p className="text-gray-400 text-sm">
LLM + RAG
</p>

</div>


<div className="rounded-3xl bg-white/5 p-5 border border-white/10">

<h2 className="text-3xl font-bold">
24/7
</h2>

<p className="text-gray-400 text-sm">
Learning
</p>

</div>

</div>

</div>



{/* RIGHT - PROFILE IMAGE */}

<motion.div
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
className="flex flex-col items-center gap-6"
>

{/* PROFILE IMAGE WITH ANIMATED BORDER */}

<motion.div
animate={{
  y: [0, -10, 0],
}}
transition={{
  repeat: Infinity,
  duration: 4,
  ease: "easeInOut"
}}
className="relative w-full max-w-sm"
>

{/* Animated gradient border container */}

<div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-[40px] p-1 opacity-75 blur-lg animate-pulse"/>

{/* Glass morphism frame */}

<div className="relative rounded-[40px] overflow-hidden backdrop-blur-2xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl">

{/* Image wrapper */}

<div className="relative w-full aspect-square overflow-hidden">

<Image
src="/harish.jpeg"
alt="Harish C P"
fill
className="object-cover"
priority
/>

{/* Overlay gradient */}

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>

</div>

{/* Status indicator */}

<motion.div
animate={{
  scale: [1, 1.2, 1],
  boxShadow: [
    "0 0 0 0 rgba(139, 92, 246, 0.7)",
    "0 0 0 10px rgba(139, 92, 246, 0)",
    "0 0 0 0 rgba(139, 92, 246, 0)"
  ]
}}
transition={{
  repeat: Infinity,
  duration: 2
}}
className="absolute bottom-6 right-6 w-5 h-5 bg-green-400 rounded-full border-2 border-white/50"
/>

</div>

</motion.div>


{/* Skills grid below image */}

<div className="grid grid-cols-2 gap-3 w-full max-w-sm">

{cards.map((item,index)=>(

<motion.div
key={item.title}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.1*index}}
whileHover={{
scale:1.05,
y:-5
}}
className="rounded-2xl p-4 bg-white/5 border border-white/10 backdrop-blur-xl text-center"
>

<div className="mb-2 text-purple-400 flex justify-center">

{item.icon}

</div>

<h2 className="font-semibold text-sm">

{item.title}

</h2>

<p className="text-xs text-gray-400 mt-1">

{item.desc}

</p>

</motion.div>

))}

</div>


{/* Currently building card */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.4}}
className="w-full max-w-sm rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4"
>

<div className="flex items-center gap-2">

<Zap className="text-yellow-400 flex-shrink-0"/>

<div>

<h3 className="font-semibold text-sm">

Currently Building

</h3>

<p className="text-gray-400 text-xs mt-0.5">

AI Inventory Platform + RAG Assistant

</p>

</div>

</div>

</motion.div>


</motion.div>

</div>

</div>


<motion.div
animate={{
y:[0,10,0]
}}
transition={{
repeat:Infinity,
duration:2
}}
className="absolute bottom-8 left-1/2 -translate-x-1/2"
>

<ChevronDown/>

</motion.div>

</section>

)

}

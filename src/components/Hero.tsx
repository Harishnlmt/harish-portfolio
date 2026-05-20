'use client';

import React, { useEffect, useState } from 'react';
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
  "Connecting Vector Database...",
  "Starting LLM Engine...",
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
},700)

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
className="text-6xl md:text-8xl font-black leading-none"
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



{/* RIGHT */}

<motion.div
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
className="space-y-6"
>


{/* TERMINAL */}

<div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

<div className="border-b border-white/10 px-6 py-4 flex gap-2">

<div className="w-3 h-3 rounded-full bg-red-500"/>
<div className="w-3 h-3 rounded-full bg-yellow-500"/>
<div className="w-3 h-3 rounded-full bg-green-500"/>

</div>

<div className="p-8 font-mono">

<div className="text-cyan-400 mb-5">

$ npm run harish-ai

</div>

{bootMessages
.slice(0,visible)
.map((item)=>(

<motion.div
key={item}
initial={{opacity:0}}
animate={{opacity:1}}
className="text-green-400 mb-3"
>

{item}

</motion.div>

))}

</div>

</div>



{/* GRID */}

<div className="grid grid-cols-2 gap-4">

{cards.map((item,index)=>(

<motion.div
key={item.title}
whileHover={{
scale:1.05,
y:-5
}}
className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
>

<div className="mb-4 text-purple-400">

{item.icon}

</div>

<h2 className="font-semibold">

{item.title}

</h2>

<p className="text-sm text-gray-400 mt-2">

{item.desc}

</p>

</motion.div>

))}

</div>


<div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-6">

<div className="flex items-center gap-3">

<Zap className="text-yellow-400"/>

<div>

<h3 className="font-semibold">

Currently Building

</h3>

<p className="text-gray-400 text-sm">

AI Inventory Platform + RAG Assistant

</p>

</div>

</div>

</div>


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

"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const articles = [
  ["quiet-architecture","01","Architecture","The Poetry of Quiet Architecture","How natural light, honest materials, and deliberate restraint shape spaces that feel timeless.","architecture","September 2, 2026","6 min read"],
  ["slow-mornings","02","Living","In Praise of Slow Mornings","A gentle case for beginning the day with fewer decisions and a little more attention.","morning","August 27, 2026","4 min read"],
  ["objects-with-stories","03","Design","Objects That Carry Stories","Why the things we keep become a quiet record of the people and places that matter.","objects","August 19, 2026","5 min read"],
  ["northern-gardens","04","Nature","A Walk Through Northern Gardens","Soft color, wild edges, and the enduring appeal of landscapes allowed to breathe.","garden","August 11, 2026","7 min read"],
  ["new-utility","05","Craft","The New Utility","A new generation of makers is finding beauty in usefulness, durability, and repair.","craft","July 30, 2026","5 min read"],
  ["city-in-rain","06","Places","The City After Rain","Reflections, softened sounds, and familiar streets briefly seen with fresh eyes.","rain","July 22, 2026","4 min read"],
  ["ordinary-table","07","Food","Around an Ordinary Table","The everyday rituals that turn a simple meal into a reason to gather and remain.","table","July 14, 2026","6 min read"],
  ["paper-and-ink","08","Culture","Paper, Ink, and Attention","What printed matter still teaches us about patience, sequence, and concentrated thought.","paper","July 3, 2026","8 min read"],
  ["weekend-by-water","09","Travel","A Weekend Beside the Water","Notes from two unhurried days shaped by long walks, cold swims, and open horizons.","water","June 25, 2026","6 min read"],
  ["useful-emptiness","10","Ideas","The Usefulness of Empty Space","In rooms, calendars, and conversations, absence can be an active and generous choice.","space","June 16, 2026","5 min read"],
  ["lasting-things","11","Style","Choosing Things That Last","A practical philosophy for buying less, caring better, and living with what you value.","style","June 8, 2026","7 min read"],
  ["edge-of-evening","12","Journal","At the Edge of Evening","Small observations from the hour when work recedes and the day changes character.","evening","May 29, 2026","4 min read"],
].map(([id,number,category,title,excerpt,seed,date,readTime]) => ({id,number,category,title,excerpt,image:`https://picsum.photos/seed/karlovka-${seed}/1200/900`,date,readTime}));

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
  "Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper."
];

function Header({onHome}) {
  const [open,setOpen]=useState(false);
  return <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f3f1eb]/95 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <button onClick={onHome} className="text-2xl font-semibold tracking-[-.05em]">KARLOVKA</button>
      <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[.18em] md:flex"><button onClick={onHome}>Stories</button><a href="#about">About</a><a href="mailto:hello@karlovka.example">Contact</a></nav>
      <button onClick={()=>setOpen(!open)} className="p-2 md:hidden" aria-label="Toggle menu">{open?<X size={20}/>:<Menu size={20}/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-black/10 md:hidden"><div className="flex flex-col gap-5 px-5 py-6 text-sm uppercase tracking-[.16em]"><button className="text-left" onClick={()=>{onHome();setOpen(false)}}>Stories</button><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="mailto:hello@karlovka.example">Contact</a></div></motion.nav>}</AnimatePresence>
  </header>
}

function Landing({onSelect}) { return <main>
  <section className="mx-auto max-w-[1500px] px-5 pb-12 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20"><div className="grid gap-8 border-b border-black/15 pb-14 lg:grid-cols-12 lg:items-end"><h1 className="max-w-5xl text-[clamp(3.4rem,8.5vw,9rem)] font-medium leading-[.82] tracking-[-.075em] lg:col-span-9">Ideas for<br/>considered living.</h1><div className="lg:col-span-3"><p className="max-w-xs text-sm leading-6 text-black/60">An independent journal about design, culture, places, and the details that shape everyday life.</p><p className="mt-6 text-xs uppercase tracking-[.18em] text-black/45">Vienna · Est. 2026</p></div></div></section>
  <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12"><div className="mb-7 flex justify-between"><h2 className="text-xs font-semibold uppercase tracking-[.2em]">Latest stories</h2><span className="text-xs text-black/45">Issue No. 01</span></div><div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{articles.map((a,i)=><motion.article key={a.id} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:i*.035}}><button onClick={()=>onSelect(a)} className="group block w-full text-left"><div className="relative aspect-[4/3] overflow-hidden bg-[#ddd9ce]"><img src={a.image} alt="" className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"/><span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#f3f1eb] opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={16}/></span></div><div className="flex justify-between border-b border-black/15 py-3 text-[10px] uppercase tracking-[.16em] text-black/50"><span>{a.category}</span><span>{a.number}</span></div><h3 className="mt-4 text-[1.45rem] font-medium leading-[1.05] tracking-[-.035em] group-hover:opacity-55">{a.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{a.excerpt}</p></button></motion.article>)}</div></section>
  <section id="about" className="bg-[#1c1c18] text-[#f3f1eb]"><div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28"><p className="text-xs uppercase tracking-[.2em] text-white/50">About Karlovka</p><div><p className="max-w-2xl text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">A home for thoughtful stories about how we build, make, travel, gather, and live.</p><p className="mt-9 max-w-xl text-sm leading-7 text-white/55">Karlovka is an independent journal and a flexible foundation for a modern publication.</p></div></div></section>
</main> }

function ArticlePage({article,onBack}) { useEffect(()=>window.scrollTo({top:0,behavior:"smooth"}),[article]); return <motion.main initial={{opacity:0}} animate={{opacity:1}}>
  <section className="mx-auto max-w-[1500px] px-5 pb-12 pt-10 sm:px-8 lg:px-12 lg:pt-16"><button onClick={onBack} className="mb-16 flex items-center gap-2 text-xs uppercase tracking-[.16em]"><ArrowLeft size={15}/> All stories</button><div className="grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-9"><p className="mb-5 text-xs uppercase tracking-[.2em] text-black/50">{article.category} · {article.number}</p><h1 className="max-w-5xl text-[clamp(3.25rem,7vw,7.5rem)] font-medium leading-[.88] tracking-[-.065em]">{article.title}</h1></div><div className="border-t border-black/15 pt-4 text-xs uppercase tracking-[.14em] text-black/50 lg:col-span-3"><div className="flex justify-between py-1"><span>Published</span><span>{article.date}</span></div><div className="flex justify-between py-1"><span>Reading</span><span>{article.readTime}</span></div></div></div></section>
  <section className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12"><div className="aspect-[16/8] overflow-hidden"><img src={article.image} alt="" className="h-full w-full object-cover"/></div></section>
  <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24"><p className="mb-12 text-2xl font-medium leading-relaxed sm:text-3xl">{article.excerpt}</p><div className="space-y-7 text-[1.05rem] leading-8 text-black/70">{paragraphs.map((p,i)=><p key={i} className={i===1?"border-l-2 border-black pl-6 text-xl font-medium italic text-black":""}>{p}</p>)}</div><button onClick={onBack} className="mt-16 flex items-center gap-3 border-t border-black/15 pt-8 text-sm uppercase tracking-[.16em]"><ArrowLeft size={16}/> Back to all stories</button></article>
</motion.main> }

export default function Karlovka(){const [selected,setSelected]=useState(null);const home=()=>{setSelected(null);window.scrollTo({top:0,behavior:"smooth"})};return <div className="min-h-screen bg-[#f3f1eb] text-[#171714] selection:bg-[#171714] selection:text-[#f3f1eb]"><Header onHome={home}/><AnimatePresence mode="wait">{selected?<ArticlePage key={selected.id} article={selected} onBack={home}/>:<Landing key="home" onSelect={setSelected}/>}</AnimatePresence><footer className="border-t border-black/10"><div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-8 text-xs uppercase tracking-[.14em] text-black/45 sm:flex-row sm:justify-between lg:px-12"><span>© 2026 Karlovka</span><span>Ideas for considered living</span></div></footer></div>}

'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-screen mx-4">
      <div className="w-full my-4 py-4">
        <h1 className="text-5xl font-bold tracking-[-4px]  leading-10">MAKING THE WEB A <span className="font-serif italic tracking-normal">COOLER</span> PLACE, ONE SITE AT A TIME!</h1>
        <div className="flex  my-2">
          
          <p className="text-xs px-2">CURRENTLY A FRONTEND-DEVELOPER AT IBM</p>
        </div>

      </div>
      <div>
          <p className="text-sm my-4 py-4 font-bold tracking-normal leading-5"><span className="text-lg tracking-tighter">[ A SHORT INTRO ]</span> <br></br> I&apos;M A CREATIVE WEB DEVELOPER WHO LOVES BUILDING WEBSITES<Image className="rounded-full w-[48px] inline-block mx-2   " src={'/assets/introLaptop.jpg'} alt="Intro" width={100} height={100}></Image> AND COOL DIGITAL EXPERIENCES. FROM DESIGNING SMOOTH, USER-FRIENDLY INTERFACES TO CRAFTING ENGAGING ONLINE JOURNEYS, I MIX CREATIVITY AND TECH SKILLS IN EVERY PROJECT.</p>
      </div>

    </main>
  );
}

"use client"

import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Projects from "@/components/Projects";


import { useState } from "react";



export default function Homepage() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };



  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      {/**HEADER */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between">
          {/** ABOUT */}
          <About darkMode={darkMode} />

          {/** EXPERIENCE */}
          <Experiences />

          {/** PROJECTS */}
          <Projects  darkMode={darkMode}/>


          {/* <div className="hidden lg:block">
            <div className="w-96 h-96 rounded-full border-2">
              <Image
                src="/api/placeholder/384/384"
                alt="Developer illustration"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};
"use client"

import { Moon, Sun, Download, Github, Linkedin, Briefcase } from "lucide-react";
import Link from "next/link";

import { useState } from "react";


export default function Homepage() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const experiences = [
    {
      title: "Desarrollador Full Stack Freelance",
      company: "Grupo ARVIC IT S.A. de C.V.",
      period: "Enero 2024 - Actualidad",
      type: "Remoto",
      logo: "/api/placeholder/100/100",
      technologies: ["Vue.js", "Node.js", "Laravel", "Bootstrap", "GitHub", "Docker", "Digital Ocean"],
      description: "Lideré el desarrollo de una plataforma de empleo desde la concepción hasta la implementación, utilizando Vue.js para una interfaz intuitiva basada en diseños de Figma. Supervisé el Back-End con Laravel y desarrollé chatbots en Node.js integrados con WhatsApp Flow y la API de WhatsApp. Coordiné el despliegue en Digital Ocean, integrando Cloudflare, Docker y Nginx. Trabajé con un equipo multifuncional, gestionando análisis de diseño, requisitos, documentación, asignación de tareas, revisión de funcionalidad y soporte tanto en front-end como en la interacción con el cliente y el equipo de UX."
    },
    {
      title: "Front-End Developer",
      company: "Pulpomatic S.A. de C.V.",
      period: "Octubre 2022 - Septiembre 2023",
      type: "Remoto",
      logo: "/api/placeholder/100/100",
      technologies: ["Angular", "Tailwind", "Nest.js", "PugJS", "GitHub"],
      description: "Desarrollé y mantuve funcionalidades en Angular, creando componentes reutilizables para diversos módulos y aplicando validaciones personalizadas."
    }
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <nav className="sticky top-0 flex justify-around items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-sm z-50">
        <div className="text-xl font-bold dark:text-white">
          Salex
          <span className="text-blue-600">&lt;Dev /&gt;</span>
        </div>

        <div className="flex gap-6 font-bold dark:text-white">
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-500">Acerca de mí</Link>
          <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-500">Experiencias</Link>
          <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-500">Proyectos</Link>
          <Link href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-500">Certificaciones</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <span>🇲🇽 Español (MX)</span> */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun color="#ffffff" size={25} /> : <Moon size={25} />}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between">
          {/** about */}
          <section id="about" className="space-y-6 max-w-3xl scroll-smooth focus:scroll-auto">
            <h1 className="text-6xl font-bold dark:text-white">
              Hola Mundo<span className="inline-block animate-bounce">👋</span>
              <br />
              Soy <span className="text-purple-700 dark:text-purple-500">Samir Alexander</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Soy desarrollador Full Stack con experiencia en Front-End y Back-End.
              Me especializo en crear interfaces dinámicas utilizando React y Next.js,
              y desarrollar soluciones robustas con Node.js y Express. Comprometido con 
              el aprendizaje continuo, me satisface brindar soluciones a traves de propuestas innovadoras para
              un verdadero impacto en la experiencia de los usuarios.
              
            </p>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                <Download size={20} />
                Descargar CV
              </button>
              <button className="p-2 bg-white rounded-lg border border-r-4 border-b-4 border-black dark:border-gray-400">
                <Github size={24} />
              </button>
              <button className="p-2 bg-white rounded-lg border border-r-4 border-b-4 border-black dark:border-gray-400">
                <Linkedin size={24} />
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 pt-8">
              {['Angular', 'Vue.js', 'Tailwind', 'Bootstrap', 'Nest.js', 'Laravel',
                'Node.js', 'Express', 'PHP', 'MySQL', 'Firebase', 'MongoDB'].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 p-2 border border-dashed rounded-lg hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </section>
          {/** experience */}
          <section id="experience">
            <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
              <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-center mb-4">Experiencias</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                  Explora mi trayectoria: donde la experiencia se transforma en resultados excepcionales.
                </p>

                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>

                      <div className="flex-grow space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                              <span className="text-blue-600">{exp.title}</span>
                              <span>-</span>
                              <span>{exp.company}</span>
                            </h3>
                            <div className="text-gray-600 dark:text-gray-400 flex items-center gap-4 mt-1">
                              <span>📅 {exp.period}</span>
                              <span>📍 {exp.type}</span>
                            </div>
                          </div>
                          {/* <Image
                                                        src={exp.logo}
                                                        alt={`${exp.company} logo`}
                                                        className="w-16 h-16 rounded-full"
                                                    /> */}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm border border-dashed rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

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
import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  return (

    <section id="about" className="container mx-auto md:px-2 lg:px-10 flex flex-col md:grid md:gap-2 lg:gap-8 w-full lg:w-10/12 xl:w-9/12 ">
      <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white">
        Hola Mundo<span className="inline-block animate-bounce">👋</span>
        <br />
        Soy <span className="text-purple-700 dark:text-purple-500">Samir Alexander</span>
      </h1>

      <p className=" my-8 xl:my-0 sm:my-8 md:my-4 lg:my-1 text-lg text-gray-900 dark:text-gray-300">
        Soy desarrollador Full Stack con experiencia en Front-End y Back-End.
        Me especializo en crear interfaces dinámicas utilizando React y Next.js,
        y desarrollar soluciones robustas con Node.js y Express. Comprometido con
        el aprendizaje continuo, me satisface brindar soluciones a través de propuestas innovadoras para
        un verdadero impacto en la experiencia de los usuarios.

      </p>

      <div className=" flex gap-4 justify-center sm:justify-start flex-row items-center flex-wrap">
        <a href="/cv.pdf" download={'cv.pdf'} className="flex items-center gap-2 px-4 py-2 font-bold bg-white text-black hover:bg-indigo-600 hover:text-white border-2 border-r-4 border-b-4 border-black dark:border-gray-400 rounded-lg  transition-colors">
          <Download size={20} />
          Descargar CV
        </a>
        <a href={'https://github.com/Samirvp15'} target="_blank" className="p-2 bg-white rounded-lg border-2 border-r-4 border-b-4 border-black hover:bg-purple-600 hover:text-white dark:border-gray-400  transition-colors">
          <Github size={24} />
        </a>
        <a href={'https://www.linkedin.com/in/samir-alexander-vergara-pastor-590321317/'} target="_blank" className="p-2 bg-white rounded-lg border-2 border-r-4 border-b-4 border-black hover:bg-blue-600 hover:text-white dark:border-gray-400  transition-colors">
          <Linkedin size={24} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 pt-8">
        {['React', 'Next.js', 'Tailwind', 'Node.js', 'Express.js',
          'Postman', 'Prisma', 'Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'MongoDB'].map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center gap-2 p-2 border-2 border-dashed bg-white dark:bg-slate-700 border-black hover:cursor-default dark:text-white dark:border-slate-500 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md hover:shadow-purple-300  transition-colors"
            >
              <Image
                width={30}
                height={30}
                src={
                  // Array de Tech donde solo esta disponible modo oscuro
                  darkMode && ['Prisma', 'PHP', 'Next.js', 'Express.js'].includes(tech)
                    ? `/${tech}_dark.svg`
                    : `/${tech}.svg`
                }
                alt={`Logo ${tech}`}
              />
              {tech}
            </div>
          ))}
      </div>
    </section>

  )
}

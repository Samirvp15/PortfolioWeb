import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <>
      <section
        id="about"
        className="container mx-auto md:px-2 lg:px-10 flex flex-col md:grid md:gap-2 lg:gap-8 w-full lg:w-10/12 xl:w-9/12"
      >
        {/* ── Título + botones (order-1 en mobile, order-0 en md) ── */}
        <div className="flex flex-col content-center my-5 md:mb-5 order-1 md:order-0">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-center md:text-left md:text-5xl xl:text-6xl text-gray-900 mb-4 dark:text-white">
            Hola Mundo <span className="inline-block animate-bounce">👋</span>
          </h1>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-center md:text-left md:text-5xl xl:text-6xl text-gray-900 mb-4 dark:text-white whitespace-nowrap">
            Soy{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Samir Alexander
            </span>
          </h1>

          {/* Botones */}
          <div className="mt-4 md:mt-6 flex gap-4 justify-center md:justify-start flex-row items-center flex-wrap">
            <a
              href="/CV_SamirVergara.pdf"
              download="CV_SamirVergara.pdf"
              className="flex items-center gap-2 px-4 py-2 font-bold bg-white text-black hover:bg-indigo-600 hover:text-white border-2 border-r-4 border-b-4 border-black dark:border-gray-400 rounded-lg transition-colors"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <a
              href="https://github.com/Samirvp15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-lg border-2 border-r-4 border-b-4 border-black hover:bg-purple-600 hover:text-white dark:border-gray-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/samir-alexander-vergara-pastor-590321317/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-lg border-2 border-r-4 border-b-4 border-black hover:bg-blue-600 hover:text-white dark:border-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* ── Imagen de perfil ── */}
        <div className="flex flex-col items-center justify-center order-0 md:order-1">
          <div className="w-56 h-56 rounded-full border-2 border-black dark:border-gray-400 overflow-hidden">
            <Image
              width={256}
              height={256}
              src="/DevPic.png"
              alt="Developer Picture"
              className="w-full h-full object-cover object-center scale-110"
            />
          </div>
        </div>

        {/* ── Descripción + Tech stack (col-span-2, order-3) ── */}
        <div className="flex flex-col justify-center col-span-2 order-3">
          <p className="text-lg text-center md:text-left text-gray-900 dark:text-gray-300 mb-8">
            Soy desarrollador Full Stack con experiencia en Front-End y Back-End.
            Me especializo en crear interfaces dinámicas utilizando React y Next.js,
            y desarrollar soluciones robustas con Node.js, Express,PHP y Laravel. Además, tengo
            sólidos conocimientos en bases de datos relacionales y no relacionales
            como MySQL, Microsoft SQL Server, PostgreSQL y MongoDB. Comprometido con
            el aprendizaje continuo, me satisface brindar soluciones a través de
            propuestas innovadoras para un verdadero impacto en la experiencia de
            los usuarios.
          </p>

          {/* Tech stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6">
            {[
              "React", "Next.js", "Tailwind", "Node.js", "Express.js", "ViteJS",
              "Postman", "Prisma", "Laravel", "PHP", "MySQL", "PostgreSQL", "MongoDB",
               "Wordpress", "Shopify", "Hostinger",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center gap-2 p-2 border-2 border-dashed bg-white dark:bg-slate-700 border-black hover:cursor-default dark:text-white dark:border-slate-500 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md hover:shadow-purple-300 transition-colors"
              >
                <Image
                  width={30}
                  height={30}
                  src={
                    darkMode && ["Prisma", "PHP", "Next.js", "Express.js"].includes(tech)
                      ? `/${tech}_dark.svg`
                      : `/${tech}.svg`
                  }
                  alt={`Logo ${tech}`}
                />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
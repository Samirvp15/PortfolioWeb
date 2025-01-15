
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
    {
        title: "UpTask Team",
        description: `Desarrollé una plataforma de gestión de proyectos web, diseñada para ayudar a equipos a colaborar de manera eficiente, organizar tareas y garantizar el cumplimiento de los objetivos del proyecto. 
        Incluye herramientas para planificar, asignar y supervisar roles y actividades del proyecto asignado.`,
        images: ["/UpTaskTeam1.png", "/UpTaskTeam2.png", "/UpTaskTeam3.png", "/UpTaskTeam4.png", "/UpTaskTeam5.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/Samirvp15/UpTaskTeam-Frontend",
        demo: "https://up-task-team--eight.vercel.app/"
    },
    {
        title: "UpTask Team",
        description: "Desarrollé una aplicación web con React usando la API de TMDB, con vistas personalizables y scroll infinito. Implementé inicio de sesión con TMDB, enfocándome en buenas prácticas y diseño escalable.",
        images: ["/UpTaskTeam1.png", "/UpTaskTeam2.png", "/UpTaskTeam3.png", "/UpTaskTeam4.png", "/UpTaskTeam5.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/Samirvp15/UpTaskTeam-Frontend",
        demo: "https://up-task-team--eight.vercel.app/"
    },
];

interface ProjectsProps {
    darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
    return (
        <section id="projects">

            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 mt-10 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl font-bold text-center mb-4 dark:text-white">Mis Proyectos</h1>
                    <p className=" italic text-center text-gray-600 dark:text-gray-300 mb-12">
                        {'"El aprendizaje continuo mediante la práctica."'}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform"
                            >
                                {/* Carrusel */}
                                <div className="relative">
                                    <Carousel className="w-full max-w-full shadow-sm">
                                        <CarouselContent>
                                            {project.images?.map((image, index) => (
                                                <CarouselItem key={index}>
                                                    <div className="p-6">
                                                        <Image
                                                            width={600}
                                                            height={400}
                                                            src={image} // Usar la URL o ruta de la imagen actual
                                                            alt={project.title}
                                                            className="w-full object-cover rounded-lg"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white dark:bg-gray-200 rounded-full shadow-md p-2 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors" />
                                        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white dark:bg-gray-200 rounded-full shadow-md p-2 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors" />
                                    </Carousel>
                                </div>


                                <div className="p-6">
                                    <div className='flex items-center justify-between mb-4'>

                                        <h3 className=" text-2xl font-bold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <div className='flex items-center space-x-4'>
                                            <a
                                                href={project.github}
                                                className="p-2 bg-white rounded-full border-2  border-black hover:bg-purple-600 hover:text-white dark:border-gray-400 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="p-2 bg-white rounded-full border-2  border-black hover:bg-blue-600 hover:text-white dark:border-gray-400 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <div
                                                key={i}
                                                className=" h-8 w-24 flex justify-center items-center  text-xs border border-dashed rounded-full bg-white dark:bg-slate-700 border-black hover:cursor-default dark:text-white dark:border-slate-500  hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md hover:shadow-purple-300  transition-colors"
                                            >
                                                <Image
                                                    width={15}
                                                    height={15}
                                                    src={
                                                        // Array de Tech donde solo esta disponible modo oscuro
                                                        darkMode && ['Prisma', 'PHP', 'Next.js', 'Express.js'].includes(tech)
                                                            ? `/${tech}_dark.svg`
                                                            : `/${tech}.svg`
                                                    }
                                                    alt={`Logo ${tech}`}
                                                />
                                                <span className=' ml-2'>{tech}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

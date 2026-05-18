
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

interface Project {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    github: string;
    demo: string;
    category: 'website' | 'videogames';
    iframe?: string;
}

const projects: Project[] = [
    {
        title: "UpTask Team",
        description: `Desarrollé una plataforma de gestión de proyectos web, diseñada para ayudar a equipos a colaborar de manera eficiente, organizar tareas y garantizar el cumplimiento de los objetivos del proyecto. 
        Incluye herramientas para planificar, asignar y supervisar roles y actividades del proyecto asignado.`,
        images: ["/projectsImages/UpTaskTeam1.png", "/projectsImages/UpTaskTeam2.png", "/projectsImages/UpTaskTeam3.png", "/projectsImages/UpTaskTeam4.png", "/projectsImages/UpTaskTeam5.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/Samirvp15/UpTaskTeam-Frontend",
        demo: "https://up-task-team--eight.vercel.app/",
        category: 'website'
    },
    {
        title: "Chat MS",
        description: "Desarrollé una aplicación web de mensajería instantánea con Socket.io, que permite a los usuarios enviar mensajes de texto, imágenes y videos adjuntos. La aplicación se integra con un servidor Nodejs para el envío de mensajes y un servidor de Cloudinary para el almacenamiento de archivos adjuntos.",
        images: ["/projectsImages/chatms01.png","/projectsImages/chatms02.png","/projectsImages/chatms03.png","/projectsImages/chatms04.png","/projectsImages/chatms05.png","/projectsImages/chatms06.png","/projectsImages/chatms07.png","/projectsImages/chatms08.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Redux"],
        github: "https://github.com/Samirvp15/ChatMS-Frontend",
        demo: "https://chat-ms.vercel.app/email",
        category: 'website'
    },
    {
        title: "Netflix Clone",
        description: "Desarrollé una aplicación web que replica la interfaz de Netflix, permitiendo a los usuarios registrarse, iniciar sesión y ver una lista de películas y series. La aplicación se integra con una API REST desarrollada con Node.js y Express.js y que se obtiene los datos mediante la API TMDB.",
        images: ["/projectsImages/netflix01.png", "/projectsImages/netflix02.png", "/projectsImages/netflix03.png", "/projectsImages/netflix04.png", "/projectsImages/netflix05.png","/projectsImages/netflix06.png","/projectsImages/netflix07.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "PostgreSQL"],
        github: "https://github.com/Samirvp15/Netflix-MERN",
        demo: "https://netflix-mern-n46g.onrender.com/",
        category: 'website'
    },
    {
        title: "Products Management",
        description: "Implementé una REST API con Node.js y Express.js, utilizando TypeScript para el desarrollo de la API. La API permite realizar operaciones CRUD usando Docker para la creacion de un contenedor PostgreSQL y se integra con un frontend desarrollado en React.",
        images: ["/projectsImages/restapi-ts-node5.png", "/projectsImages/restapi-ts-node6.png", "/projectsImages/restapi-ts-node.png", "/projectsImages/restapi-ts-node2.png", "/projectsImages/restapi-ts-node3.png", "/projectsImages/restapi-ts-node4.png"],
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "PostgreSQL", "Swagger", "Sequelize", "Docker"],
        github: "https://github.com/Samirvp15/FrontendPERN-NodeTS",
        demo: "https://frontend-pern-node-ts.vercel.app/",
        category: 'website'
    },
    {
        title: "Admin Products System",
        description: "Usando Nextjs y TypeScript, desarrollé una aplicación web que permite realizar operaciones CRUD mediante mi contenedor PostgreSQL creado con Docker y se integra con una API de autenticación NextAuthjs para el manejo de usuarios.",
        images: ["/projectsImages/AdminTodo's.png", "/projectsImages/AdminTodo's2.png", "/projectsImages/AdminTodo's3.png"],
        technologies: ["React", "Tailwind", "Next.js", "PostgreSQL", "Docker","Prisma"],
        github: "https://github.com/Samirvp15/Nextjs-Todos-API",
        demo: "#",
        category: 'website'
    },
    {
        title: "Beyond The Grass",
        description: "Desarrollé un videojuego 3D construido en Unity utilizando C# para la implementación de sistemas y mecánicas de gameplay. Creé y optimicé assets y modelos 3D en Blender, y diseñé elementos visuales y texturas en Krita. Implementé funcionalidades clave como interacción del jugador, sistemas de UI multilenguaje (traducción dinámica de textos, imágenes y menús según el idioma seleccionado) y shaders en Unity para efectos visuales. Finalmente, publiqué y distribuí el juego en Google Play Store.",
        images: [],
        technologies: ["Unity", "Blender", "Krita", "C Sharp", "Google Play"],
        github: "https://github.com/Samirvp15/BeyondTheGrass",
        demo: "https://salexvg.itch.io/beyond-the-grass",
        category: 'videogames',
        iframe: '<iframe frameborder="0" src="https://itch.io/embed/4552612?linkback=true&border_width=0&bg_color=0b1107&fg_color=ffffff&link_color=47a434&border_color=353f32" width="550" height="165"><a href="https://salexvg.itch.io/beyond-the-grass">Beyond The Grass by Salexvg</a></iframe>'
    },
    {
        title: "Blast Balloon",
        description: "Desarrollé un videojuego móvil casual creado en Unity implementando mecánicas arcade, sistemas de puntuación y progresión de niveles. Diseñé interfaces visuales, efectos y elementos gráficos coloridos enfocados en una experiencia dinámica y accesible para dispositivos móviles. Implementé power-ups, patrones de aparición de enemigos/obstáculos y efectos visuales. Finalmente, publiqué y distribuí el juego en Google Play Store.",
        images: [],
        technologies: ["Unity", "Blender", "Krita", "C Sharp", "Google Play"],
        github: "https://github.com/Samirvp15/BlastBalloon",
        demo: "https://salexvg.itch.io/blastballoon",
        category: 'videogames',
        iframe: '<iframe frameborder="0" src="https://itch.io/embed/4546507?linkback=true&amp;bg_color=d4ebfb&amp;fg_color=222222&amp;link_color=fa5c5c&amp;border_color=3f7dff" width="552" height="167"><a href="https://salexvg.itch.io/blastballoon">Blast Balloon by Salexvg</a></iframe>'
    },
];

interface ProjectsProps {
    darkMode: boolean
}

export default function Projects({ darkMode }: ProjectsProps) {
    const [selectedCategory, setSelectedCategory] = React.useState<'website' | 'videogames'>('website');
    const filteredProjects = projects.filter(
        (project) => project.category === selectedCategory
    );

    return (
        <section id="projects">

            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 mt-10 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl font-bold text-center mb-4 dark:text-white">Mis Proyectos</h1>
                    <p className=" italic text-center text-gray-600 dark:text-gray-300 mb-12">
                        {'"El aprendizaje continuo mediante la práctica."'}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        {[
                            { key: 'website', label: 'Websites' },
                            { key: 'videogames', label: 'Videogames' },
                        ].map((category) => {
                            const active = selectedCategory === category.key;
                            return (
                                <button
                                    key={category.key}
                                    type="button"
                                    onClick={() => setSelectedCategory(category.key as 'website' | 'videogames')}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${active ? 'bg-black text-white shadow-md shadow-purple-200 dark:bg-white dark:text-black' : 'bg-white text-gray-700 border border-gray-300 hover:bg-slate-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}`}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full rounded-xl border border-dashed border-gray-300 bg-white/80 dark:bg-gray-800/80 dark:border-gray-700 p-10 text-center">
                                <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
                                    No hay proyectos en esta categoría todavía.
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    Selecciona otra categoría para ver contenido disponible.
                                </p>
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform "
                                >
                                {/* Carrusel o Iframe */}
                                <div className="relative bg-gray-100 dark:bg-gray-700 overflow-x-auto">
                                    {project.iframe ? (
                                        <div className="p-6 flex items-center justify-center min-h-[200px]" dangerouslySetInnerHTML={{ __html: project.iframe }} />
                                    ) : (
                                        <Carousel className="w-full shadow-sm">
                                            <CarouselContent>
                                                {project.images?.map((image, index) => (
                                                    <CarouselItem key={index}>
                                                        <div className="p-6">
                                                            <Image
                                                                width={600}
                                                                height={600}
                                                                src={image}
                                                                alt={project.title}
                                                                className="w-full h-[400px] object-contain rounded-lg"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white dark:bg-gray-200 rounded-full shadow-md p-2 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors" />
                                            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white dark:bg-gray-200 rounded-full shadow-md p-2 hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors" />
                                        </Carousel>
                                    )}
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
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

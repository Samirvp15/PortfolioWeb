
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const projects = [
    {
        title: "UpTask Team",
        description: "Desarrollé una aplicación web con React usando la API de TMDB, con vistas personalizables y scroll infinito. Implementé inicio de sesión con TMDB, enfocándome en buenas prácticas y diseño escalable.",
        image: "/api/placeholder/800/400",
        technologies: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
        github: "#",
        demo: "#"
    },
    {
        title: "Cart & xd",
        description: "Desarrollé un carrito de compras y pago con PayPal en Angular. Utilicé la API de PayPal para procesar pagos y mantener el estado de la compra en la base de datos. Implementé un diseño responsivo y escalable.",
        image: "/api/placeholder/800/400",
        technologies: ["Angular", "Bootstrap", "Paypal API"],
        github: "#",
        demo: "#"
    },
    {
        title: "AAA & PayPal",
        description: "Desarrollé un carrito de compras y pago con PayPal en Angular. Utilicé la API de PayPal para procesar pagos y mantener el estado de la compra en la base de datos. Implementé un diseño responsivo y escalable.",
        image: "/api/placeholder/800/400",
        technologies: ["Angular", "Bootstrap", "Paypal API"],
        github: "#",
        demo: "#"
    },
    {
        title: "SSS ",
        description: "Desarrollé un carrito de compras y pago con PayPal en Angular. Utilicé la API de PayPal para procesar pagos y mantener el estado de la compra en la base de datos. Implementé un diseño responsivo y escalable.",
        image: "/api/placeholder/800/400",
        technologies: ["Angular", "Bootstrap", "Paypal API"],
        github: "#",
        demo: "#"
    },
    {
        title: "mOVV",
        description: "Desarrollé un carrito de compras y pago con PayPal en Angular. Utilicé la API de PayPal para procesar pagos y mantener el estado de la compra en la base de datos. Implementé un diseño responsivo y escalable.",
        image: "/api/placeholder/800/400",
        technologies: ["Angular", "Bootstrap", "Paypal API"],
        github: "#",
        demo: "#"
    }
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
                                className="bg-slate-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                            >
                                <div className="relative">
                                    <Image
                                        width={60}
                                        height={60}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                        <a
                                            href={project.github}
                                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-6 h-6" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

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

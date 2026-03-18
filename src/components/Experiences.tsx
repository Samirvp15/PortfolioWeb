import { BriefcaseBusiness, Wifi, Laptop } from 'lucide-react';
import React from 'react';

// Tech logo icons using devicons CDN
const techIcons: Record<string, string> = {
    "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Digital Ocean": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Nest.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    "PugJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-original.svg",
};

const experiences = [
    {
        title: "Desarrollador Full Stack Freelance",
        company: "Grupo ARVIC IT S.A. de C.V.",
        period: "Enero 2024 - Actualidad",
        type: "Remoto",
        contractType: "Freelance",
        logo: "/logos/arvic.png", // reemplaza con tu ruta real
        technologies: ["Vue.js", "Node.js", "Laravel", "Bootstrap", "GitHub", "Docker", "Digital Ocean"],
        description: "Lideré el desarrollo de una plataforma de empleo desde la concepción hasta la implementación, utilizando Vue.js para una interfaz intuitiva basada en diseños de Figma. Supervisé el Back-End con Laravel y desarrollé chatbots en Node.js integrados con WhatsApp Flow y la API de WhatsApp. Coordiné el despliegue en Digital Ocean, integrando Cloudflare, Docker y Nginx. Trabajé con un equipo multifuncional, gestionando análisis de diseño, requisitos, documentación, asignación de tareas, revisión de funcionalidad y soporte tanto en front-end como en la interacción con el cliente y el equipo de UX.",
    },
    {
        title: "Front-End Developer",
        company: "Pulpomatic S.A. de C.V.",
        period: "Octubre 2022 - Septiembre 2023",
        type: "Remoto",
        contractType: "Contrato",
        logo: "/logos/pulpo.png", // reemplaza con tu ruta real
        technologies: ["Angular", "Tailwind", "Nest.js", "PugJS", "GitHub"],
        description: "Desarrollé y mantuve funcionalidades en Angular, creando componentes reutilizables para diversos módulos y aplicando validaciones personalizadas en formularios. Gestioné estados con Redux y resolví incidencias en el sistema. Contribuí a identificar y proponer soluciones para desafíos funcionales y nuevas implementaciones, además de diseñar documentos PDF con PugJS y Puppeteer.",
    },
];

export default function Experiences() {
    return (
        <section id="experience">
            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 py-16 mt-10">
                <div className="container mx-auto px-6 max-w-5xl">

                    {/* Header */}
                    <h1 className="text-5xl sm:text-6xl font-bold text-center mb-3 text-gray-900 dark:text-white">
                        Experiencias
                    </h1>
                    <p className="italic text-center text-gray-500 dark:text-gray-400 mb-16 text-base">
                        {'"Cada desafío es una lección y una oportunidad de crecimiento."'}
                    </p>

                    {/* Timeline */}
                    <div className="space-y-14">
                        {experiences.map((exp, index) => (
                            <div key={index} className="flex gap-6 sm:gap-8">

                                {/* ── Columna izquierda: ícono timeline ── */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-white rounded-lg border-2 border-r-4 border-b-4 border-black dark:border-gray-400 flex items-center justify-center shrink-0">
                                        <BriefcaseBusiness className="w-6 h-6 text-black" />
                                    </div>
                                    {/* ── Linea vertical── */}
                                    {index < experiences.length - 1 && (
                                        <div className="w-px flex-1 mt-3 bg-gray-300 dark:bg-gray-700" />
                                    )}
                                </div>

                                {/* ── Columna central: contenido ── */}
                                <div className="flex-1 min-w-0 pb-2">

                                    {/* Título + empresa */}
                                    <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                                        <span className="text-blue-600 dark:text-blue-400">{exp.title}</span>
                                        <span className="text-gray-700 dark:text-gray-300"> - </span>
                                        <span className="text-gray-900 dark:text-white">{exp.company}</span>
                                    </h3>

                                    {/* Meta: fecha, remoto, tipo contrato */}
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.period}
                                        </span>
                                        <span className="text-gray-300 dark:text-gray-600">|</span>
                                        <span className="flex items-center gap-1.5">
                                            <Wifi className="w-3.5 h-3.5" />
                                            {exp.type}
                                        </span>
                                        <span className="text-gray-300 dark:text-gray-600">|</span>
                                        <span className="flex items-center gap-1.5">
                                            <Laptop className="w-3.5 h-3.5" />
                                            {exp.contractType}
                                        </span>
                                    </div>

                                    {/* Tech badges con íconos */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="flex items-center gap-1.5 px-3 py-1 text-sm border border-dashed border-gray-400 dark:border-gray-500 rounded-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/60 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                                            >
                                                {techIcons[tech] && (
                                                    <img
                                                        src={techIcons[tech]}
                                                        alt={tech}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                )}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Descripción */}
                                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* ── Columna derecha: logo empresa ── */}
                                <div className="hidden sm:flex shrink-0 items-start pt-1">
                                    <div className="w-24 h-24 rounded-full border-2 border-gray-900 dark:border-gray-100 overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-contain p-1"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = "none";
                                                }}
                                            />
                                        ) : (
                                            <BriefcaseBusiness className="w-8 h-8 text-gray-400" />
                                        )}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
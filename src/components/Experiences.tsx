import { BriefcaseBusiness, Wifi, MapPin, Building2 } from 'lucide-react';
import React from 'react';
import Image from 'next/image';


const techIcons: Record<string, string> = {
    "Vue.js": "/Vue.js.svg",
    "Node.js": "/Node.js.svg",
    "Laravel": "/Laravel.svg",
    "Bootstrap": "/Bootstrap.svg",
    "GitHub": "/Github.svg",
    "Docker": "/Docker.svg",
    "Digital Ocean": "/DigitalOcean.svg",
    "Angular": "/Angular.svg",
    "Tailwind": "/Tailwind.svg",
    "Nest.js": "/Nest.js.svg",
    "React": "/React.svg",
    "Next.js": "/Next.js.svg",
    "Express.js": "/Express.js.svg",
    "ViteJS": "/ViteJS.svg",
    "Postman": "/Postman.svg",
    "Prisma": "/Prisma.svg",
    "PHP": "/PHP.svg",
    "MySQL": "/MySQL.svg",
    "PostgreSQL": "/PostgreSQL.svg",
    "MongoDB": "/MongoDB.svg",
    "Hostinger": "/Hostinger.svg",
    "Wordpress": "/Wordpress.svg",
    "HTML": "/Html.svg",
    "CSS": "/Css.svg",
    "Javascript": "/Javascript.svg",
    "Shopify": "/Shopify.svg",
    "Elementor": "/Elementor.svg",
    "Excel": "/Excel.svg",
};

interface Experience {
    title: string;
    company: string;
    period: string;
    type: string;
    contractType: string;
    logo: string;
    technologies: string[];
    description: string[];
}

const experiences: Experience[] = [
    {
        title: "Desarrollador Web FullStack",
        company: "NHL Decoración Comercial",
        period: "Enero 2026 - Abril 2026",
        type: "Remoto",
        contractType: "Practicas Profesionales",
        logo: "/NhlLogo.webp",
        technologies: ["React", "Tailwind", "Next.js", "Laravel", "PHP", "GitHub", "MySQL", "Hostinger"],
        description: [
            "Desarrollé y mantuve plataformas web completas para clientes del sector salud y ONGs, trabajando en proyectos como Contigo Voy (plataforma de psicología y terapia online) y ASDEN ONG Perú.",
            "Implementé interfaces de usuario modernas y responsivas con Next.js, React y Tailwind CSS, siguiendo diseños en Figma y asegurando una experiencia de usuario óptima en dispositivos móviles y desktop.",
            "Desarrollé APIs RESTful con Laravel y PHP para la gestión de citas, pacientes, psicólogos, atenciones y pagos, integrando sistemas de autenticación y control de roles.",
            "Integré sistemas de videollamadas con Jitsi Meet y servicios externos como sistemas de correo automatizado para notificaciones automaticas y credenciales de acceso.",
            "Colaboré en el diseño e implementacion de bases de datos relacionales en MySQL, optimizando consultas y estructuras para el manejo eficiente de información clínica y administrativa.",
        ],
    },
    {
        title: "Desarrollador Web y Soporte TI",
        company: "Runway 7 Fashion",
        period: "Septiembre 2025 - Diciembre 2025",
        type: "Presencial",
        contractType: "Practicas Profesionales",
        logo: "/Runway7Logo.png",
        technologies: ["Wordpress", "Elementor", "Shopify", "HTML", "CSS", "Javascript", "Hostinger", "Excel"],
        description: [
            "Implementé nuevas páginas y secciones del sitio web utilizando diseños UI modernos, mejorando la usabilidad, la identidad visual y la experiencia del usuario.",
            "Gestioné el sitio web y la tienda online basada en WordPress y Shopify, optimizando la presentación de productos, la carga de contenidos y la eficiencia operativa del e-commerce.",
            "Desarrollé y gestioné la sección de blogs y productos oficiales, contribuyendo al posicionamiento digital de la marca mediante contenido actualizado y relevante.",
            "Colaboré en la administración, actualización y mantenimiento del catálogo de productos, asegurando información precisa y alineada con las campañas de marketing y ventas.",
            "Apoyé en el análisis y gestión de ventas, generando reportes organizados con Microsoft Office para respaldar decisiones comerciales estratégicas.",
        ],
    },
    {
        title: "Asistente administrador de TI",
        company: "ONRAN S.A.C.",
        period: "Junio 2024 - Diciembre 2024",
        type: "Presencial",
        contractType: "Practicas Profesionales",
        logo: "/OnranLogo.webp",
        technologies: ["HTML", "CSS", "Javascript", "MySQL", "Excel"],
        description: [
            "Registré y realicé mantenimiento de bases de datos internas, desarrollando habilidades de manejo y organización de información.",
            "Realicé tareas administrativas de red, y seguimiento de procesos internos, adquiriendo experiencia en documentación, base de datos y flujo de trabajo organizado.",
            "Brindé atención de incidencias técnicas a clientes internos y externos, como configuración de correo, configuración de perfiles de usuarios y administradores, así como acceso a sistemas.",
        ],
    },
    {
        title: "Diseñador web y soporte de sistemas",
        company: "Muebleria Alexandra",
        period: "Noviembre 2023 - Mayo 2024",
        type: "Presencial",
        contractType: "Contrato",
        logo: "",
        technologies: ["HTML", "CSS", "Javascript", "GitHub", "MySQL"],
        description: [
            "Elaboré reportes básicos de la base de datos, reforzando mi capacidad analítica y de documentación.",
            "Actualicé la página web corporativa, y generé aplicativos web para el Marketing empresarial.",
            "Gestioné la base de inventario, control de existencias de los productos, aplicando registro ordenado de la base de datos informáticos, y mejora en la organización de la empresa.",
        ],
    },
];

// ── Componente reutilizable del logo 
const CompanyLogo = ({ logo, company, size = "w-28" }: { logo: string; company: string; size?: string }) => (
    <div className={`relative ${size} aspect-square shrink-0 z-10`}>
        <span className="absolute rounded-full top-0 left-0 mt-1 ml-1 h-full w-full bg-black dark:bg-gray-500" />
        {logo ? (
            <div className={`relative rounded-full aspect-square border-2 border-black dark:border-white ${size} bg-white overflow-hidden`}>
                <Image
                    src={logo}
                    alt={company}
                    fill
                    className="object-contain p-2"
                />
            </div>
        ) : (
            <div className="relative w-full h-full rounded-full border-2 border-black dark:border-white bg-white flex items-center justify-center">
                <Building2 className="w-10 h-10 text-black dark:text-gray-600" />
            </div>
        )}
    </div>
);

interface ExperienceProps {
    darkMode: boolean;
}


export default function Experiences({ darkMode }: ExperienceProps) {

    // Define los íconos con dark mode
    const getTechIcon = (tech: string) => {
        const darkIcons = ["Prisma", "PHP", "Next.js", "GitHub", "Express.js"];
        if (darkMode && darkIcons.includes(tech)) {
            return `/${tech}_dark.svg`;
        }
        return techIcons[tech];
    };


    return (
        <section id="experience">
            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 py-16 mt-10">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

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
                            <div key={index} className="flex gap-4 sm:gap-8">

                                {/* ── Columna izquierda: ícono + línea vertical ── */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full border-2 border-r-[6px] border-b-[6px] border-black dark:border-gray-400 flex items-center justify-center shrink-0">
                                        <BriefcaseBusiness className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                                    </div>
                                    {index < experiences.length - 1 && (
                                        <div className="w-px flex-1 mt-3 bg-gray-300 dark:bg-gray-700" />
                                    )}
                                </div>

                                {/* ── Columna central: todo el contenido ── */}
                                <div className="flex-1 min-w-0 pb-2">

                                    {/* Título + empresa */}
                                    <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                                        <span className="text-blue-600 dark:text-blue-400">{exp.title}</span>
                                        <span className="text-gray-700 dark:text-gray-300"> - </span>
                                        <span className="text-gray-900 dark:text-white">{exp.company}</span>
                                    </h3>

                                    {/* Meta: periodo, tipo, contrato */}
                                    <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {exp.period}
                                        </span>
                                        <span className="text-gray-300 dark:text-gray-600">|</span>
                                        <span className="flex items-center gap-1">
                                            {exp.type === "Remoto"
                                                ? <Wifi className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                : <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            }
                                            {exp.type}
                                        </span>
                                        <span className="text-gray-300 dark:text-gray-600">|</span>
                                        <span className="flex items-center gap-1">
                                            <BriefcaseBusiness className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            {exp.contractType}
                                        </span>
                                    </div>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm border border-dashed border-gray-400 dark:border-gray-500 rounded-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/60 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md hover:shadow-purple-300 transition-colors"
                                            >
                                                {techIcons[tech] && (
                                                    <Image
                                                        src={getTechIcon(tech)}
                                                        alt={tech}
                                                        width={16}
                                                        height={16}
                                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain"
                                                    />
                                                )}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Descripción */}
                                    <ul className="mt-3 sm:mt-4 space-y-1.5 list-none">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-900 dark:text-gray-300 text-sm sm:text-md leading-relaxed">
                                                <span className="text-blue-500 dark:text-blue-400 mt-1 shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* ── Logo mobile: debajo de descripción, centrado ── */}
                                    <div className="flex sm:hidden justify-center mt-6">
                                        <CompanyLogo logo={exp.logo} company={exp.company} size="w-24" />
                                    </div>
                                </div>

                                {/* ── Logo desktop: columna derecha centrada ── */}
                                <div className="hidden sm:flex flex-col items-center justify-center">
                                    <CompanyLogo logo={exp.logo} company={exp.company} size="w-36" />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
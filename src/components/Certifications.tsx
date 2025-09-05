import React, { useState } from 'react'

interface CertificateProps {
    darkMode: boolean
}

const certificates = [
    {
        image: "/certifications/ciscoNet.png",
        pdf: "/certifications/ciscoNetSec.pdf",
        title: "CCNA: Cisco Certified Network Professional - Security",
        description: "Certificación en seguridad de redes, enfocada en la protección, integridad y confidencialidad de los datos, así como en la prevención de intrusiones y amenazas informáticas.",
        date: "Julio 2025",
        institution: "Udemy"
    },
    {
        image: "/certifications/ReactTs.png",
        pdf: "/certifications/React-TS-Udemy-Certficado.pdf",
        title: "React y TypeScript - La Guía Completa Creando +10 Proyectos",
        description: "Formación práctica en desarrollo de aplicaciones modernas utilizando React y TypeScript, creando más de 10 proyectos reales para dominar el ecosistema Front-End.",
        date: "Diciembre 2024",
        institution: "Udemy"
    },
    {
        image: "/certifications/Nodejs.png",
        pdf: "/certifications/Nodejs-Udemy-Certficado.pdf",
        title: "NodeJS: De cero a experto",
        description: "Aprendizaje integral en Node.js, abarcando desde los fundamentos hasta la creación de APIs y aplicaciones backend robustas y escalables.",
        date: "Octubre 2024",
        institution: "Udemy"
    },
    {
        image: "/certifications/legacyNodejs.png",
        pdf: "/certifications/Legacy-Nodejs.pdf",
        title: "Legacy - Nodejs: De cero a experto",
        description: "Curso enfocado en versiones anteriores de Node.js, ideal para comprender y mantener proyectos legacy en entornos empresariales.",
        date: "Septiembre 2024",
        institution: "Udemy"
    },
    {
        image: "/certifications/excelUdemy.png",
        pdf: "/certifications/UdemyExcel.pdf",
        title: "Microsoft Office Specialist: Microsoft Excel",
        description: "Dominio de Microsoft Excel desde nivel principiante hasta avanzado, incluyendo análisis de datos, fórmulas, tablas dinámicas y automatización.",
        date: "Agosto 2024",
        institution: "Udemy"
    },
    {
        image: "/certifications/linux.png",
        pdf: "/certifications/UdemyLinuxEst.pdf",
        title: "CNNA: Certificate Linux Essentials",
        description: "Certificación básica en Linux, cubriendo conceptos esenciales del sistema operativo, comandos principales y administración inicial de sistemas.",
        date: "Julio 2023",
        institution: "Cisco Networking Academy"
    }
];

export default function Certifications({ darkMode }: CertificateProps) {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const handleChange = (nextIdx: number) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(nextIdx);
            setFade(true);
        }, 200);
    };

    const prev = () => handleChange((current - 1 + certificates.length) % certificates.length);
    const next = () => handleChange((current + 1) % certificates.length);

    const cert = certificates[current];

    return (
        <section id="certifications">
            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 mt-10 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 dark:text-white">Certificaciones</h1>
                    <p className="italic text-center text-gray-600 dark:text-gray-300 mb-12">
                        {'"Cada certificado representa un logro y un paso más en mi desarrollo profesional."'}
                    </p>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
                            {/* Botón anterior solo visible en md+ */}
                            <button
                                onClick={prev}
                                className={`hidden md:block p-2 rounded-full 
                                ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-900"
                                        : "bg-gray-200 text-gray-900 hover:bg-blue-200 hover:text-blue-900"
                                    } 
                                    transition-colors`}
                                aria-label="Anterior"
                            >
                                &#8592;
                            </button>
                            {/* Tarjeta con transición y tamaño fijo */}
                            <div
                                className={`flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-8 w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} overflow-hidden`}
                            >
                                <div className="flex-shrink-0 flex justify-center items-center w-full md:w-[420px] h-52 sm:h-64 md:h-80">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-contain rounded-lg border bg-white"
                                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center px-2 md:px-0">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">{cert.title}</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">{cert.description}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Fecha:</span> {cert.date}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Institución:</span> {cert.institution}
                                    </p>
                                    <a
                                        href={cert.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-48 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-semibold"
                                    >
                                        Ver certificado (PDF)
                                    </a>
                                </div>
                            </div>
                            {/* Botón siguiente solo visible en md+ */}
                            <button
                                onClick={next}
                                className={`hidden md:block p-2 rounded-full 
                                ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-900"
                                        : "bg-gray-200 text-gray-900 hover:bg-blue-200 hover:text-blue-900"
                                    } 
                                    transition-colors`}
                                aria-label="Siguiente"
                            >
                                &#8594;
                            </button>
                        </div>
                        {/* Botones de navegación centrados en mobile */}
                        <div className="flex md:hidden justify-center mt-4 gap-8">
                            <button
                                onClick={prev}
                                className={`p-2 rounded-full 
                                ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-900"
                                        : "bg-gray-200 text-gray-900 hover:bg-blue-200 hover:text-blue-900"
                                    } 
                                    transition-colors`}
                                aria-label="Anterior"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={next}
                                className={`p-2 rounded-full 
                                ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-gray-200 hover:text-gray-900"
                                        : "bg-gray-200 text-gray-900 hover:bg-blue-200 hover:text-blue-900"
                                    } 
                                    transition-colors`}
                                aria-label="Siguiente"
                            >
                                &#8594;
                            </button>
                        </div>
                        {/* Indicadores */}
                        <div className="flex justify-center mt-6 gap-2">
                            {certificates.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-400 dark:bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
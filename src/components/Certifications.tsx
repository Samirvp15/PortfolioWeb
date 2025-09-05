import React, { useState } from 'react'

interface CertificateProps {
    darkMode: boolean
}

const certificates = [
    {
        image: "/certs/cert1.png",
        title: "React Developer",
        description: "Certificado de desarrollo profesional en React.",
        date: "Junio 2024",
        institution: "Platzi"
    },
    {
        image: "/certs/cert2.png",
        title: "Node.js Backend",
        description: "Certificado en desarrollo de APIs con Node.js.",
        date: "Marzo 2024",
        institution: "Udemy"
    },
    {
        image: "/certs/cert3.png",
        title: "Full Stack Web",
        description: "Certificado Full Stack Web Developer.",
        date: "Enero 2023",
        institution: "FreeCodeCamp"
    }
];

export default function Certifications({ darkMode }: CertificateProps) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + certificates.length) % certificates.length);
    const next = () => setCurrent((current + 1) % certificates.length);

    const cert = certificates[current];

    return (
        <section id="certifications">
            <div className="min-h-screen bg-slate-100 dark:bg-gray-900 mt-10 py-16">
                <div className="container mx-auto px-6">
                    <h1 className="text-6xl font-bold text-center mb-4 dark:text-white">Certificaciones</h1>
                    <p className="italic text-center text-gray-600 dark:text-gray-300 mb-12">
                        {'"Cada certificado representa un logro y un paso más en mi desarrollo profesional."'}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                            aria-label="Anterior"
                        >
                            &#8592;
                        </button>
                        <div className="flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-64 h-40 object-contain rounded-lg border"
                            />
                            <div>
                                <h2 className="text-2xl font-bold mb-2 dark:text-white">{cert.title}</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Fecha:</span> {cert.date}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Institución:</span> {cert.institution}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                            aria-label="Siguiente"
                        >
                            &#8594;
                        </button>
                    </div>
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
        </section>
    )
}

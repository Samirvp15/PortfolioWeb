

import React from 'react'

export default function Certifications() {
  return (
    <section id="certifications">
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 mt-10 py-16">
        <div className="container mx-auto px-6">
            <h1 className="text-6xl font-bold text-center mb-4 dark:text-white">Experiencias</h1>
            <p className=" italic text-center text-gray-600 dark:text-gray-300 mb-12">
                {'"Cada desafío es una lección y una oportunidad de crecimiento."'}
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
                                        <Wifi width={18} height={18} /> {exp.type}
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
  )
}

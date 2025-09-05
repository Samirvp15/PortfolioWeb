import { Moon, Sun } from "lucide-react";
import Link from "next/link";



interface HeaderProps {
    darkMode: boolean,
    toggleDarkMode: () => void
}


export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {

    return (
        <>
            <nav className="sticky top-0 flex justify-around items-center py-4 px-6 bg-slate-100 dark:bg-gray-900 shadow-sm z-50">
                <div className="text-xl font-bold dark:text-white">
                        <img
                            src={darkMode ? "/projectsImages/logoSalexDevDark.png" : "/projectsImages/logoSalexDev.png"}
                            alt="Dev Logo"
                            className="inline-block w-48 h-20  align-middle"
                        />
                </div>

                <div className="flex gap-6 font-bold dark:text-white">
                    <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-500">Acerca de mí</Link>
                    {/*<Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-500">Experiencias</Link>*/}
                    <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-500">Proyectos</Link>
                    <Link href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-500">Certificaciones</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* <span>🇲🇽 Español (MX)</span> */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {darkMode ? <Sun color="#ffffff" size={25} /> : <Moon size={25} />}
                    </button>
                </div>
            </nav>
        </>
    )
}

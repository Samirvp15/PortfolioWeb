import { Moon, Sun, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
    darkMode: boolean,
    toggleDarkMode: () => void
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-slate-100 dark:bg-gray-900 shadow-sm z-50">
                {/* Logo */}
                <div className="text-xl font-bold dark:text-white mb-2 md:mb-0 flex-1 flex justify-center md:justify-start px-6 md:px-40">
                    <Image
                        src={darkMode ? "/projectsImages/logoSalexDevDark.png" : "/projectsImages/logoSalexDev.png"}
                        alt="Dev Logo"
                        width={192}
                        height={80}
                        className="inline-block w-32 h-12 sm:w-48 sm:h-20 align-middle object-contain"
                        priority
                    />
                </div>

                {/* Hamburger menu for mobile */}
                <div className="md:hidden flex-1 flex justify-end">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Abrir menú"
                    >
                        <Menu size={28} />
                    </button>
                </div>

                {/* Links */}
                <div className={`
    ${menuOpen ? "flex" : "hidden"}
    flex-row gap-4 font-bold dark:text-white items-center absolute top-full left-0 w-full
    bg-slate-100 dark:bg-gray-900 py-4 shadow-md md:shadow-none
    md:static md:flex md:flex-row md:gap-6 md:w-auto md:bg-transparent md:dark:bg-transparent md:py-0
    px-32
`}>
                    <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-500" onClick={() => setMenuOpen(false)}>Acerca de mí</Link>
                    {/*<Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-500">Experiencias</Link>*/}
                    <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-500" onClick={() => setMenuOpen(false)}>Proyectos</Link>
                    <Link href="#certifications" className="hover:text-blue-600 dark:hover:text-blue-500" onClick={() => setMenuOpen(false)}>Certificaciones</Link>
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-2"
                        aria-label="Cambiar modo"
                    >
                        {darkMode ? <Sun color="#ffffff" size={25} /> : <Moon size={25} />}
                    </button>
                </div>
            </nav>
        </>
    )
}
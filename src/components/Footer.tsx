import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 bg-slate-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-6 text-center text-gray-700 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} Samir Alexander Vergara Pastor. Todos los derechos reservados.
      </div>
    </footer>
  )
}

'use client'

// import { useState } from 'react';
// import Link from "next/link";
// import NavbarLogo from "./NavbarLogo";


// const NavbarMenu = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     }

//     return (
//         <nav className='w-full shadow-2xl'>
//             <div className='flex justify-between items-center py-1'>
//                 <NavbarLogo />
//                 <div className='flex'>
//                     <Link href={'#'} className='bg-teal-500 shadow-lg shadow-teal-500/50 flex rounded-l-full text-white hover:bg-teal-800 border-r-4 border-zinc-300 p-4'>Contacto</Link>
//                     <Link href={'#'} className='bg-teal-500 shadow-lg shadow-teal-500/50 flex text-white hover:bg-teal-800 border-r-4 border-zinc-300 p-4'>Nosotro</Link>
//                     <Link href={'#'} className='bg-teal-500 shadow-lg shadow-teal-500/50 flex rounded-r-full text-white hover:bg-teal-800 p-4'>Proyectos</Link>
//                 </div>
//                 {/* Log in & sign in responsive */}
//                 <div className='flex'>                
//                     <button
//                         className='md:hidden bg-teal-500 shadow-lg shadow-teal-500/50 rounded-l-full text-white hover:bg-teal-800 border-r-4 border-zinc-300 p-4'
//                         onClick={toggleMobileMenu}>
//                         Menu
//                     </button>
//                     <div className={`md:${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//                         <Link href={'#'} className='bg-slate-400 hover:bg-slate-700 rounded shadow-md text-white p-2 m-2'>Log In</Link>
//                         <Link href={'#'} className='bg-slate-400 hover:bg-slate-700 rounded shadow-md text-white p-2 m-2'>Sign In</Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavbarMenu;

import { useState } from 'react';
import Link from 'next/link';
import NavbarLogo from './NavbarLogo';

const NavbarMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full shadow-2xl">
      <div className="flex justify-between items-center py-1">
        <NavbarLogo />
        <div className="flex">
          {/* Menú hamburguesa para dispositivos móviles */}
          <button
            className="md:hidden bg-teal-500 shadow-lg shadow-teal-500/50 rounded-lg w-28 text-white hover:bg-teal-800 border-4 border-zinc-300 p-4"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
          {/* Enlaces de navegación */}
          <div className="hidden md:flex">
            <Link href="#" className="bg-teal-500 shadow-lg shadow-teal-500/50 flex rounded-l-full text-white hover:bg-teal-800 border-r-4 border-zinc-300 p-4">
              Contacto
            </Link>
            <Link href="#" className="bg-teal-500 shadow-lg shadow-teal-500/50 flex text-white hover:bg-teal-800 border-r-4 border-zinc-300 p-4">
              Nosotros
            </Link>
            <Link href="#" className="bg-teal-500 shadow-lg shadow-teal-500/50 flex rounded-r-full text-white hover:bg-teal-800 p-4">
              Proyectos
            </Link>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row'>  
          <Link href="#" className="bg-slate-400 hover:bg-slate-700 rounded shadow-md text-white p-2 m-2">
            Log In
          </Link>
          <Link href="#" className="bg-slate-400 hover:bg-slate-700 rounded shadow-md text-white p-2 m-2">
            Sign In
          </Link>
        </div>
      </div>
      {/* Menú hamburguesa para dispositivos móviles */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul>
            <li>
              <Link href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-500 hover:text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-500 hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-500 hover:text-white">
                Proyectos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarMenu;

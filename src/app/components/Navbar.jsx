"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, LifebuoyIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed mx-auto border border-gray-300 dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-95 dark:bg-opacity-100 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-gray-900 dark:text-white font-semibold group transition-colors duration-300"
        >
         <LifebuoyIcon className="h-8 w-8 text-green-500 inline-block mr-2 animate-spin hover:animate-bounce transition-all duration-300 group-hover:text-green-400 group-hover:scale-110 group-hover:rotate-12" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl border-2 border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-white hover:border-green-500 dark:hover:border-white hover:bg-green-50 dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6 text-yellow-500 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            )}
          </button>
          
          {/* Menu Icon Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-3 rounded-xl border-2 border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-green-600 dark:hover:text-white hover:border-green-500 dark:hover:border-white hover:bg-green-50 dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300 group"
            aria-label="Toggle navigation menu"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
            ) : (
              <XMarkIcon className="h-6 w-6 group-hover:scale-110 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;

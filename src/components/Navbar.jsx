import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-light/40 backdrop-blur-md shadow-md z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-10"/>
          <h1 className="font-extrabold text-2xl text-primary">Taste<span className="text-secondary">Bite</span></h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-dark text-lg font-semibold relative group transition-all duration-300 hover:text-primary"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark text-2xl relative z-50 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Slide Menu */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: menuOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-2/3 h-screen bg-light shadow-lg md:hidden flex flex-col items-center justify-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark text-lg font-semibold relative group transition-all duration-300 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

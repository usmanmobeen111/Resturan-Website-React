import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-dark text-light font-lato">
      {/* Upper Footer */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="logo" className="h-10" />
            <h1 className="font-extrabold text-2xl text-primary">
              Taste<span className="text-secondary">Bite</span>
            </h1>
          </div>
          <p className="text-light/80 leading-relaxed mb-6">
            At <span className="text-primary font-semibold">TasteBite</span>, we believe in crafting flavors that ignite your senses. 
            From freshly sourced ingredients to world-class presentation, we serve perfection on every plate.
          </p>

          <div className="flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 border border-light/20 flex items-center justify-center text-light hover:text-primary hover:bg-light/20 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-light/80 hover:text-primary transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-secondary">Stay Updated</h2>
          <p className="text-light/80 mb-4">
            Subscribe to get the latest updates, offers, and recipes right in your inbox.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-light/10 border border-light/20 text-light placeholder-light/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary text-light font-semibold transition-all duration-300"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-light/20 py-4 text-center text-light/70 text-sm">
        &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">TasteBite</span>. 
        All Rights Reserved. | Designed by <span className="text-secondary font-semibold">Code Weaver</span>
      </div>
    </footer>
  );
};

export default Footer;

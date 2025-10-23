import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  });

  return (
    <footer className="bg-dark text-light font-lato overflow-hidden">
      {/* Upper Footer */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Brand Section */}
        <motion.div variants={fadeUp(0)}>
          <div className="flex items-center gap-2 mb-4">
            <motion.img
              src="/logo.svg"
              alt="logo"
              className="h-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <h1 className="font-extrabold text-2xl text-primary">
              Taste<span className="text-secondary">Bite</span>
            </h1>
          </div>

          <p className="text-light/80 leading-relaxed mb-6">
            At <span className="text-primary font-semibold">TasteBite</span>, we believe in crafting flavors that ignite your senses. 
            From freshly sourced ingredients to world-class presentation, we serve perfection on every plate.
          </p>

          <div className="flex items-center gap-4">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com/usmanmobeen111" },
              { Icon: FaInstagram, href: "https://instagram.com/usmanmobeen111" },
              { Icon: FaGithub, href: "https://github.com/usmanmobeen111" },
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/usman-mobeen-a08873308/" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp(0.2 + i * 0.1)}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-light/10 border border-light/20 flex items-center justify-center text-light hover:text-primary hover:bg-light/20 transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp(0.2)}
          className="flex flex-col items-start"
        >
          <h2 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h2>
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                variants={fadeUp(0.3 + i * 0.1)}
              >
                <a
                  href={link.href}
                  className="text-light/80 hover:text-primary transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={fadeUp(0.4)}>
          <h2 className="text-xl font-semibold mb-4 text-secondary">Stay Updated</h2>
          <p className="text-light/80 mb-4">
            Subscribe to get the latest updates, offers, and recipes right in your inbox.
          </p>
          <motion.form
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-light/10 border border-light/20 text-light placeholder-light/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary text-light font-semibold transition-all duration-300"
            >
              Join
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="border-t border-light/20 py-4 text-center text-light/70 text-sm"
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">TasteBite</span>. All Rights Reserved. | Designed by{" "}
        <span className="text-secondary font-semibold">Code Weaver</span>
      </motion.div>
    </footer>
  );
};

export default Footer;

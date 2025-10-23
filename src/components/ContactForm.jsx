import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary text-xl" />,
      title: "Visit Us",
      detail: "123 Flavor Street, Lahore, Pakistan",
    },
    {
      icon: <FaPhoneAlt className="text-primary text-xl" />,
      title: "Call Us",
      detail: "+92 300 1234567",
    },
    {
      icon: <FaEnvelope className="text-primary text-xl" />,
      title: "Email Us",
      detail: "info@tastebite.com",
    },
    {
      icon: <FaClock className="text-primary text-xl" />,
      title: "Opening Hours",
      detail: "Mon - Sun: 10:00 AM - 11:00 PM",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-dark text-light font-lato py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0)}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
            Get In Touch
          </h2>
          <p className="text-light/70 text-lg">
            We’d love to hear from you. Let’s make something delicious together.
          </p>
          <div className="mt-3 h-[3px] w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.2)}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.2 + i * 0.1)}
                className="flex items-start gap-4 bg-light/5 border border-light/10 p-5 rounded-2xl hover:bg-light/10 transition-all duration-300"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary">{item.title}</h4>
                  <p className="text-light/80">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            variants={fadeUp(0.4)}
            viewport={{ once: true }}
            className="bg-light/5 p-8 rounded-2xl shadow-lg border border-light/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-light/10 border border-light/20 text-light placeholder-light/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-light/10 border border-light/20 text-light placeholder-light/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 mb-6 rounded-lg bg-light/10 border border-light/20 text-light placeholder-light/60 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,140,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-primary hover:bg-secondary text-light font-semibold rounded-lg transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

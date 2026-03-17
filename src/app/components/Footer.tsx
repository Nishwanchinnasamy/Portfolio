import { Link } from "react-router";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Nishwanchinnasamy" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nishwanc08/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/NishwanC8" },
    { icon: Mail, label: "Email", href: "mailto:cnishwan@gmail.com.com" },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-cyan-500/20">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Nishwan</span>
              <span className="text-cyan-400"> Chinnasamy</span>
            </h3>
            <p className="text-gray-400">
              Crafting intuitive digital experiences through thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-cyan-500/10 text-center text-gray-400">
          <p>&copy; 2026 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

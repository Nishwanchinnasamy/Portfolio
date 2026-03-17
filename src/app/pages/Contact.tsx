import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, Download, Send, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cnishwan@gmail.com",
      href: "mailto:cnishwan@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "6383280733",
      href: "tel:+916383280733",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nishwanc08/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Nishwanchinnasamy",
      color: "from-gray-600 to-gray-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/NishwanC8",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-cyan-400">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for UI/UX Designer or Product Designer opportunities.
            Feel free to reach out if you'd like to discuss projects or collaboration!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`p-6 bg-gradient-to-br ${social.color} rounded-xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                    <span className="text-sm font-medium text-white">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* View Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center"
            >
              <h3 className="text-xl font-bold mb-2">View My Resume</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get a detailed overview of my work experience and projects
              </p>

              <motion.a
                href="/NishwanChinnasamy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border border-cyan-500/30 rounded-lg font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                <Download size={20} />
                View Resume (PDF)
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Opportunities
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Looking for <span className="text-cyan-400">UI/UX Designer</span> or{" "}
              <span className="text-cyan-400">Product Designer</span> Roles
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm actively seeking full-time positions or internship opportunities where I can
              contribute my design skills and continue growing as a designer. Open to remote
              or on-site positions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
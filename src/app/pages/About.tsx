import { motion } from "motion/react";
import { Code2, Palette, Layers, Zap, Figma, Users, Target, Lightbulb } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "UI/UX Design",
      items: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Interaction Design",
        "Design Systems",
      ],
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Unity", "After Effects"],
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Responsive Design"],
    },
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Research",
      description: "Understanding user needs, market analysis, and competitor research",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Layers,
      title: "Wireframe",
      description: "Creating low-fidelity layouts and information architecture",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Developing high-fidelity mockups with brand identity",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Prototype",
      description: "Building interactive prototypes for user testing",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Target,
      title: "Testing",
      description: "Gathering feedback and iterating on design solutions",
      color: "from-red-500 to-orange-500",
    },
  ];

  const expertise = [
    { icon: Figma, label: "Figma Expert", value: "90%" },
    { icon: Palette, label: "Branding", value: "85%" },
    { icon: Code2, label: "Game UI", value: "80%" },
    { icon: Lightbulb, label: "UX Research", value: "88%" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Final year Computer Science & Design student passionate about creating
            meaningful digital experiences that solve real-world problems
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                  style={{ width: "300px", height: "400px" }}
                >
                  {/* Floating animation */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <img
                      src="/avatar.png"
                      alt="Nishwan Chinnasamy"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Spinning ring decoration */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-24 h-24 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full"
                  />

                  {/* Glow base */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-cyan-500/20 rounded-full blur-md" />
                </motion.div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Hi, I'm a <span className="text-cyan-400">UI/UX Designer</span>
                </h2>
                <p className="text-gray-400 mb-4">
                  As a final year student specializing in Computer Science and Design, I bring
                  a unique blend of technical knowledge and creative vision to every project.
                </p>
                <p className="text-gray-400 mb-6">
                  My design philosophy centers around creating intuitive, accessible, and
                  beautiful interfaces that users love. With experience in Figma and a passion
                  for user-centered design, I've completed multiple projects ranging from
                  mobile apps to web platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>4+ UI/UX Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>Expert in Figma & Design Tools</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>Branding & Visual Identity Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & <span className="text-cyan-400">Tools</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-cyan-500/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  {skillSet.category}
                </h3>
                <div className="space-y-3">
                  {skillSet.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-300 group"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Design <span className="text-cyan-400">Process</span>
          </h2>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/50 to-cyan-500/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative bg-white/5 border border-cyan-500/20 rounded-xl p-6 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>

                  <div className="absolute top-2 right-2 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
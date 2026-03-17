import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { Search } from "lucide-react";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: "1",
      title: "Lance - Freelance App",
      category: "UI/UX Design",
      description: "A clean, intuitive freelance marketplace app that connects clients and talent seamlessly with smart project discovery, effortless communication, and streamlined hiring.",
      tags: ["#FreelanceApp", "#Mobile UI/Ux", "#UserCenteredDesign", "#FigmaPrototype"],
      problem: "Freelancers and clients struggle with scattered platforms and inefficient hiring.",
      solution: "Centralized app simplifying discovery, communication, and secure project management.",
      impact: "Faster hiring, better matches, improved productivity for freelancers and clients.",
      figmaLink: "https://figma.com",
      prototypeLink: "https://figma.com/proto",
    },
    {
      id: "2",
      title: "Melophile - Music Streaming App",
      category: "UI/UX Design",
      description: "Melophile is a sleek music streaming app that delivers personalized playlists, seamless discovery, and high-quality audio for an immersive listening experience.",
      tags: ["#MusicStreaming", "#MicroInteractions", "#ResponsiveDesign", "#DarkModeUI"],
      problem: "Users struggle finding personalized music across fragmented streaming platforms.",
      solution: "Smart music streaming app with tailored recommendations and seamless discovery.",
      impact: "Enhanced listening experience with effortless access to perfectly matched music.",
      figmaLink: "https://figma.com",
      prototypeLink: "https://figma.com/proto",
    },
    {
      id: "3",
      title: "Carpooling App",
      category: "UI/UX Design",
      description: "A smart carpooling app that connects riders and drivers heading the same way, making daily travel more affordable and efficient. It reduces traffic congestion and environmental impact while promoting shared mobility.",
      tags: ["#RideShareApp", "#FigmaDesign", "#BookingFlow", "#MobilityApp"],
      problem: "Daily commuting causes high costs, traffic congestion, and pollution.",
      solution: "Carpooling app connecting riders and drivers for shared trips.",
      impact: "Reduced travel expenses, less traffic, and lower environmental impact.",
      figmaLink: "https://www.figma.com/design/GR4g7uis0FpNhc8gmNBXkn/CarPooling?node-id=0-1&p=f&t=KOvjpUl0lh75mZ13-0",
      prototypeLink: "https://www.figma.com/proto/GR4g7uis0FpNhc8gmNBXkn/CarPooling?node-id=1-3&p=f&t=liBmqiiTggaisFdI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      id: "4",
      title: "Job Seeker - Job Search App",
      category: "UI/UX Design",
      description: "A smart job search app that connects candidates with relevant opportunities through personalized recommendations. It simplifies hiring with easy applications, tracking, and direct communication with recruiters.",
      tags: ["#CareerPlatform", "#JobSearchUX","#ApplicationFlow", "#CleanUI"],
      problem: "Job seekers face difficulty finding relevant roles and tracking applications.",
      solution: "Centralized app offering personalized job matches and application tracking.",
      impact: "Faster job discovery, better matches, and improved hiring efficiency.",
      figmaLink: "https://www.figma.com/design/fjtLVdGvtd7HIlYdKrnDBi/JobSeeker?node-id=0-1&p=f&t=62IY9jhnjfn2HIsr-0",
      prototypeLink: "https://www.figma.com/proto/fjtLVdGvtd7HIlYdKrnDBi/JobSeeker?node-id=2002-901&p=f&t=9VZyZKjSt2af3K2F-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A collection of UI/UX design projects showcasing user-centered solutions and creative problem-solving
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400">Try a different search</p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
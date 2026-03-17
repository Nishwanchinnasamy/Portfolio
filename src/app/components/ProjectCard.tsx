import { motion } from "motion/react";
import { Figma, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string;
  figmaLink: string;
  prototypeLink: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        className="group relative bg-white/5 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all h-full flex flex-col"
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="text-cyan-400 text-sm mb-2">{project.category}</div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cyan-500/10 mx-6" />

        {/* Problem / Solution / Impact */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
              Problem
            </span>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
              Solution
            </span>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
              Impact
            </span>
            <p className="text-gray-300 text-sm mt-1 leading-relaxed">{project.impact}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cyan-500/10 mx-6" />

        {/* Buttons */}
        <div className="p-6 pt-4 flex gap-3">
          <motion.a
            href={project.figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-cyan-500/30 rounded-lg text-sm font-medium text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            <Figma className="w-4 h-4" />
            Figma Design
          </motion.a>

          <motion.a
            href={project.prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-4 h-4" />
            Live Prototype
          </motion.a>
        </div>

        {/* Accent Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
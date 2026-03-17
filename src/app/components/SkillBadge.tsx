import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  icon: LucideIcon;
  label: string;
  index?: number;
}

export function SkillBadge({ icon: Icon, label, index = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all cursor-pointer group"
    >
      <Icon className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

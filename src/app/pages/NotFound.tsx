import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <motion.h1
            className="text-9xl md:text-[200px] font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center gap-2"
              >
                <Home size={20} />
                Go Home
              </motion.button>
            </Link>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-cyan-500/30 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                View Projects
              </motion.button>
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 mx-auto border-4 border-cyan-500/20 border-t-cyan-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 border-4 border-blue-500/20 border-b-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

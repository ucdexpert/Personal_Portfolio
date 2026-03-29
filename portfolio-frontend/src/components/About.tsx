"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { User, FolderCheck, Smile, Award } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    icon: User,
    label: "Years of Experience",
    end: 5,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FolderCheck,
    label: "Projects Completed",
    end: 50,
    suffix: "+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smile,
    label: "Happy Clients",
    end: 30,
    suffix: "+",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    label: "Awards Won",
    end: 10,
    suffix: "+",
    color: "from-orange-500 to-red-500",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4 border border-blue-200 dark:border-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Get to Know Me
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              I&apos;m a passionate developer dedicated to creating impactful digital solutions
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative">
                {/* Animated border ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "3px" }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900" />
                </motion.div>
                
                {/* Profile image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                  <img src="/mypic.png" alt="Muhammad Uzair" className="w-full h-full object-cover" />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        Available for
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Freelance Work
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I&apos;m Muhammad Uzair
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A passionate Full Stack Developer based in Karachi, Pakistan. I specialize in
                building exceptional digital experiences that combine beautiful design with
                robust functionality. With a strong foundation in both frontend and backend
                technologies, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
                I believe in continuous learning and pushing the boundaries of what&apos;s possible
                on the web.
              </p>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Location", value: "Karachi, Pakistan" },
                  { label: "Email", value: "hk202504@gmial.com" },
                  { label: "Experience", value: "5+ Years" },
                  { label: "Availability", value: "Open to Work" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800 border border-blue-100 dark:border-slate-700"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  👉
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800 border border-blue-100 dark:border-slate-700 text-center hover:bg-white dark:hover:bg-slate-800/80 transition-all shadow-md hover:shadow-xl"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                >
                  <stat.icon size={28} className="text-white" />
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-white mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>

                {/* Hover effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

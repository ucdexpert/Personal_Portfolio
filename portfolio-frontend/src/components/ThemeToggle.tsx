"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Stars } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1 left-1" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-20 h-9 rounded-full transition-all duration-500 ease-in-out overflow-hidden ${
        isDark
          ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/50"
          : "bg-gradient-to-r from-amber-400 to-orange-400 shadow-lg shadow-amber-500/50"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          background: isDark
            ? "linear-gradient(to right, #4f46e5, #7c3aed)"
            : "linear-gradient(to right, #fbbf24, #fb923c)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Stars for dark mode */}
      {isDark && (
        <>
          <motion.div
            className="absolute top-1.5 left-2 text-white/60"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Stars size={10} />
          </motion.div>
          <motion.div
            className="absolute top-2 left-4 text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Stars size={6} />
          </motion.div>
        </>
      )}

      {/* Sun rays for light mode */}
      {!isDark && (
        <motion.div
          className="absolute -right-1 -top-1 text-orange-300/50"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={24} />
        </motion.div>
      )}

      {/* Toggle circle */}
      <motion.div
        className={`absolute top-1 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
          isDark ? "bg-indigo-900/50" : "bg-white/50"
        }`}
        animate={{
          x: isDark ? 48 : 4,
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon size={14} className="text-indigo-200" />
        ) : (
          <Sun size={14} className="text-amber-600" />
        )}
      </motion.div>

      {/* Label text */}
      <motion.span
        className={`absolute text-xs font-semibold transition-colors ${
          isDark ? "text-white" : "text-amber-900"
        }`}
        animate={{
          x: isDark ? 28 : 28,
          opacity: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? "Dark" : "Light"}
      </motion.span>
    </motion.button>
  );
}

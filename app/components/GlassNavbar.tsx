'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUsers, FiCalendar, FiMail, FiAward, FiBook, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/home', icon: FiHome },
  { name: 'Team', path: '/teams', icon: FiUsers },
  { name: 'Events', path: '/events', icon: FiCalendar },
  { name: 'Achievements', path: '/achievements', icon: FiAward },
  { name: 'Skill Dev', path: '/skill-dev', icon: FiBook },
  { name: 'Contact', path: '/contact', icon: FiMail },
];

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer group"
              onClick={() => handleNavigation('/home')}
            >
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <Image
                  src="/inno.png"
                  alt="Innov8ors Logo"
                  fill
                  className="object-contain relative z-10"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {/* Background pill */}
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : hoveredItem === item.name ? 1 : 0,
                        opacity: isActive ? 1 : hoveredItem === item.name ? 0.5 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-full blur-lg"
                    />

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full border border-white/20"
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/contact')}
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white font-medium text-sm flex items-center gap-2 group"
              >
                Get Started
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/40 backdrop-blur-2xl border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-white/20'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-red-400' : 'text-white/70'}`} />
                      <span className={`font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="ml-auto w-2 h-2 bg-red-500 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => handleNavigation('/contact')}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white font-medium flex items-center justify-center gap-2"
                >
                  Get Started
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 z-[60] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </>
  );
}

// Custom hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const newProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}


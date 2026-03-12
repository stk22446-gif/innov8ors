'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiPlay, FiMaximize2 } from 'react-icons/fi';
import Scene from './3d/Scene';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);

  const text1 = "Innov8ors";
  const text2 = "Makers of Innovation";

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Typewriter effect
  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let index1 = 0;
    let index2 = 0;

    const typeText1 = () => {
      if (index1 < text1.length) {
        setDisplayText1(text1.substring(0, index1 + 1));
        index1++;
        timeout1 = setTimeout(typeText1, 150);
      } else {
        timeout2 = setTimeout(() => {
          typeText2();
        }, 300);
      }
    };

    const typeText2 = () => {
      if (index2 < text2.length) {
        setDisplayText2(text2.substring(0, index2 + 1));
        index2++;
        timeout2 = setTimeout(typeText2, 100);
      } else {
        setTimeout(() => setShowSubtitle(true), 500);
      }
    };

    timeout1 = setTimeout(typeText1, 800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* 3D Background Scene */}
      <Scene />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Scanlines Effect */}
      <div className="absolute inset-0 z-15 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0 bg-[linear-gradient(transparent_1px,_rgba(255,255,255,0.03)_1px)] bg-[length:100%_4px]"
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4"
      >
        {/* Main Headline */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.3em] uppercase bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-md rounded-full border border-white/10 text-white/80 rainbow-glass">
              Welcome to the Future
            </span>
          </motion.div>

          <h1 className="font-['Megrim'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide mb-4">
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              className="rainbow-text"
            >
              {displayText1}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: displayText2.length > 0 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/70 tracking-wider"
          >
            {displayText2}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-1 h-8 sm:h-10 bg-red-500 ml-1 align-middle"
            />
          </motion.p>

          {/* Subtitle */}
          <AnimatePresence>
            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="mt-6 text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology through innovation, 
                creativity, and groundbreaking solutions that transform ideas into reality.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Floating UI Panels */}
        <div className="absolute inset-x-0 bottom-32 hidden md:flex items-end justify-between px-8 lg:px-16">
          {/* Left Panel - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="glass-panel p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-xs text-white/50">Projects</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-white/50">Members</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-white/50">Events</p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 68, 68, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <FiPlay className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 68, 68, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <FiMaximize2 className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </motion.button>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-8 w-32 h-32 border-l-2 border-t-2 border-white/20 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-32 h-32 border-r-2 border-b-2 border-white/20 rounded-br-3xl pointer-events-none" />
    </div>
  );
}


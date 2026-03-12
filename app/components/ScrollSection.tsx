'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollSection({ 
  children, 
  className = '',
  id 
}: ScrollSectionProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity }}
      className={`relative min-h-screen flex items-center justify-center py-20 ${className}`}
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

// Animated Section Title
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignment[align]}`}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full border border-white/10 text-white/80 mb-4"
      >
        {subtitle}
      </motion.span>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
        {title}
      </h2>
    </motion.div>
  );
}

// Staggered Grid for cards
interface StaggeredGridProps {
  children: ReactNode[];
  columns?: 1 | 2 | 3 | 4;
  gap?: number;
}

export function StaggeredGrid({ 
  children, 
  columns = 3, 
  gap = 8 
}: StaggeredGridProps) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-${gap}`}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Parallax Image Component
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '',
  speed = 1 
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

// Reveal on Scroll Wrapper
interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export function Reveal({ 
  children, 
  direction = 'up',
  delay = 0 
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}


'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  delay = 0,
  hoverEffect = true 
}: GlassCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={hoverEffect ? { 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      } : {}}
      className={`
        relative overflow-hidden rainbow-glass
        backdrop-blur-xl 
        rounded-3xl 
        transition-all duration-500
        group
        ${hoverEffect ? 'hover:glow-rainbow' : ''}
        ${className}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10" />
        <div className="absolute -inset-px bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 rainbow-glass rounded-full" />
        <div className="absolute top-4 left-4 h-8 w-px bg-gradient-to-b from-red-400/50 to-transparent" />
        <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full" />
        <div className="absolute bottom-4 right-4 h-8 w-px bg-gradient-to-t from-white/30 to-transparent" />
        <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-white/30 to-transparent" />
      </div>
    </motion.div>
  );
}

// Floating animation wrapper
export function FloatingCard({ 
  children, 
  className = '', 
  floatDuration = 6 
}: { 
  children: ReactNode; 
  className?: string;
  floatDuration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Glass Button Component
interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: ReactNode;
}

export function GlassButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  icon
}: GlassButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg hover:shadow-red-500/30",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    outline: "bg-transparent text-white border border-white/30 hover:border-white/50 hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      </div>
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}

// Glass Input Component
interface GlassInputProps {
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  className?: string;
  icon?: ReactNode;
}

export function GlassInput({ 
  placeholder = 'Search...', 
  type = 'text',
  className = '',
  icon 
}: GlassInputProps) {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 rounded-full
          bg-white/5 backdrop-blur-sm
          border border-white/10
          text-white placeholder-white/40
          focus:outline-none focus:border-white/30 focus:bg-white/10
          transition-all duration-300
          ${icon ? 'pl-12' : ''}
        `}
      />
    </div>
  );
}


'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassNavbar from '../components/GlassNavbar';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaCalendar, FaArrowRight } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamic import for 3D Scene (client-side only)
const PageScene = dynamic(() => import('../components/PageScene'), { ssr: false });

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  position: string;
}

// Achievement data
const achievements: Achievement[] = [
  {
    id: 1,
    title: "TechHuddleX 2K25 - Tech Skit",
    description: "First Place in Tech Skit Competition at Cambridge Institute of Technology. Showcased creativity, technical awareness, teamwork, and effective communication skills.",
    date: "February 2025",
    image: "/images/achievement1 (2).jpeg",
    category: "Competition",
    position: "1st Place"
  },
  {
    id: 2,
    title: "TechHuddleX 2K25 - Tech Talk",
    description: "First Place in Tech Talk Competition. Representing the spirit of innovation, confidence, and knowledge-sharing that Innov8ors stands for.",
    date: "February 2025",
    image: "/images/achivement1 (1).jpeg",
    category: "Competition",
    position: "1st Place"
  },
  {
    id: 3,
    title: "TechHuddleX 2K25 - Code Quiz",
    description: "First Place in Code Quiz Competition, demonstrating strong problem-solving skills, technical knowledge, and logical thinking.",
    date: "February 2025",
    image: "/images/achivement (3).jpeg",
    category: "Competition",
    position: "1st Place"
  },
  {
    id: 4,
    title: "Innovation Summit 2024",
    description: "Best Community Initiative Award at the annual technology summit.",
    date: "December 2024",
    image: "/images/cambridge.jpeg",
    category: "Award",
    position: "Winner"
  },
  {
    id: 5,
    title: "HackFest 2024",
    description: "3 Teams Selected for Finals in 48-hour hackathon.",
    date: "October 2024",
    image: "/images/rit.png",
    category: "Hackathon",
    position: "Finalists"
  },
  {
    id: 6,
    title: "AI Workshop Series",
    description: "Successfully conducted AI/ML workshop with 150+ participants.",
    date: "August 2024",
    image: "/images/cit.jpg",
    category: "Workshop",
    position: "Host"
  }
];

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "", label }: { end: number; duration?: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
        {count}{suffix}
      </span>
      <p className="text-white/60 text-sm mt-2">{label}</p>
    </div>
  );
}

// Achievement Card Component
function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const getPositionColor = (position: string) => {
    if (position.includes("1st")) return "from-yellow-400 to-yellow-600";
    if (position.includes("2nd")) return "from-gray-300 to-gray-500";
    if (position.includes("3rd")) return "from-amber-600 to-amber-800";
    return "from-red-500 to-blue-500";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-b from-zinc-900/90 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10">
        {/* Top Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/50 to-transparent z-10"></div>
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Position Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1 bg-gradient-to-r ${getPositionColor(achievement.position)} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {achievement.position}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-semibold rounded-full">
              {achievement.category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
            {achievement.title}
          </h3>
          
          <p className="text-white/60 text-sm mb-4 line-clamp-3">
            {achievement.description}
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <FaCalendar className="w-4 h-4" />
            <span>{achievement.date}</span>
          </div>

          {/* View Details Button */}
          <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-red-500/30">
            View Details
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
}

export default function AchievementsPage() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  
  // Always call hooks in the same order, but handle the target conditionally
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  // useScroll with conditional target - use undefined when not mounted to avoid hydration errors
  const { scrollYProgress } = useScroll({
    target: mounted ? heroRef : undefined,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <GlassNavbar />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen">
      <PageScene />
      <GlassNavbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          {/* Animated Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isHeroInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold tracking-wider">
              OUR ACHIEVEMENTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Celebrating </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Milestones, awards and highlights from Innov8ors — built with passion and delivered with impact.
          </motion.p>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ y: 30, opacity: 0 }}
            animate={isStatsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
          >
            <AnimatedCounter end={15} suffix="+" label="Awards" />
            <AnimatedCounter end={50} suffix="+" label="Wins" />
            <AnimatedCounter end={100} suffix="+" label="Participants" />
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Wins</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
A showcase of our community&apos;s achievements and recognition in various competitions and events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trophy Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Trophy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Cabinet</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our collection of trophies and medals from competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaTrophy, color: "from-yellow-400 to-yellow-600", count: 8, label: "Trophies" },
              { icon: FaMedal, color: "from-gray-300 to-gray-500", count: 12, label: "Medals" },
              { icon: FaStar, color: "from-red-500 to-blue-500", count: 25, label: "Certificates" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500 group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className={`w-12 h-12 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                  </div>
                  <motion.div
                    className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                </div>
                <AnimatedCounter end={item.count} suffix="+" label={item.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-zinc-900/90 to-black/80 backdrop-blur-sm rounded-3xl border border-zinc-800/50 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Be Part of Our Next Achievement
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of innovators and help us create more milestones together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer">
                    Join Our Team
                  </button>
                </Link>
                <Link href="/events">
                  <button className="px-8 py-4 bg-zinc-800/80 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    View Events
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="/inno.png" 
                  alt="Innov8ors Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Innov8ors</p>
                <p className="text-white/40 text-sm">Makers of Innovation</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <Link href="/home" className="hover:text-white transition-colors">Home</Link>
              <Link href="/teams" className="hover:text-white transition-colors">Team</Link>
              <Link href="/events" className="hover:text-white transition-colors">Events</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            
            <p className="text-white/40 text-sm">
              © 2025 Innov8ors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


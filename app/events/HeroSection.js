'use client';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCalendarAlt } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/30 to-black"></div>
                
                {/* Animated orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                        x: [0, -30, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAACAgIBAQEAAAAAAAICAgAAAAAAAABfRu6UAAAABHRSTlMA/wD/AP8A/wAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xNkRpr/UAAABRSURBVDjLY2AYBfQM/xkY/jMw/KdHM4xhDAz/GRj+MzD8Z2D4z8Dwn4HhPwPDfwaG/wwM/xkY/jMw/Gdg+M/A8J+B4T8Dw38Ghv8MDP8ZGP4zMPxnYPjPwPCfgeE/A8N/xv8M/xn/M/xn+M/A8J+B4T8Dw38Ghv8AAEtyD4H1p2wTAAAAAElFTkSuQmCC')]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full mb-8"
                >
                    <FaCalendarAlt className="text-red-400" />
                    <span className="text-red-300 text-sm font-medium">Innovation Events Hub</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Community
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                        Events
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
                >
                    Discover cutting-edge workshops, hackathons, and networking opportunities. 
                    Join innovators, builders, and dreamers shaping the future of technology.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
                >
                    {[
                        { value: "50+", label: "Events" },
                        { value: "2000+", label: "Participants" },
                        { value: "100+", label: "Speakers" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        href="#upcoming-events"
                        className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore Events
                    </motion.a>
                    <motion.a
                        href="#gallery"
                        className="px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/50 hover:border-red-500/50 text-white font-bold rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Gallery
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <FaChevronDown className="text-lg" />
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent"></div>
            <div className="absolute top-40 right-10 w-px h-48 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
            <div className="absolute bottom-40 left-20 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
        </section>
    );
};

export default HeroSection;


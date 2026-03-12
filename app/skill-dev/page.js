'use client';
import React, { useEffect, useState } from 'react';
import GlassNavbar from '../components/GlassNavbar';
import { motion } from 'framer-motion';
import TextPressure from '../components/TextPressure';

export default function Events() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Set initial size
        updateWindowSize();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowSize);

        // Cleanup
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    // Don't render particles until component is mounted on client
    if (!mounted) {
        return (
            <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
                <GlassNavbar />
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="text-5xl md:text-7xl font-bold mb-4 text-white">
                            Loading...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
            <GlassNavbar />
            
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-60"
                            initial={{ 
                                x: Math.random() * windowSize.width, 
                                y: windowSize.height + 10,
                                opacity: 0 
                            }}
                            animate={{ 
                                y: -10, 
                                opacity: [0, 1, 1, 0],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{ 
                                duration: 8 + Math.random() * 4, 
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
                <div className="text-center max-w-4xl mx-auto">
                    
                    {/* Robot/Gear Icon */}
                    <motion.div 
                        className="mb-8"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="relative w-32 h-32 mx-auto">
                            <motion.div 
                                className="w-full h-full border-4 border-red-500 rounded-full flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                                </svg>
                            </motion.div>
                            
                            {/* Orbiting dots */}
                            <motion.div 
                                className="absolute top-0 left-1/2 w-2 h-2 bg-red-400 rounded-full -translate-x-1/2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: '50% 64px' }}
                            />
                            <motion.div 
                                className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: '50% -64px' }}
                            />
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            <TextPressure
                                text="WE ARE"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                            <TextPressure
                                text="COMING SOON"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="red"
                                strokeColor="#ff0000"
                                minFontSize={36}
                            />
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-4">
                            Something Amazing is Being Built
                        </p>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                             Innov8ors is committed to skill development by providing students with opportunities to learn practical skills, improve problem-solving abilities, and gain real-world experience through upcoming events, activities, and collaborative initiatives
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
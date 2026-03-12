'use client';

import React, { useEffect, useState } from 'react';
import GlassNavbar from '../components/GlassNavbar';
import HeroSection from './HeroSection';
import UpcomingEvents from './UpcomingEvents';
import EventTimeline from './EventTimeline';
import { motion } from 'framer-motion';

const galleryImages = [
    { id: 1, src: "/images/achievement1 (2).jpeg", title: "Tech Summit 2024" },
    { id: 2, src: "/images/achivement (3).jpeg", title: "Hackathon Winners" },
    { id: 3, src: "/images/achivement1 (1).jpeg", title: "Workshop Session" },
    { id: 4, src: "/images/cambridge.jpeg", title: "Cambridge Meetup" },
    { id: 5, src: "/images/cit.jpg", title: "CIT Tech Day" },
    { id: 6, src: "/images/hu.png", title: "HU Innovation Fair" },
];

function PastEventsGallery() {
    return (
        <section id="gallery" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">Past Events</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Memory Gallery</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Relive the moments from our previous events.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="aspect-square rounded-xl overflow-hidden"
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Events() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-black text-white">
                <GlassNavbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-2xl">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <GlassNavbar />
            <HeroSection />
            <UpcomingEvents />
            <EventTimeline />
            <PastEventsGallery />

            {/* CTA Section */}
            <section className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-blue-900/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Next Event</h2>
                    <p className="text-xl text-gray-400 mb-8">Be part of the innovation revolution. Register for upcoming events and connect with fellow innovators.</p>
                    <a href="#upcoming-events" className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:scale-105 transition-transform">
                        Explore Events
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto text-center text-gray-500">
                    <p>&copy; 2025 Innov8ors. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}


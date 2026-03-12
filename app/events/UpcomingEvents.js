'use client';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const upcomingEvents = [
    {
        id: 1,
        title: "AI & Machine Learning Bootcamp",
        subtitle: "Build Your First AI Model",
        description: "A comprehensive 3-day bootcamp covering neural networks, deep learning, and practical AI applications. Perfect for beginners and intermediate developers looking to dive into artificial intelligence.",
        imageUrl: "/images/workshop-2.mp4",
        imageType: "video",
        date: "April 5",
        time: "9:00 AM - 5:00 PM20, 202",
        location: "Innovation Lab, Building A",
        registerLink: "https://forms.gle/example",
        tags: ["AI", "ML", "Bootcamp"]
    },
    {
        id: 2,
        title: "Robotics Workshop",
        subtitle: "Build Your First Drone",
        description: "Join us for an exciting hands-on workshop where you'll learn to build and program your very first autonomous drone. Perfect for beginners and enthusiasts alike!",
        imageUrl: "/images/workshop-2.mp4",
        imageType: "video",
        date: "April 15, 2025",
        time: "6:00 PM - 9:00 PM",
        location: "Innovation Lab, Tech Campus",
        registerLink: "https://forms.gle/example",
        tags: ["Robotics", "Workshop", "Hands-on"]
    },
    {
        id: 3,
        title: "Hackathon 2025",
        subtitle: "Code for Change",
        description: "24-hour hackathon focused on solving real-world problems using technology. Form teams, build prototypes, and compete for amazing prizes.",
        imageUrl: "/images/achievement1 (2).jpeg",
        imageType: "image",
        date: "May 1-2, 2025",
        time: "24 Hours",
        location: "Main Auditorium",
        registerLink: "https://forms.gle/example",
        tags: ["Hackathon", "Competition", "24hrs"]
    },
    {
        id: 4,
        title: "Web3 & Blockchain Summit",
        subtitle: "Future of Decentralization",
        description: "Explore the world of blockchain, smart contracts, and decentralized applications. Learn from industry experts and build your first dApp.",
        imageUrl: "/images/achievement1 (2).jpeg",
        imageType: "image",
        date: "May 15, 2025",
        time: "10:00 AM - 6:00 PM",
        location: "Conference Hall B",
        registerLink: "https://forms.gle/example",
        tags: ["Web3", "Blockchain", "Summit"]
    }
];

const UpcomingEvents = () => {
    return (
        <section id="upcoming-events" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">
                        Upcoming Events
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Don't Miss Out
                    </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Join our upcoming events and be part of the innovation revolution. 
                        From hands-on workshops to competitive hackathons, there&apos;s something for everyone.
                    </p>
                </motion.div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <EventCard {...event} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#timeline"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/50 hover:border-red-500/50 text-white font-medium rounded-xl transition-all duration-300"
                    >
                        View Full Timeline
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default UpcomingEvents;


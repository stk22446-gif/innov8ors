'use client';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const timelineEvents = [
    {
        id: 1,
        month: "January",
        events: [
            { title: "New Year Tech Kickoff", date: "Jan 15, 2025", type: "Workshop" },
            { title: "Intro to Python Programming", date: "Jan 22, 2025", type: "Workshop" }
        ]
    },
    {
        id: 2,
        month: "February",
        events: [
            { title: "Flutter App Development", date: "Feb 5, 2025", type: "Bootcamp" },
            { title: "Cloud Computing Basics", date: "Feb 18, 2025", type: "Workshop" }
        ]
    },
    {
        id: 3,
        month: "March",
        events: [
            { title: "Spring Hackathon", date: "Mar 10-12, 2025", type: "Hackathon" },
            { title: "Cybersecurity Awareness", date: "Mar 25, 2025", type: "Seminar" }
        ]
    },
    {
        id: 4,
        month: "April",
        events: [
            { title: "AI & ML Bootcamp", date: "Apr 5, 2025", type: "Bootcamp" },
            { title: "Robotics Workshop", date: "Apr 15, 2025", type: "Workshop" }
        ]
    },
    {
        id: 5,
        month: "May",
        events: [
            { title: "Hackathon 2025", date: "May 1-2, 2025", type: "Hackathon" },
            { title: "Web3 & Blockchain Summit", date: "May 15, 2025", type: "Summit" }
        ]
    }
];

const EventTimeline = () => {
    return (
        <section id="timeline" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">
                        Event Timeline
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Journey
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A year filled with innovation, learning, and groundbreaking events. 
                        Here's what's coming up in 2025.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timelineEvents.map((monthData, monthIndex) => (
                            <motion.div
                                key={monthData.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: monthIndex * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${
                                    monthIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Month Label */}
                                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-black z-10 ${
                                    monthIndex === 3 ? 'ring-4 ring-red-500/50' : ''
                                }`}></div>
                                
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                                    monthIndex % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                    <div className="bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800/50 hover:border-red-500/50 transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                                            {monthData.month}
                                        </h3>
                                        <div className="space-y-3">
                                            {monthData.events.map((event, eventIndex) => (
                                                <div
                                                    key={eventIndex}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-red-500/30 transition-all duration-300"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center justify-between mb-1">
                                                            <h4 className="text-white font-semibold">{event.title}</h4>
                                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                                event.type === 'Hackathon' ? 'bg-purple-600/20 text-purple-400' :
                                                                event.type === 'Bootcamp' ? 'bg-blue-600/20 text-blue-400' :
                                                                event.type === 'Summit' ? 'bg-green-600/20 text-green-400' :
                                                                'bg-red-600/20 text-red-400'
                                                            }`}>
                                                                {event.type}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                                            <span className="flex items-center gap-1">
                                                                <FaCalendar className="text-red-500" />
                                                                {event.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventTimeline;


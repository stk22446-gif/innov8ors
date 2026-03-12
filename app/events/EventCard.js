import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendar, FaMapMarkerAlt, FaRegClock, FaTicketAlt, FaExternalLinkAlt } from 'react-icons/fa';

const EventCard = ({ 
    title = "Robotics Workshop",
    subtitle = "Build Your First Drone",
    description = "Join us for an exciting hands-on workshop where you'll learn to build and program your very first autonomous drone. Perfect for beginners and enthusiasts alike!",
    imageUrl = "/images/workshop-2.mp4",
    imageType = "video",
    date = "April 15, 2025",
    time = "6:00 PM - 9:00 PM",
    location = "Innovation Lab, Tech Campus",
    registerLink = "#",
    tags = ["Robotics", "Workshop", "Hands-on"]
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
            className="group relative mb-12"
        >
            <div className="relative bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-red-500/70 transition-all duration-500 shadow-2xl shadow-red-500/10 hover:shadow-red-500/30">
                {/* Animated top bar */}
                <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="p-8 md:p-10">
                    {/* Media */}
                    <div className="relative mb-8 overflow-hidden rounded-2xl border-2 border-zinc-800/50 group-hover:border-red-500/50 transition-all duration-500">
                        <motion.div
                            className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            {imageType === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    src={imageUrl}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={imageUrl}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            {/* Tags */}
                            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                {tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-red-600/80 backdrop-blur-sm text-xs font-bold rounded-full uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-red-300 transition-colors duration-300 mb-2">
                                {title}
                            </h2>
                            <p className="text-red-400 font-medium text-lg md:text-xl uppercase tracking-widest">
                                {subtitle}
                            </p>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Meta Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-zinc-800/50">
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaCalendar className="text-red-500" />
                                <span className="font-medium">{date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaRegClock className="text-red-500" />
                                <span className="font-medium">{time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <FaMapMarkerAlt className="text-red-500" />
                                <span className="font-medium">{location}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.a
                                href={registerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group/btn shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaTicketAlt />
                                <span>Register Now</span>
                                <FaExternalLinkAlt className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                            <Link
                                href="#"
                                className="flex-1 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/50 hover:border-red-500/50 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
                            >
                                <span>Learn More</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </motion.div>
    );
};

export default EventCard;


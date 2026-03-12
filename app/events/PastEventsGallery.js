'use client';
import { motion } from 'framer-motion';

const galleryImages = [
    { id: 1, src: "/images/achievement1 (2).jpeg", title: "Tech Summit 2024" },
    { id: 2, src: "/images/achivement (3).jpeg", title: "Hackathon Winners" },
    { id: 3, src: "/images/achivement1 (1).jpeg", title: "Workshop Session" },
    { id: 4, src: "/images/cambridge.jpeg", title: "Cambridge Meetup" },
    { id: 5, src: "/images/cit.jpg", title: "CIT Tech Day" },
    { id: 6, src: "/images/hu.png", title: "HU Innovation Fair" },
];

export default function PastEventsGallery() {
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
                            initial={{opacity:0,y:20}} 
                            whileInView={{opacity:1,y:0}} 
                            transition={{delay:i*0.1, duration:0.5}} 
                            viewport={{once:true}}
                            className="aspect-square rounded-xl overflow-hidden"
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover"/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

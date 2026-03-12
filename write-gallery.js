import { writeFileSync } from 'fs';

const content = `'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaCalendar } from 'react-icons/fa';

const galleryImages = [
    { id: 1, src: '/images/achievement1 (2).jpeg', title: 'Tech Summit 2024', date: 'December 2024', category: 'Summit' },
    { id: 2, src: '/images/achivement (3).jpeg', title: 'Hackathon Winners', date: 'November 2024', category: 'Hackathon' },
    { id: 3, src: '/images/achivement1 (1).jpeg', title: 'Workshop Session', date: 'October 2024', category: 'Workshop' },
    { id: 4, src: '/images/cambridge.jpeg', title: 'Cambridge Meetup', date: 'September 2024', category: 'Meetup' },
    { id: 5, src: '/images/cit.jpg', title: 'CIT Tech Day', date: 'August 2024', category: 'Event' },
    { id: 6, src: '/images/hu.png', title: 'HU Innovation Fair', date: 'July 2024', category: 'Fair' },
    { id: 7, src: '/images/rit.png', title: 'RIT Showcase', date: 'June 2024', category: 'Showcase' },
    { id: 8, src: '/images/achievement1 (2).jpeg', title: 'AI Bootcamp', date: 'May 2024', category: 'Bootcamp' },
];

const PastEventsGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const showPrev = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const showNext = () => {
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id='gallery' className='relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
            <div className='absolute inset-0 bg-black'>
                <div className='absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black'></div>

            <div className='relative z-10 max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <span className='inline-block px-4 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4'>
                        Past Events
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Memory Gallery
                    </h2>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Relive the moments from our previous events. Click on any image to view larger.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className='group'
                        >
                            <div 
                                className='relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer'
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                    <span className='text-red-400 text-xs font-bold uppercase tracking-widest mb-1'>
                                        {image.category}
                                    </span>
                                    <h3 className='text-white text-xl font-bold'>{image.title}</h3>
                                    <div className='flex items-center gap-2 text-gray-400 text-sm mt-1'>
                                        <FaCalendar />
                                        <span>{image.date}</span>
                                    </div>
                                <div className='absolute inset-0 border-2 border-red-500/0 group-hover:border-red-500/50 rounded-2xl transition-all duration-300'></div>
                        </motion.div>
                    ))}
                </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl'
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className='absolute top-6 right-6 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10'
                        >
                            <FaTimes className='text-xl' />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); showPrev(); }}
                            className='absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10'
                        >
                            <FaChevronLeft className='text-xl' />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); showNext(); }}
                            className='absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800/80 hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10'
                        >
                            <FaChevronRight className='text-xl' />
                        </button>

                        <motion.div
                            key={currentImageIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='relative max-w-5xl max-h-[80vh] mx-4'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[currentImageIndex].src}
                                alt={galleryImages[currentImageIndex].title}
                                className='max-w-full max-h-[80vh] object-contain rounded-2xl'
                            />
                            <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl'>
                                <span className='text-red-400 text-xs font-bold uppercase tracking-widest'>
                                    {galleryImages[currentImageIndex].category}
                                </span>
                                <h3 className='text-white text-2xl font-bold'>
                                    {galleryImages[currentImageIndex].title}
                                </h3>
                                <div className='flex items-center gap-2 text-gray-400 mt-1'>
                                    <FaCalendar />
                                    <span>{galleryImages[currentImageIndex].date}</span>
                                </div>
                        </motion.div>

                        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400'>
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PastEventsGallery;
`;

writeFileSync('app/events/PastEventsGallery.js', content);
console.log('File written successfully');

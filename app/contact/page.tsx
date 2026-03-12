'use client';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import GlassNavbar from "../components/GlassNavbar";
import dynamic from 'next/dynamic';

// Dynamic import for 3D Scene (client-side only)
const PageScene = dynamic(() => import('../components/PageScene'), { ssr: false });

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b7026e20-9e0b-4693-8df8-b4a1fb2d9aa5', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen"
    >
        <PageScene />
        <GlassNavbar />
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-500 text-sm font-semibold tracking-wider">
              GET IN TOUCH
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Us
            </span>
          </h1>
<p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Get in touch with our team and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-zinc-800/90 to-zinc-700/80 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              {/* Response Time Notice */}
              <div className="text-center py-4">
                <span className="inline-block px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  Get a response from us within 24 hours
                </span>
              </div>
              {/* Top Accent Bar */}
              <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-zinc-600 disabled:to-zinc-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed cursor-target"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-600/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-600/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-8 hover:border-red-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group cursor-pointer">
                    <MdOutlineMailOutline className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300" />
                  </div>
                  <div>
<p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">innov8ors05@gmail.com</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group cursor-pointer">
                    <FaWhatsapp className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:text-green-500 transition-all duration-300" />
                  </div>
                  <div>
<p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white font-medium">+91 9362893100</p>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Interactive Map */}
  
            <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-all duration-500">
              <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 group cursor-pointer">
                  <FaLocationDot className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:text-orange-500 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-white">Find Us</h3>
                </div>
                <div>
<p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white font-medium">
                      Umesh Educational Trust Cambridge IT,<br />
                      Basavanapura road, Krishnarajapuram, Bangalore,<br />
                      Bangalore North, Karnataka, India, 560036
                    </p>
                  </div>
                  <br />
                
                {/* Map Container */}
                       <br />
                            
                <div className="relative h-64 bg-zinc-700 rounded-lg overflow-hidden">
                  {/* Replace this iframe with your actual map embed code */}
                  <iframe
                    title="Innov8ors Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4413.777265667302!2d77.70169547561065!3d13.012510987306658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11aeab858e35%3A0xf8f534df379561ed!2sCambridge%20Institute%20of%20Technology%20-%20CIT!5e1!3m2!1sen!2sin!4v1766165147444!5m2!1sen!2sin"
                    
                    width="100%"
                    height="100%"
                    className="map-iframe rounded-lg transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  
                  {/* Custom Map Overlay (for styling) */}
                  <div className="absolute inset-0 bg-red-500/10 pointer-events-none rounded-lg"></div>
                </div>
                
                <p className="text-black text-sm mt-4">
                  Click on the map to open in Google Maps for directions
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <p className="text-black">Stay connected and get the latest updates</p>
            
            <div className="flex gap-4">
              {/* LinkedIn */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-target"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/teaminnov8ors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-800/80 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 cursor-target"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Community Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-8 hover:border-red-500/50 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Join Our Community</h3>
            <p className="text-black text-center mb-8 max-w-2xl mx-auto">
              Connect with fellow innovators, share your projects, and stay updated with the latest events and opportunities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Discord */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-zinc-800/50 hover:bg-indigo-600/20 rounded-xl border border-zinc-700/50 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-700/50 group-hover:bg-indigo-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <svg className="w-6 h-6 text-zinc-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">Discord</span>
                <span className="text-zinc-500 text-xs">Join Discussion</span>
              </Link>

              {/* GitHub */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-zinc-800/50 hover:bg-gray-800/50 rounded-xl border border-zinc-700/50 hover:border-gray-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-700/50 group-hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <svg className="w-6 h-6 text-zinc-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-white font-medium text-sm">GitHub</span>
                <span className="text-zinc-500 text-xs">View Projects</span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-zinc-800/50 hover:bg-blue-600/20 rounded-xl border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-700/50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaLinkedin className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </div>
                <span className="text-white font-medium text-sm">LinkedIn</span>
                <span className="text-zinc-500 text-xs">Network</span>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/teaminnov8ors"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 bg-zinc-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 rounded-xl border border-zinc-700/50 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-700/50 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaInstagram className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </div>
                <span className="text-white font-medium text-sm">Instagram</span>
                <span className="text-zinc-500 text-xs">Follow Updates</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-b from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm rounded-3xl border border-zinc-800/50 overflow-hidden">
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
                Be Part of Something Amazing
              </h2>
              <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
                Join our community of innovators, makers, and dreamers. Together, we can build the future through technology and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-target">
                  Join Our Community
                </button>
                <button className="px-8 py-4 bg-zinc-800/80 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

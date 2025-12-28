'use client';
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    instagram?: string;
    mail?: string;
  };
}

interface Intern {
  id: string;
  name: string;
  designation: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
    
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Shubham Gupta",
    role: "Director",
    image: "/team/shu.jpeg",
    bio: "Shubham Gupta is the Director of Innov8ors and a passionate student leader driven by innovation, technology, and community building. He leads the vision and strategic direction of Innov8ors, focusing on creating opportunities for students to learn beyond academics through real-world exposure, collaboration, and practical implementation",
    skills: ["Strategic Builder","Vision Founder","Impact Builde"],
    social: {
      linkedin: "https://www.linkedin.com/in/shubham-gupta-b3b675381/",
      instagram: "https://www.instagram.com/theyycallmeshubham/",
      mail: "innov8ors.com" 
    }
  },
  /*{
    id: "member-2",
    name: "Yuvraj Yadav",
    role: "Co-director",
    image: "/team/yuvraj.jpeg",
    bio: "Yuvraj Yadav serves as the Co-Director of Innov8ors and leads the community’s technical direction. As a technical expert, he plays a key role in guiding projects, mentoring members, and ensuring that ideas are transformed into practical and scalable solutions.",
    skills: ["Tech Visionary","Tech Innovator","Tech Co-Founder"],
    social: {
      linkedin: "https://www.linkedin.com/in/yuvraj-yadav-8a9725364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/yuvraj.yadav31/",
      mail: "mitlo:roshanyy2017@gmail"
    }
  },*/
  {
    id: "member-3",
    name: "Soibam Erica Chanu",
    role: "Co-Ordinator",
    image: "/team/erica.jpeg",
    bio: "Soibam Erica Chanu serves as the Coordinator of Innov8ors and plays a vital role in managing day-to-day activities and ensuring smooth coordination within the community. She acts as a bridge between the leadership team and members, supporting event planning, communication, and execution.",
    skills: ["Community Lead","Growth Coordinator","Event Planner"],
    social: {
      linkedin: "https://www.linkedin.com/in/erica-soibam-6b0595382/",
      instagram: "https://www.instagram.com/lun_essence__/",
      mail: ""
    }
  },
  {
    id: "member-4",
    name: "Nidhi Verma",
    role: "Community Lead ",
    image: "/team/nidhi.jpg",
    bio: " Nidhi Verma is the Community Lead at innov8ors, dedicated to connecting members and driving engagement. With expertise in program development and moderation,they've successfully launched initiatives that increased active participation by events. ",
    skills: ["Community Lead","Team Builder","Event Coodinator"],
    social: {
      linkedin: "https://www.linkedin.com/in/nidhi-verma-725a79387/",
      instagram: "https://www.instagram.com/nidhi.verma_01/",
      mail: ""
    }
  }
];

const communityImages = [
    { id: "img-1", src: "/team/Moulya.jpeg", name: "Moulya", role: "Community Member" },
    { id: "img-2", src: "/team/shighdha.jpg", name: "Shighdha", role: "Designer" },
    { id: "img-3", src: "/team/akash.jpg", name: "Akash", role: "Developer" },
  ];

const interns: Intern[] = [
  
  {
    id: "intern-1",
    name: "Cambridge Institute of Technology",
    designation: "Click to explore",
    image: "/images/cambridge.jpeg",
    social: {
    }
  },
   {
    id: "intern-2",
    name: "Roorkee Institute of Technology",
    designation: "Click to explore",
    image: "/images/rit.png",
    social: {
    }
  },
  {
    id: "intern-3",
    name: "Channabasaveshwara Institute of Technology",
    designation: "Click to explore",
    image: "/images/cit.jpg",
    social: {
    }
  },
  {
    id: "intern-4",
    name: "Haridwar University",
    designation: "Click to explore",
    image: "/images/hu.png",
    social: {
    }
  },
  
  
];

export default function TeamPage() {
    const [showMoreCards, setShowMoreCards] = useState(false);
  const teamSectionRef = useRef(null);
  const internSectionRef = useRef(null);
  const isTeamInView = useInView(teamSectionRef, { once: true, margin: "-100px" });
  const isInternInView = useInView(internSectionRef, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full bg-transparent min-h-screen">
      {/* Hero Section */}
      <Navbar />
      {/* <section className="relative w-full bg-black pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Dream Team
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Meet the talented individuals driving innovation and excellence in 3D printing technology
          </motion.p>
        </div>
      </section> */}

      {/* Core Team Section */}
      <section
        ref={teamSectionRef}
        className="relative w-full bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isTeamInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Experts
              </span>
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
              A passionate team of innovators dedicated to pushing the boundaries of technology, creativity, and purposeful design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-b from-zinc-900/90 to-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 transition-all duration-500">
                  <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  <div className="p-8">
                    <div className="relative mb-6">
                      <div className="relative w-28 h-28 mx-auto">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 blur-md"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/70 transition-all duration-500 shadow-lg shadow-red-500/20">
                          <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                          <Image src={member.image} alt={member.name} width={112} height={112} className="object-cover w-full h-full" />
                          </div>
                        </div>
                        
                        <div className="absolute bottom-1 right-1 w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                          <div className="w-5 h-5 bg-emerald-500 rounded-full border-2 border-black">
                            <motion.div
                              className="w-full h-full bg-emerald-400 rounded-full"
                              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-red-500 font-medium text-sm uppercase tracking-widest">
                        {member.role}
                      </p>
                      <p className="text-white text-sm leading-relaxed min-h-[3rem]">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-zinc-800/80 text-white text-xs rounded-lg border border-zinc-700/50 hover:border-red-500/50 hover:text-red-400 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>

                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn profile of ${member.name}`}
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-blue-600 text-white hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 cursor-target"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.instagram && (
                        <Link
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Instagram profile of ${member.name}`}
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.mail && (
                        <a
                          href={`https://mail.google.com/mail/?view=cm&to=${member.social.mail}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Email ${member.name}`}
                          className="w-10 h-10 bg-zinc-800/80 hover:bg-red-600 text-white hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-red-500/50 cursor-target hover:shadow-lg hover:shadow-red-500/20"
                        >
                            <IoMailOutline className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section
        ref={internSectionRef}
        className="relative w-full bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <motion.div
          className="absolute top-40 left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInternInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInternInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
             
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our connected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                society
              </span>
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
              Talented interns bringing fresh perspectives and energy to our team
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
            {interns.map((intern, index) => (
              <motion.div
                key={intern.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInternInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group relative h-full"
              >
                <button onClick={() => setShowMoreCards(!showMoreCards)} className="w-full">
                <div className="relative bg-gradient-to-b from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/40 transition-all duration-500 p-6 min-h-[280px]">
                  <div className="relative mb-4">
                    <div className="relative w-24 h-24 mx-auto">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 blur-sm"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-red-500/50 transition-all duration-500">
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                        <Image src={intern.image} alt={intern.name} width={96} height={96} className="object-contain w-full h-full p-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {intern.name}
                    </h3>
                    <p className="text-red-500/90 font-medium text-xs tracking-wide">
                      {intern.designation}
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-4"></div>

                    <div className="flex justify-center gap-2">
                    {intern.social.linkedin && (
                      <Link
                        href={intern.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${intern.name}`}
                        className="w-8 h-8 bg-zinc-800/80 hover:bg-blue-600 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-blue-500/50 cursor-target"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </Link>
                    )}
                    {intern.social.instagram && (
                      <Link
                        href={intern.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram profile of ${intern.name}`}
                        className="w-8 h-8 bg-zinc-800/80 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-zinc-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-zinc-700/50 hover:border-pink-500/50 cursor-target"
                      >
                        <FaInstagram className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                </button>
              </motion.div>
            ))}
          </div>
          {showMoreCards && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {communityImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 h-64 bg-zinc-900"
                >
                  <Image
                    src={image.src}
                    alt={image.name || `Community image ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-end justify-center p-4 pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
                      <div className="bg-black/60 text-white px-3 py-2 rounded-md text-center">
                        <p className="font-semibold text-sm">{image.name}</p>
                        <p className="text-xs text-red-400 mt-1">{image.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
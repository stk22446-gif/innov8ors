'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '../components/SmoothScroll';
import GlassNavbar from '../components/GlassNavbar';
import GlassCard, { GlassButton, FloatingCard } from '../components/GlassCard';
import ScrollSection, { SectionTitle, Reveal, StaggeredGrid } from '../components/ScrollSection';
import { FiArrowRight, FiCode, FiZap, FiAward, FiUsers, FiCalendar, FiMail, FiHeart, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Dynamic import for 3D components (client-side only)
const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false });

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Shubham Gupta",
    role: "Director",
    image: "/team/shu.jpeg",
    bio: "Leading the vision and strategic direction of Innov8ors."
  },
  {
    id: 2,
    name: "Yuvraj Yadav",
    role: "Co-Director",
    image: "/team/yuvraj.jpeg",
    bio: "Leading the community's technical direction and innovation."
  },
  {
    id: 3,
    name: "Soibam Erica Chanu",
    role: "Coordinator",
    image: "/team/erica.jpeg",
    bio: "Managing day-to-day activities and coordination."
  }
];

// Features data
const features = [
  {
    icon: FiCode,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions and creative thinking."
  },
  {
    icon: FiZap,
    title: "Speed",
    description: "Rapid prototyping and fast iteration to bring ideas to life quickly."
  },
  {
    icon: FiAward,
    title: "Excellence",
    description: "Committed to delivering high-quality results in everything we do."
  },
  {
    icon: FiUsers,
    title: "Community",
    description: "Building a strong network of passionate innovators and creators."
  }
];

// Stats data
const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Team Members" },
  { value: "10+", label: "Events Hosted" },
  { value: "100+", label: "Community Members" }
];

export default function HomePage() {
  return (
    <SmoothScroll>
      <div className="relative bg-black min-h-screen">
        {/* Navigation */}
        <GlassNavbar />
        
        {/* Hero Section with 3D */}
        <Hero3D />

        {/* Stats Section */}
        <ScrollSection className="py-16">
          <StaggeredGrid columns={4}>
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <p className="rainbow-text text-4xl sm:text-5xl font-bold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-white/60 text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </StaggeredGrid>
        </ScrollSection>

        {/* Features Section */}
        <ScrollSection id="features">
          <SectionTitle 
            title="Why Choose Innov8ors" 
            subtitle="Our Strengths"
          />
          
          <StaggeredGrid columns={2} gap={8}>
            {features.map((feature, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-blue-500/20 border border-white/10">
                      <feature.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </StaggeredGrid>
        </ScrollSection>

        {/* Team Preview Section */}
        <ScrollSection id="team">
          <SectionTitle 
            title="Meet The Team" 
            subtitle="Leadership"
          />
          
          <StaggeredGrid columns={3}>
            {teamMembers.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.1}>
                <GlassCard className="p-6 text-center group cursor-pointer">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-red-400 text-sm mb-2">{member.role}</p>
                  <p className="text-white/60 text-sm">
                    {member.bio}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button aria-label="Share" className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors">
                      <FiShare2 className="w-4 h-4 text-white/70" />
                    </button>
                    <button aria-label="Like" className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 transition-colors">
                      <FiHeart className="w-4 h-4 text-white/70" />
                    </button>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </StaggeredGrid>

          <div className="text-center mt-12">
            <Link href="/teams">
              <GlassButton icon={<FiUsers className="w-4 h-4" />}>
                View Full Team
              </GlassButton>
            </Link>
          </div>
        </ScrollSection>

        {/* Upcoming Events Preview */}
        <ScrollSection id="events">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="What's New"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <FloatingCard floatDuration={8}>
                <GlassCard className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                      <FiCalendar className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <span className="text-xs text-red-400 uppercase tracking-wider">Coming Soon</span>
                      <h3 className="text-xl font-semibold text-white">Tech Innovation Summit 2025</h3>
                    </div>
                  </div>
                  <p className="text-white/60 mb-4">
                    Join us for an exciting event bringing together innovators, creators, and tech enthusiasts.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm">Stay tuned for updates</span>
                    <Link href="/events">
                      <GlassButton variant="outline" icon={<FiArrowRight className="w-4 h-4" />}>
                        Learn More
                      </GlassButton>
                    </Link>
                  </div>
                </GlassCard>
              </FloatingCard>
            </Reveal>

            <Reveal delay={0.2}>
              <FloatingCard floatDuration={8} className="delay-100">
                <GlassCard className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                      <FiCode className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs text-blue-400 uppercase tracking-wider">Workshop</span>
                      <h3 className="text-xl font-semibold text-white">Hands-on Tech Sessions</h3>
                    </div>
                  </div>
                  <p className="text-white/60 mb-4">
                    Learn from industry experts and gain practical skills in latest technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm">Multiple sessions planned</span>
                    <Link href="/events">
                      <GlassButton variant="outline" icon={<FiArrowRight className="w-4 h-4" />}>
                        Learn More
                      </GlassButton>
                    </Link>
                  </div>
                </GlassCard>
              </FloatingCard>
            </Reveal>
          </div>
        </ScrollSection>

        {/* CTA Section */}
        <ScrollSection>
                <GlassCard className="p-12 text-center relative overflow-hidden glow-rainbow">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[conic-gradient(from 0deg at 50% 50%, var(--rainbow-gradient))]" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Reveal>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Ready to <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Innovate</span>?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                  Join our community of innovators and be part of something extraordinary. 
                  Let&apos;s shape the future together.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <GlassButton icon={<FiMail className="w-4 h-4" />}>
                      Get in Touch
                    </GlassButton>
                  </Link>
                  <Link href="/teams">
                    <GlassButton variant="outline" icon={<FiUsers className="w-4 h-4" />}>
                      Join Our Team
                    </GlassButton>
                  </Link>
                </div>
              </Reveal>
            </div>
          </GlassCard>
        </ScrollSection>

        {/* Footer */}
        <footer className="relative py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image 
                    src="/inno.png" 
                    alt="Innov8ors Logo" 
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">Innov8ors</p>
                  <p className="text-white/40 text-sm">Makers of Innovation</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-white/60 text-sm">
                <Link href="/home" className="hover:text-white transition-colors">Home</Link>
                <Link href="/teams" className="hover:text-white transition-colors">Team</Link>
                <Link href="/events" className="hover:text-white transition-colors">Events</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
              
              <p className="text-white/40 text-sm">
                © 2025 Innov8ors. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}


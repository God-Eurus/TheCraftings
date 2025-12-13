import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ArrowRight, ArrowUpRight, LayoutTemplate, PenTool, Home, Sofa, LampFloor, Utensils, ClipboardCheck } from 'lucide-react'; // Added Sofa

// --- Color Palette ---
// Main Background: #1c1812 (Very Dark Brown/Black)
// Contrast Background: #14110d (Darker Black - for "Selected Works" & Hovers)
// Text/Accent: #CBD2A4 (Sage Beige)
// Highlight Accent: #829056 (Muted Olive - for "Craftsmenship" & Buttons)

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 1.2, ease: "circOut" }
  }
};

const AtelierPage = () => {
  return (
    // Updated BG: #1c1812, Selection: #829056
    <div className="bg-[#1c1812] min-h-screen font-sans text-[#CBD2A4] overflow-x-hidden selection:bg-[#829056] selection:text-white">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Static Gradient Overlay matching #1c1812 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1812] via-black/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pt-20 pb-36 md:pb-48 max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 pl-1">
              <div className="w-12 h-[1px] bg-[#CBD2A4]/60"></div>
              <span className="text-[#CBD2A4] font-body text-xs uppercase tracking-[0.2em] drop-shadow-md">Interior Design Studio</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-white drop-shadow-2xl">
              Your Vision <span className="italic text-[#CBD2A4] font-light pr-2"></span> <br />
              Our 
              {/* Highlight: #829056 */}
              <span className="font-bold ml-3 text-[#829056]">
                Craftsmenship
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-body text-[#CBD2A4] text-sm md:text-base font-medium leading-relaxed max-w-xl pl-1 border-l-2 border-[#CBD2A4]/50 pl-6 ml-1 drop-shadow-lg text-shadow-sm">
              Where functionality meets elegance. We create bespoke living spaces that inspire, endure, and reflect your unique narrative.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 pt-4 pl-1">
              {/* Button BG: #829056 */}
              <button 
                className="group relative bg-[#829056] text-white px-8 py-3 rounded-full font-body text-xs md:text-sm font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body text-xs md:text-sm font-medium tracking-wide text-white border border-[#CBD2A4]/50 hover:bg-[#CBD2A4]/10 hover:border-[#CBD2A4] transition-all hover:backdrop-blur-md drop-shadow-md bg-black/20">
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar - Matches #1c1812 */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 border-t border-[#CBD2A4]/10 bg-[#1c1812]/95 backdrop-blur-sm z-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatItem number="25+" label="Projects Completed" />
              <StatItem number="6+" label="Years Experience" />
              <StatItem number="98%" label="Client Satisfaction" />
              
            </div>
          </div>
        </motion.div>
      </section>

      <ServicesSection />
      <SelectedWorks />
      <ProcessSection />
      
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const StatItem = ({ number, label }) => (
  <div className="group cursor-default">
    <h3 className="font-heading text-3xl md:text-5xl text-white mb-1 transition-colors duration-300">
      <span className="group-hover:text-[#829056] transition-colors">{number}</span>
    </h3>
    <p className="font-body text-[10px] md:text-xs uppercase tracking-widest text-[#CBD2A4]/60 group-hover:text-[#CBD2A4] transition-colors">
      {label}
    </p>
  </div>
);

// --- UPDATED SERVICES SECTION ---
const ServicesSection = () => {
  // State to track which card is currently expanded
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleService = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  const services = [
  {
    title: "Interior Design / Styling",
    desc: "Crafting refined, harmonious interiors that blend aesthetics with functionality, bringing your personal style to life with thoughtful detailing.",
    details: "We blend thoughtful planning, functional layouts, curated materials, and refined aesthetics to create interiors that feel timeless and lived in. Our styling approach adds the final layer of warmth through décor, textures, colors, and accents bringing harmony, character, and soul to every space we craft. With meticulous attention to detail, we ensure every corner tells a story and every home feels uniquely yours.",
    icon: <LampFloor className="w-6 h-6" /> // BEST FIT for interior styling
  },
  {
    title: "Modular Kitchen",
    desc: "Curating smart and space-saving kitchen that fit together perfectly, offering style, organization, and easy maintenance. Everything tailored for your needs.",
    details: "At The Craftings, a modular kitchen is a beautifully planned system of customizable units designed for smart storage, easy accessibility, and seamless daily use crafted to reflect your cooking style and routine.",
    icon: <Utensils className="w-6 h-6" /> // PERFECT for kitchens
  },
  {
    title: "Renovation Management",
    desc: "Comprehensive oversight of your renovation project, ensuring flawless execution, quality craftsmanship, and timely delivery.",
    details: "We serve as your on-site partner, coordinating with contractors, engineers, and suppliers. Timelines, budgets, and design integrity are rigorously maintained, ensuring every detail aligns with your vision.",
    icon: <ClipboardCheck className="w-6 h-6" /> // Represents management + supervision
  }
];

  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-[#1c1812] relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-16 border-b border-[#CBD2A4]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <motion.div variants={fadeInUp}>
          <span className="text-[#CBD2A4] font-body text-xs uppercase tracking-[0.2em] mb-2 block">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl text-white">Design Disciplines</h2>
        </motion.div>
        <motion.p variants={fadeInUp} className="font-body text-[#CBD2A4]/70 max-w-md text-sm leading-relaxed">
          We blend technical precision with artistic intuition to deliver environments that stand the test of time.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8 items-start" // items-start ensures cards don't stretch weirdly when one opens
      >
        {services.map((service, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            className="group p-8 border border-[#CBD2A4]/10 bg-[#CBD2A4]/[0.02] hover:bg-[#14110d] transition-colors duration-500 relative overflow-hidden flex flex-col"
          >
            {/* Accent Line */}
            <div className={`absolute top-0 left-0 w-1 bg-[#829056] transition-all duration-500 ease-out ${activeIdx === idx ? 'h-full' : 'h-0 group-hover:h-full'}`} />
            
            <div className="mb-6 text-[#CBD2A4]/80 transition-colors relative z-10">
               <span className="group-hover:text-[#829056] transition-colors">{service.icon}</span>
            </div>
            
            <h3 className="font-heading text-2xl mb-4 text-[#CBD2A4] group-hover:text-white transition-colors relative z-10">
              {service.title}
            </h3>
            
            <p className="font-body text-[#CBD2A4]/60 text-sm leading-relaxed mb-6 group-hover:text-[#CBD2A4]/80 relative z-10">
              {service.desc}
            </p>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence>
              {activeIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden relative z-10"
                >
                  <p className="font-body text-[#CBD2A4] text-sm leading-relaxed mb-6 border-t border-[#CBD2A4]/10 pt-4">
                    {service.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BUTTON */}
            <button 
              onClick={() => toggleService(idx)}
              className="mt-auto relative z-10 inline-flex items-center text-xs uppercase tracking-widest text-[#CBD2A4]/50 transition-colors hover:text-[#829056] text-left outline-none"
            >
               <span className={`flex items-center transition-colors ${activeIdx === idx ? 'text-[#829056]' : 'group-hover:text-[#829056]'}`}>
                 {activeIdx === idx ? 'Close' : 'Read More'} 
                 <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${activeIdx === idx ? 'rotate-90' : ''}`} />
               </span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const SelectedWorks = () => {
  return (
    // Contrast BG: #14110d
    <section className="py-24 bg-[#14110d] relative z-10">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-white">Selected Works</h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-body uppercase tracking-widest text-[#CBD2A4]/70 hover:text-white transition-colors mt-4 md:mt-0">
            <span className="hover:text-[#829056] flex items-center gap-2 transition-colors">
              View All Projects <ArrowRight size={16} />
            </span>
          </button>
        </motion.div>

        {/* Project 1 */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 mb-24 items-center group"
        >
          {/* CHANGED: Added max-w-md and mx-auto to constrain width and center */}
          <motion.div variants={imageReveal} className="overflow-hidden relative max-w-md mx-auto w-full">
            {/* LOCAL VIDEO 1 */}
            <video
              autoPlay
              loop
              muted
              playsInline
              // CHANGED: aspect-[4/3] to aspect-[2/3] for a taller height
              className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
            >
              {/* Ensure "project-1.mp4" exists in your public/videos folder */}
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </motion.div>

          <motion.div variants={fadeInUp} className="md:pl-8">
            <span className="text-xs font-body tracking-widest uppercase text-[#829056]">Commercial</span>
            <h3 className="font-heading text-white text-4xl mt-3 mb-6">The 17:17 Store</h3>
            <p className="font-body text-[#CBD2A4]/70 leading-relaxed mb-8 max-w-md">
              A study in contrast and texture. This project involved transforming a downtown loft into a sanctuary of dark stone, warm wood, and filtered light.
            </p>
            <button className="flex items-center gap-2 text-sm border-b border-[#CBD2A4]/20 text-[#CBD2A4] pb-1 transition-all hover:border-[#829056]">
              <span className="hover:text-[#829056] flex items-center gap-2 transition-colors">
                Explore Project <ArrowUpRight size={16} />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={staggerContainer}
           className="grid md:grid-cols-2 gap-12 items-center group"
        >
          <motion.div variants={fadeInUp} className="order-2 md:order-1 md:pr-8 md:text-right flex flex-col items-start md:items-end">
            <span className="text-xs font-body tracking-widest uppercase text-[#829056]">Residential</span>
            <h3 className="font-heading text-white text-4xl mt-3 mb-6">The Mathur's Apartment</h3>
            <p className="font-body text-[#CBD2A4]/70 leading-relaxed mb-8 max-w-md">
              Designed to evoke the feeling of an ancient apothecary. We utilized raw plaster and reclaimed oak to create a tactile retail experience.
            </p>
            <button className="flex items-center gap-2 text-sm border-b border-[#CBD2A4]/20 text-[#CBD2A4] pb-1 transition-all hover:border-[#829056]">
              <span className="hover:text-[#829056] flex items-center gap-2 transition-colors">
                 Explore Project <ArrowUpRight size={16} />
              </span>
            </button>
          </motion.div>
          
          {/* CHANGED: Added max-w-md and mx-auto to constrain width and center */}
          <motion.div variants={imageReveal} className="order-1 md:order-2 overflow-hidden relative max-w-md mx-auto w-full">
             {/* LOCAL VIDEO 2 */}
             <video
              autoPlay
              loop
              muted
              playsInline
              // CHANGED: aspect-[4/3] to aspect-[2/3] for a taller height
              className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
            >
              {/* Ensure "project-2.mp4" exists in your public/videos folder */}
              <source src="/videos/video2.mp4" type="video/mp4" />
            </video>
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-24 bg-[#1c1812] border-t border-[#CBD2A4]/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-white text-3xl md:text-5xl mb-16"
        >
          The Methodology
        </motion.h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { num: "01", title: "Discovery", txt: "Understanding your lifestyle and aesthetic aspirations." },
            { num: "02", title: "Concept", txt: "Moodboards and spatial planning to define the direction." },
            { num: "03", title: "Detailed Design", txt: "Material selection, technical drawings, and procurement." },
            { num: "04", title: "Execution", txt: "Construction oversight and final styling placement." }
          ].map((step, i) => (
            <motion.div variants={fadeInUp} key={i} className="relative p-6 flex flex-col items-center">
              {/* Number behind text */}
              <span className="font-heading text-6xl text-white/20 mb-4">{step.num}</span>
              <h4 className="text-lg font-body font-medium mb-3 text-[#CBD2A4]">{step.title}</h4>
              <p className="text-[#CBD2A4]/60 text-sm leading-relaxed">{step.txt}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AtelierPage;
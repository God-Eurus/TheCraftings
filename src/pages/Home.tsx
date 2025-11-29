import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LayoutTemplate, PenTool, Home } from 'lucide-react';

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
              <StatItem number="250+" label="Projects Completed" />
              <StatItem number="15+" label="Years Experience" />
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

const ServicesSection = () => {
  const services = [
    {
      title: "Architectural Planning",
      desc: "Comprehensive spatial analysis and structural reconfiguration for modern living requirements.",
      icon: <LayoutTemplate className="w-6 h-6" />
    },
    {
      title: "Interior Styling",
      desc: "Curating furniture, art, and textiles to create a cohesive narrative within your space.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Renovation Management",
      desc: "End-to-end project oversight, ensuring craftsmanship meets our exacting standards.",
      icon: <Home className="w-6 h-6" />
    }
  ];

  return (
    // BG: #1c1812
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
        className="grid md:grid-cols-3 gap-8"
      >
        {services.map((service, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            // Hover BG: Slightly darker/richer #14110d
            className="group p-8 border border-[#CBD2A4]/10 bg-[#CBD2A4]/[0.02] hover:bg-[#14110d] transition-colors duration-500 relative overflow-hidden"
          >
            {/* Accent Line: #829056 */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-[#829056] group-hover:h-full transition-all duration-500 ease-out" />
            <div className="mb-6 text-[#CBD2A4]/80 transition-colors relative z-10">
               <span className="group-hover:text-[#829056] transition-colors">{service.icon}</span>
            </div>
            <h3 className="font-heading text-2xl mb-4 text-[#CBD2A4] group-hover:text-white transition-colors relative z-10">{service.title}</h3>
            <p className="font-body text-[#CBD2A4]/60 text-sm leading-relaxed mb-8 group-hover:text-[#CBD2A4]/80 relative z-10">
              {service.desc}
            </p>
            <a href="#" className="relative z-10 inline-flex items-center text-xs uppercase tracking-widest text-[#CBD2A4]/50 transition-colors">
               <span className="group-hover:text-[#829056] flex items-center transition-colors">
                 Read More <ArrowRight className="ml-2 w-4 h-4" />
               </span>
            </a>
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
          <motion.div variants={imageReveal} className="overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Minimalist Living Room" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          <motion.div variants={fadeInUp} className="md:pl-8">
            <span className="text-xs font-body tracking-widest uppercase text-[#829056]">Residential</span>
            <h3 className="font-heading text-white text-4xl mt-3 mb-6">The Obsidian Apartment</h3>
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
            <span className="text-xs font-body tracking-widest uppercase text-[#829056]">Commercial</span>
            <h3 className="font-heading text-white text-4xl mt-3 mb-6">Aesop's Gallery</h3>
            <p className="font-body text-[#CBD2A4]/70 leading-relaxed mb-8 max-w-md">
              Designed to evoke the feeling of an ancient apothecary. We utilized raw plaster and reclaimed oak to create a tactile retail experience.
            </p>
            <button className="flex items-center gap-2 text-sm border-b border-[#CBD2A4]/20 text-[#CBD2A4] pb-1 transition-all hover:border-[#829056]">
              <span className="hover:text-[#829056] flex items-center gap-2 transition-colors">
                 Explore Project <ArrowUpRight size={16} />
              </span>
            </button>
          </motion.div>
          <motion.div variants={imageReveal} className="order-1 md:order-2 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Retail" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
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
              <span className="font-heading text-6xl text-black/20 mb-4">{step.num}</span>
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
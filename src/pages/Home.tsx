import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, LayoutTemplate, PenTool, Home } from 'lucide-react';


// --- Animation Variants (Reusable settings) ---
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
    <div className="bg-stone-950 min-h-screen font-sans text-stone-100 overflow-x-hidden selection:bg-amber-200 selection:text-stone-900">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Navbar Overlay */}
      

      {/* --- SECTION 1: HERO (Bottom Left & Animated) --- */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30 opacity-80" />
        </div>

        {/* Hero Content - Bottom Left */}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pt-20 pb-36 md:pb-48 max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-6"
          >
            
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 pl-1">
              <div className="w-12 h-[1px] bg-amber-400/60"></div>
              <span className="text-amber-200/80 font-body text-xs uppercase tracking-[0.2em]">Interior Design Studio</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-white">
              Crafting <span className="italic text-amber-200 font-light pr-2">Timeless</span> <br />
              Modern Interiors
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-body text-stone-300 text-sm md:text-base font-light leading-relaxed max-w-xl pl-1 border-l-2 border-amber-500/30 pl-6 ml-1">
              Where functionality meets elegance. We create bespoke living spaces that inspire, endure, and reflect your unique narrative.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 pt-4 pl-1">
              <button className="group relative bg-amber-600 text-white px-8 py-3 rounded-full font-body text-xs md:text-sm font-semibold tracking-wide overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body text-xs md:text-sm font-medium tracking-wide text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all hover:backdrop-blur-md">
                View Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-gradient-to-t from-stone-950/90 to-transparent backdrop-blur-[2px] z-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatItem number="250+" label="Projects Completed" />
              <StatItem number="15+" label="Years Experience" />
              <StatItem number="98%" label="Client Satisfaction" />
              <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-8 opacity-80">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-lg leading-none text-white">Award Winning</p>
                  <p className="font-body text-xs text-stone-400 mt-1">Design Excellence 2024</p>
                </div>
              </div>
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

/* --- SUB-COMPONENTS WITH ANIMATIONS --- */

const StatItem = ({ number, label }) => (
  <div className="group cursor-default">
    <h3 className="font-heading text-3xl md:text-5xl text-white mb-1 group-hover:text-amber-200 transition-colors duration-300">
      {number}
    </h3>
    <p className="font-body text-[10px] md:text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-300 transition-colors">
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
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-stone-950 relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <motion.div variants={fadeInUp}>
          <span className="text-amber-500 font-body text-xs uppercase tracking-[0.2em] mb-2 block">Our Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl text-white">Design Disciplines</h2>
        </motion.div>
        <motion.p variants={fadeInUp} className="font-body text-stone-400 max-w-md text-sm leading-relaxed">
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
            className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-stone-900 transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-amber-600 group-hover:h-full transition-all duration-500 ease-out" />
            <div className="mb-6 text-amber-500/80 group-hover:text-amber-400 transition-colors">
              {service.icon}
            </div>
            <h3 className="font-heading text-2xl mb-4 text-stone-100">{service.title}</h3>
            <p className="font-body text-stone-400 text-sm leading-relaxed mb-8 group-hover:text-stone-300">
              {service.desc}
            </p>
            <a href="#" className="inline-flex items-center text-xs uppercase tracking-widest text-white/50 group-hover:text-amber-500 transition-colors">
              Read More <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const SelectedWorks = () => {
  return (
    <section className="py-24 bg-stone-900 relative z-10">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-white">Selected Works</h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-body uppercase tracking-widest hover:text-amber-500 transition-colors mt-4 md:mt-0">
            View All Projects <ArrowRight size={16} />
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
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          <motion.div variants={fadeInUp} className="md:pl-8">
            <span className="text-amber-500 text-xs font-body tracking-widest uppercase">Residential</span>
            <h3 className="font-heading text-4xl mt-3 mb-6">The Obsidian Apartment</h3>
            <p className="font-body text-stone-400 leading-relaxed mb-8 max-w-md">
              A study in contrast and texture. This project involved transforming a downtown loft into a sanctuary of dark stone, warm wood, and filtered light.
            </p>
            <button className="flex items-center gap-2 text-sm border-b border-white/20 pb-1 hover:border-amber-500 hover:text-amber-500 transition-all">
              Explore Project <ArrowUpRight size={16} />
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
            <span className="text-amber-500 text-xs font-body tracking-widest uppercase">Commercial</span>
            <h3 className="font-heading text-4xl mt-3 mb-6">Aesop's Gallery</h3>
            <p className="font-body text-stone-400 leading-relaxed mb-8 max-w-md">
              Designed to evoke the feeling of an ancient apothecary. We utilized raw plaster and reclaimed oak to create a tactile retail experience.
            </p>
            <button className="flex items-center gap-2 text-sm border-b border-white/20 pb-1 hover:border-amber-500 hover:text-amber-500 transition-all">
              Explore Project <ArrowUpRight size={16} />
            </button>
          </motion.div>
          <motion.div variants={imageReveal} className="order-1 md:order-2 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Retail" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section className="py-24 bg-stone-950 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-5xl mb-16"
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
              <span className="font-heading text-6xl text-stone-800 mb-4">{step.num}</span>
              <h4 className="text-lg font-body font-medium mb-3 text-amber-100">{step.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{step.txt}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AtelierPage;
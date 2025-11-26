import { Home, Layers, Ruler, Box, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: '1',
      icon: Home,
      title: 'Interior Architecture',
      description:
        'Complete architectural planning and design for residential and commercial spaces. We reimagine layouts to maximize flow and functionality.',
    },
    {
      id: '2',
      icon: Layers,
      title: 'Full Home Design',
      description:
        'End-to-end interior design services from concept to completion. Every detail curated to reflect your vision and lifestyle.',
    },
    {
      id: '3',
      icon: Ruler,
      title: 'Space Planning',
      description:
        'Strategic layout design that optimizes every square foot. We create spaces that work beautifully and efficiently.',
    },
    {
      id: '4',
      icon: Box,
      title: '3D Visualization',
      description:
        'Photorealistic renderings that bring your project to life before construction begins. See your space exactly as it will be.',
    },
    {
      id: '5',
      icon: Sparkles,
      title: 'Styling & Décor',
      description:
        'The finishing touches that transform a space. From furniture selection to art curation, we handle every aesthetic detail.',
    },
  ];

  return (
    <div className="w-full pt-24 min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-900 selection:text-white">
      
      {/* Inject Fonts locally */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <span className="text-amber-500 font-body text-xs uppercase tracking-[0.2em]">What We Do</span>
          <h1 className="font-heading text-5xl md:text-7xl text-white">Our Services</h1>
          <div className="w-16 h-[1px] bg-amber-500/40 my-6"></div>
          <p className="text-stone-400 text-lg max-w-2xl font-body font-light leading-relaxed">
            Comprehensive design solutions tailored to your unique needs. We guide you through every
            step of the design journey with precision and artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Add a specific span logic for the last item if odd number, to make it look balanced
            const isLastOdd = index === services.length - 1 && services.length % 3 !== 0;
            
            return (
              <div
                key={service.id}
                className={`group relative p-10 border border-white/5 bg-white/[0.02] hover:bg-stone-900 transition-all duration-500 ${isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/20 transition-colors duration-500 pointer-events-none" />
                
                <div className="mb-8 inline-flex items-center justify-center text-amber-500/80 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-heading text-3xl mb-4 text-stone-100 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-stone-400 font-body text-sm leading-loose group-hover:text-stone-300 transition-colors">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Clean Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-white/10 py-16 mb-24">
          <div className="text-center md:border-r border-white/10 last:border-0">
            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2">15+</h3>
            <p className="text-amber-500 text-xs uppercase tracking-widest font-body">Years of Experience</p>
          </div>
          <div className="text-center md:border-r border-white/10 last:border-0">
            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2">500+</h3>
            <p className="text-amber-500 text-xs uppercase tracking-widest font-body">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-heading text-white mb-2">98%</h3>
            <p className="text-amber-500 text-xs uppercase tracking-widest font-body">Client Satisfaction</p>
          </div>
        </div>

        {/* CTA Section - Elegant Dark Box */}
        <div className="relative bg-stone-900 p-12 lg:p-20 text-center overflow-hidden border border-white/5">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white">Ready to transform your space?</h2>
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto font-body font-light">
              Let's discuss your vision and create something extraordinary together. Book a
              complimentary consultation to get started.
            </p>
            
            <button
              onClick={() => onNavigate('Contact')}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-amber-700 text-white text-xs font-semibold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300"
            >
              Book A Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
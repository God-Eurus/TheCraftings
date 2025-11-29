import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: '01',
      title: 'Interior Architecture',
      description: 'Structural planning, spatial reconfiguration, and technical detailing for residential and commercial renovations.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '02',
      title: 'Full Home Design',
      description: 'Comprehensive interior design from concept boards to final installation, curated to reflect your unique narrative.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '03',
      title: 'Lighting Design',
      description: 'Atmospheric lighting plans that define the mood, combining architectural fixtures with decorative statement pieces.',
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '04',
      title: 'Bespoke Furniture',
      description: 'Custom cabinetry, millwork, and furniture design tailored specifically to the dimensions and style of your space.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '05',
      title: 'Space Planning',
      description: 'Strategic layout design that optimizes flow and functionality, ensuring every square foot serves a purpose.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '06',
      title: 'Styling & Art Curation',
      description: 'The finishing touches. We source unique art, artifacts, and textiles to bring warmth and character to the home.',
      image: 'https://images.unsplash.com/photo-1582201968431-a0594192518e?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    // Updated BG to #1c1812, Text to #CBD2A4, Selection to #829056
    <div className="w-full min-h-screen bg-[#1c1812] text-[#CBD2A4] selection:bg-[#829056] selection:text-white">
      
      {/* Inject Fonts locally */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Sticky Header Content */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-24 h-fit">
            {/* Changed accent text to #829056 */}
            <span className="text-[#829056] font-body text-xs uppercase tracking-[0.2em] mb-6 block font-bold">
              Our Expertise
            </span>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
              DESIGN THAT <br />
              <span className="italic font-light ml-4 text-[#CBD2A4]">Resonates</span>
            </h1>
            
            {/* Changed text color to #CBD2A4 with opacity */}
            <p className="text-[#CBD2A4]/80 text-lg font-body font-light leading-relaxed max-w-md mb-12 border-l border-[#829056] pl-6">
              We offer more than design – we craft experiences through clarity, texture,
              intention, and thoughtful presence. Our approach creates spaces that feel inevitable, as if they have always belonged.
            </p>

            <div className="mb-16">
              <button
                onClick={() => onNavigate('Contact')}
                // Updated borders and hover colors to #829056
                className="group inline-flex items-center gap-4 text-white text-xs font-semibold uppercase tracking-widest border-b border-[#CBD2A4]/30 pb-2 hover:border-[#829056] hover:text-[#829056] transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Added a small philosophy list */}
            <div className="hidden lg:block space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-[#829056] font-heading text-xl">01.</span>
                    <span className="text-[#CBD2A4]/60 text-sm uppercase tracking-wider">Concept Development</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[#829056] font-heading text-xl">02.</span>
                    <span className="text-[#CBD2A4]/60 text-sm uppercase tracking-wider">Technical Detailing</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[#829056] font-heading text-xl">03.</span>
                    <span className="text-[#CBD2A4]/60 text-sm uppercase tracking-wider">Material Selection</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[#829056] font-heading text-xl">04.</span>
                    <span className="text-[#CBD2A4]/60 text-sm uppercase tracking-wider">Project Management</span>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Grid of Services */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`
                    group relative border border-[#CBD2A4]/10 bg-[#CBD2A4]/[0.02] flex flex-col justify-between p-8
                    hover:bg-[#14110d] hover:border-[#829056]/30 transition-all duration-500
                  `}
                >
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-body text-xs text-[#CBD2A4]/40 group-hover:text-[#829056] transition-colors font-bold">
                        {service.id}
                    </span>
                    <ArrowUpRight size={18} className="text-[#CBD2A4]/20 group-hover:text-[#829056] transition-colors" />
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out bg-black/20">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover tint */}
                    <div className="absolute inset-0 bg-[#829056]/0 group-hover:bg-[#829056]/10 transition-colors duration-500" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-heading text-2xl text-[#CBD2A4] group-hover:text-white uppercase tracking-wide transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#CBD2A4]/60 text-sm font-body leading-relaxed group-hover:text-[#CBD2A4]/80 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Added Bottom Footer/Philosophy Block */}
            <div className="mt-16 pt-8 border-t border-[#CBD2A4]/10">
              <h3 className="font-heading text-3xl text-white mb-4">Holistic Approach</h3>
              <p className="text-[#CBD2A4]/60 text-sm font-body leading-loose max-w-2xl">
                We believe that every detail matters. From the way light enters a room to the texture of the flooring underfoot, 
                our comprehensive service ensures a cohesive and tranquil environment tailored to your lifestyle.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
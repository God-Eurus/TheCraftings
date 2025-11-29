import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: '01',
      title: 'Interior Architecture',
      description: 'Complete architectural planning and design for residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '02',
      title: 'Full Home Design',
      description: 'End-to-end interior design services from concept to completion.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '03',
      title: 'Space Planning',
      description: 'Strategic layout design that optimizes every square foot.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: '04',
      title: 'Styling & Décor',
      description: 'The finishing touches that transform a space.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    // Changed BG to #2E2623, Text to #CBD2A4, Selection to #52640a
    <div className="w-full min-h-screen bg-[#2E2623] text-[#CBD2A4] selection:bg-[#52640a] selection:text-white">
      
      {/* Inject Fonts locally */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Sticky Header Content */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-24 h-fit">
            {/* Changed accent text to #52640a */}
            <span className="text-[#52640a] font-body text-xs uppercase tracking-[0.2em] mb-6 block font-bold">
              Services
            </span>
            
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
              DESIGN THAT <br />
              <span className="italic font-light ml-4 text-[#CBD2A4]">Resonates</span>
            </h1>
            
            {/* Changed text color to #CBD2A4 with opacity */}
            <p className="text-[#CBD2A4]/80 text-lg font-body font-light leading-relaxed max-w-md mb-12">
              We offer more than design – we craft experiences through clarity, texture,
              intention, and thoughtful presence.
            </p>

            <div>
              <button
                onClick={() => onNavigate('Contact')}
                // Updated borders and hover colors to #52640a
                className="group inline-flex items-center gap-4 text-white text-xs font-semibold uppercase tracking-widest border-b border-[#CBD2A4]/30 pb-2 hover:border-[#52640a] hover:text-[#52640a] transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Grid of Services */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`
                    group relative border border-[#CBD2A4]/10 bg-[#CBD2A4]/[0.02] aspect-[4/5] flex flex-col justify-between p-8
                    hover:bg-[#231C1A] hover:border-[#52640a]/30 transition-all duration-500
                    ${/* Border handling for grid overlap look */ ''}
                    ${index % 2 === 0 ? 'md:border-r-0' : ''}
                    ${index < 2 ? 'md:border-b-0' : ''}
                  `}
                >
                  {/* Number - Changed hover color to #52640a */}
                  <span className="font-body text-xs text-[#CBD2A4]/40 group-hover:text-[#52640a] transition-colors font-bold">
                    {service.id}
                  </span>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[3/4] max-h-[60%] overflow-hidden my-4 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-heading text-2xl lg:text-3xl text-[#CBD2A4] group-hover:text-white uppercase tracking-wide transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tagline footer */}
            <div className="mt-8 text-right">
              <p className="text-[#CBD2A4]/60 text-sm font-body max-w-xs ml-auto">
                Design services crafted for calm, intentional, and meaningful living.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
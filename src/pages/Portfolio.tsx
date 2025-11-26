import { useState } from 'react';

// Define the interface for project data
interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
  location: string;
}

// Define the interface for component props
interface PortfolioProps {
  onNavigate: (page: string) => void; // Kept for your routing needs, though unused here
}

// Project Data moved outside component to prevent re-creation on every render
const projects: Project[] = [
  {
    id: '1',
    title: 'The Obsidian Penthouse',
    category: 'Residential',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2024',
    location: 'New York, NY',
  },
  {
    id: '2',
    title: 'Aethel Boutique Hotel',
    category: 'Commercial',
    imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2024',
    location: 'Miami, FL',
  },
  {
    id: '3',
    title: 'Stone & Oak Loft',
    category: 'Renovation',
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2023',
    location: 'Los Angeles, CA',
  },
  {
    id: '4',
    title: 'Pacific Coast Villa',
    category: 'Residential',
    imageUrl: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2023',
    location: 'Malibu, CA',
  },
  {
    id: '5',
    title: 'Apex Executive Suites',
    category: 'Commercial',
    imageUrl: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2024',
    location: 'Chicago, IL',
  },
  {
    id: '6',
    title: 'Urban Sanctuary Styling',
    category: 'Styling',
    imageUrl: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2023',
    location: 'Brooklyn, NY',
  },
  {
    id: '7',
    title: 'Beacon Hill Restoration',
    category: 'Renovation',
    imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2023',
    location: 'Boston, MA',
  },
  {
    id: '8',
    title: 'Aurum Retail Experience',
    category: 'Commercial',
    imageUrl: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2024',
    location: 'San Francisco, CA',
  },
  {
    id: '9',
    title: 'Nordic Townhouse',
    category: 'Residential',
    imageUrl: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    year: '2024',
    location: 'Seattle, WA',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Styling'];

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Filter logic
  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    // Changed background to dark theme and added selection colors
    <div className="w-full pt-24 min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-900 selection:text-white pb-24">
     
      {/* Injecting theme fonts locally for this component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Header Section with Amber Accent */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <span className="text-amber-500 font-body text-xs uppercase tracking-[0.2em]">Our Work</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white">Selected Portfolio</h1>
          <div className="w-24 h-[1px] bg-amber-500/30 my-6"></div>
          <p className="text-stone-400 text-lg max-w-xl font-body font-light leading-relaxed">
            A curation of bespoke living spaces and architectural endeavors that embody our philosophy of timeless elegance.
          </p>
        </div>

        {/* Elegant Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-white/10 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              // Minimalist text buttons with underline effect instead of pills
              className={`text-sm font-body uppercase tracking-[0.15em] py-2 relative group transition-colors duration-300
                ${activeFilter === category
                  ? 'text-amber-400'
                  : 'text-stone-500 hover:text-stone-200'
                }`}
            >
              {category}
              {/* Animated Underline */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 origin-left transform transition-transform duration-300 ease-out ${activeFilter === category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer block">
              {/* Image Container - Taller editorial aspect ratio */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-stone-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 scale-100 opacity-90 group-hover:opacity-100"
                />
                {/* Subtle warm overlay on hover instead of dark & text */}
                <div className="absolute inset-0 bg-amber-900/0 transition-colors duration-500 group-hover:bg-amber-900/10" />
              </div>

              {/* Project Details Below Image */}
              <div className="flex flex-col items-start pl-1">
                {/* Category uses Amber accent */}
                <span className="text-amber-500 text-xs font-body tracking-widest uppercase mb-3 inline-block">
                  {project.category}
                </span>
                
                {/* Title uses Serif font */}
                <h3 className="font-heading text-2xl lg:text-3xl text-white mb-3 group-hover:text-amber-100 transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Metadata with elegant separator */}
                <div className="flex items-center gap-3 text-stone-500 text-xs font-body tracking-wider uppercase">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
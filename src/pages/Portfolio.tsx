import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

// -------------------- TYPES --------------------
interface Project {
  id: string;
  title: string;
  category: string;
  mainVideo: string; // Added video field
  galleryImages: string[];
  year: string;
  location: string;
}

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

// -------------------- DATA --------------------
// Updated with sample video URLs
const projects: Project[] = [
  {
    id: '1',
    title: "The Mathur's Apartment",
    category: 'Residential',
    year: '2024',
    location: 'Narayan Vihar, Jaipur',
    mainVideo: '/videos/pv1.mov',
    galleryImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
    ],
  },
  {
    id: '2',
    title: 'The 17:17 Store',
    category: 'Commercial',
    year: '2025',
    location: 'C-Scheme, Jaipur',
    mainVideo: '/videos/pv2.mov',
    galleryImages: [
      "/images/IMG_3744.jpg",
      "/images/IMG_8669.jpg",
      "/images/IMG_3742.jpg",
      "/images/IMG_3743.jpg",
      "/images/IMG_3744.jpg",
      "/images/IMG_3745.jpg",
    ],
  },
  {
    id: '3',
    title: 'Scientific and General Agencies',
    category: 'Renovation',
    year: '2025',
    location: 'New Aatish Market, Jaipur',
    mainVideo: '/videos/pv3.mov',
    galleryImages: [
      "/images/IMG_3744.jpg",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1595858450679-d1852aa239c1?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=1200&q=80",
    ],
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Styling'];

// -------------------- COMPONENT --------------------
export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full pt-24 min-h-screen bg-[#1c1812] text-[#CBD2A4] pb-24">
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#829056] text-xs uppercase tracking-[0.25em] font-body font-semibold">
            Our Work
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            Selected Portfolio
          </h1>
          <p className="max-w-xl mx-auto mt-6 text-[#CBD2A4]/70 font-body">
            A curation of bespoke living spaces and architectural endeavors that
            embody timeless elegance.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-8 mb-20 border-b border-[#CBD2A4]/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs uppercase tracking-widest font-body transition-colors ${
                activeFilter === cat
                  ? 'text-[#829056] font-semibold'
                  : 'text-[#CBD2A4]/60 hover:text-[#CBD2A4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              {/* VIDEO SECTION CHANGED HERE */}
              <div className="aspect-[3/4] overflow-hidden bg-black/20 mb-6 relative">
                <video
                  src={project.mainVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Optional subtle overlay to ensure text pops */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              </div>

              <span className="text-[#829056] text-xs tracking-widest uppercase font-body font-semibold">
                {project.category}
              </span>

              <h3 className="font-heading text-2xl text-white mt-2 mb-3">
                {project.title}
              </h3>

              <div className="text-xs uppercase tracking-wider text-[#CBD2A4]/60 mb-5">
                {project.location} · {project.year}
              </div>

              <button
                onClick={() => openGallery(project)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-body border border-[#CBD2A4]/30 px-6 py-3 hover:bg-[#829056] hover:border-[#829056] hover:text-white transition-all"
              >
                Show More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#1c1812]/95 backdrop-blur-md">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 p-2 border border-[#CBD2A4]/30 rounded-full hover:bg-[#829056] hover:border-[#829056]"
          >
            <X />
          </button>

          <div className="max-w-7xl mx-auto h-full px-6 md:px-12 py-24 flex flex-col">
            <span className="text-[#829056] text-xs uppercase tracking-widest font-body">
              {selectedProject.category}
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-10">
              {selectedProject.title}
            </h2>

            {/* Clean Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px] overflow-y-auto no-scrollbar pb-12">
              {selectedProject.galleryImages.map((img, idx) => {
                const isHero = idx === 0;
                const isWide = idx % 6 === 0 && idx !== 0;

                let span = 'col-span-1 row-span-1';
                if (isHero) span = 'col-span-2 row-span-2';
                else if (isWide) span = 'col-span-2';

                return (
                  <div
                    key={idx}
                    className={`${span} rounded-xl overflow-hidden bg-white/5`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
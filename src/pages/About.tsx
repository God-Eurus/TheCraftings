import { ArrowRight, Quote } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    // Updated BG to #2E2623, Text to #CBD2A4, Selection to #52640a
    <div className="w-full pt-24 min-h-screen bg-[#2E2623] text-[#CBD2A4] selection:bg-[#52640a] selection:text-white">
      
      {/* Inject Fonts locally */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          {/* Changed accent to #52640a */}
          <span className="text-[#52640a] font-body text-xs uppercase tracking-[0.2em] font-bold">Est. 2010</span>
          <h1 className="font-heading text-5xl md:text-7xl text-white">The Craftings Story</h1>
          {/* Changed line color to #52640a */}
          <div className="w-16 h-[1px] bg-[#52640a]/50 my-6"></div>
          {/* Changed text color to #CBD2A4 */}
          <p className="text-[#CBD2A4]/80 text-lg max-w-2xl font-body font-light leading-relaxed">
            Creating spaces that inspire, endure, and transcend the ordinary.
          </p>
        </div>

        {/* Section: Narrative */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-4xl mb-8 text-white">Legacy & Vision</h2>
            <div className="space-y-6 text-[#CBD2A4]/80 font-body font-light leading-loose text-sm md:text-base text-justify">
              <p>
                Founded in 2010, <span className="text-white font-medium">The Craftings</span> emerged from a passion for creating spaces that
                transcend trends. What began as an intimate studio has evolved into an award-winning design firm serving a global clientele who value discretion and detail.
              </p>
              <p>
                We believe that exceptional design is born from the intersection of artistry,
                functionality, and a deep understanding of the human narrative. Every project is an
                opportunity to craft environments that enhance daily life while reflecting the
                unique personality of those who inhabit them.
              </p>
              {/* Changed border color to #52640a */}
              <div className="border-l border-[#52640a] pl-6 py-2 mt-6">
                 <p className="italic text-[#CBD2A4]">
                    "We approach each project with fresh eyes, ensuring that no two spaces are ever the same."
                 </p>
              </div>
            </div>
          </div>
          
          {/* Image with Frame Effect */}
          <div className="order-1 md:order-2 relative group">
            {/* Changed frame border to #52640a */}
            <div className="absolute top-4 -right-4 w-full h-full border border-[#52640a]/30 z-0 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-black/20">
                <img
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Studio"
                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
            </div>
          </div>
        </div>

        {/* Section: Philosophy (Architectural Grid) */}
        {/* Changed background and borders to match theme */}
        <div className="border-y border-[#CBD2A4]/10 bg-[#231C1A]/50 mb-32">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#CBD2A4]/10">
            {[
              { title: "Timeless Elegance", desc: "We design spaces that transcend fleeting trends, creating interiors that remain beautiful and relevant for decades." },
              { title: "Functional Beauty", desc: "Form and function are inseparable. Every design decision enhances both aesthetics and livability." },
              { title: "Personalized Approach", desc: "Your vision guides our process. We listen, collaborate, and create spaces that are uniquely yours." }
            ].map((item, i) => (
               <div key={i} className="p-10 lg:p-12 hover:bg-[#CBD2A4]/[0.02] transition-colors duration-300">
                 {/* Number Accent */}
                 <span className="text-[#52640a]/60 font-heading text-5xl mb-4 block font-bold">0{i+1}</span>
                 <h3 className="font-heading text-2xl mb-4 text-white">{item.title}</h3>
                 <p className="text-[#CBD2A4]/70 font-body text-sm font-light leading-relaxed">
                   {item.desc}
                 </p>
               </div>
            ))}
          </div>
        </div>

        {/* Section: Founder */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
           {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-black/20 group">
            <img
              src="/images/founders.jpeg"
              alt="Nitya Kabra / Archana Kabra"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Founder Text */}
          <div>
            <span className="text-[#52640a] font-body text-xs uppercase tracking-[0.2em] mb-4 block font-bold">Principal Designers</span>
            <h2 className="font-heading text-4xl mb-8 text-white">Nitya Kabra / Archana Kabra</h2>
            
            <p className="text-[#CBD2A4]/80 leading-relaxed mb-6 font-body font-light text-sm md:text-base">
              A mother and daughter turned their shared passion for interior design into a thriving venture when they decided to start their own firm. 
              What began as casual creativity at home rearranging spaces, choosing colours, and crafting 
              decor slowly grew into a dream they both wanted to pursue professionally. 
            </p>
            <p className="text-[#CBD2A4]/80 leading-relaxed mb-10 font-body font-light text-sm md:text-base">
               Combining the mother’s experience and practical wisdom with the daughter’s fresh perspective and modern design sense, they built a brand rooted in trust, 
               creativity, and a deep understanding of how a space should feel. Together, they transformed their bond into a 
               business that helps others create homes they truly love.
            </p>

            <div className="relative p-8 border border-[#CBD2A4]/10 bg-[#CBD2A4]/[0.02]">
               <Quote className="absolute top-4 left-4 text-[#52640a]/30 w-8 h-8" />
               <p className="text-[#CBD2A4] font-heading text-xl italic relative z-10 text-center">
                 "Interior design is much like a perfect martini: it requires the right balance of ingredients, a touch of chill, and an immaculate presentation."
               </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Minimalist */}
        <div className="border-t border-[#CBD2A4]/10 pt-20 text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white">Let's create something beautiful</h2>
          <p className="text-[#CBD2A4]/80 text-lg mb-10 max-w-2xl mx-auto font-body font-light">
            Ready to start your design journey? We'd love to hear about your project and explore
            how we can bring your vision to life.
          </p>
          <button
            onClick={() => onNavigate('Contact')}
            // Updated Button to match theme
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#CBD2A4] text-[#2E2623] hover:bg-[#52640a] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-lg"
          >
            Get In Touch
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
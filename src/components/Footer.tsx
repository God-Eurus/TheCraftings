import { Instagram, Facebook, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-20 border-t border-white/10 font-sans selection:bg-amber-900 selection:text-white">
      
      {/* Inject Fonts locally (if not already global) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & tagline */}
          <div className="md:col-span-1">
            <h3 className="text-white font-heading text-4xl mb-6">The Craftings.</h3>
            <p className="text-sm leading-relaxed font-body font-light opacity-80">
              Crafting timeless, modern interiors that blend functionality, elegance, and comfort. We design spaces that tell your story.
            </p>
          </div>

          {/* Column 2: Navigation (New Addition for completeness) */}
          <div>
            <h4 className="text-white font-body text-xs font-semibold tracking-[0.2em] uppercase mb-6">Studio</h4>
            <ul className="space-y-4 text-sm font-body">
              {['Portfolio', 'Services', 'About Us', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-amber-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-body text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contact</h4>
            <div className="space-y-4 text-sm font-body font-light">
              <a href="tel:+15551234567" className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone size={16} className="mt-1 text-amber-600" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:hello@atelier.com" className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail size={16} className="mt-1 text-amber-600" />
                <span>hello@thecraftings.com</span>
              </a>
              <div className="flex items-start gap-3">
                <ArrowRight size={16} className="mt-1 text-amber-600" />
                <span>Mansarovar,<br/>Near Jaipur</span>
              </div>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-body text-xs font-semibold tracking-[0.2em] uppercase mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-600 hover:text-amber-500 hover:bg-white/[0.02] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 uppercase tracking-widest font-body">
          <p>&copy; {new Date().getFullYear()} The Craftings. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
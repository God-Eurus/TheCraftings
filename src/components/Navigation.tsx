import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// 1. Define the Prop Types here
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

// 2. Add ': NavigationProps' after the props destructuring
const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems = ['Home', 'Portfolio', 'Services', 'About', 'Contact'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-heading { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 lg:px-16 
          ${isScrolled && !isMobileMenuOpen 
            ? 'bg-stone-950/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' 
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('Home');
              setIsMobileMenuOpen(false);
            }}
            className="text-3xl font-heading font-semibold tracking-wider text-amber-50 relative z-50 transition-transform hover:scale-105"
          >
            The Craftings<span className="text-amber-400">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`relative group py-1 text-sm font-body tracking-wide transition-colors duration-300
                  ${currentPage === item ? 'text-amber-200' : 'text-stone-300 hover:text-white'}
                `}
              >
                {item}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-amber-400 transition-all duration-300 ${currentPage === item ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => onNavigate('Contact')}
              className="bg-amber-600/20 hover:bg-amber-600 text-amber-100 hover:text-white border border-amber-600/50 px-6 py-2 rounded-full text-xs font-body font-medium tracking-wide transition-all duration-300 backdrop-blur-sm"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-200 hover:text-amber-400 transition-colors z-50 p-2 relative"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            fixed top-0 left-0 w-full h-[100dvh] bg-stone-950 z-40 
            flex flex-col items-center 
            justify-start pt-32 gap-8 
            transition-transform duration-500 ease-in-out md:hidden overflow-y-auto
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavigate(item);
                setIsMobileMenuOpen(false);
              }}
              className={`text-3xl font-heading transition-colors duration-300
                ${currentPage === item ? 'text-amber-400 italic' : 'text-stone-200 hover:text-amber-200'}
              `}
            >
              {item}
            </button>
          ))}
          
          <button 
            onClick={() => {
              onNavigate('Contact');
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-heading hover:bg-amber-500 transition-colors"
          >
            Book Consultation
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
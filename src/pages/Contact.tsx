import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          {/* Olive Green Accent */}
          <span className="text-[#52640a] font-body text-xs uppercase tracking-[0.2em] font-bold">Inquiries</span>
          <h1 className="font-heading text-5xl md:text-7xl text-white">Get In Touch</h1>
          {/* Olive Green Divider */}
          <div className="w-16 h-[1px] bg-[#52640a]/50 my-6"></div>
          {/* Sage Beige Text */}
          <p className="text-[#CBD2A4]/80 text-lg max-w-xl font-body font-light leading-relaxed">
            Let's discuss your project. We invite you to share your vision with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="font-heading text-4xl mb-8 text-white">The Studio</h2>
            <p className="text-[#CBD2A4]/70 mb-12 leading-relaxed font-body font-light">
              Ready to transform your space? Fill out the form and we'll get back to you within 24
              hours to schedule your complimentary consultation.
            </p>

            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6 group">
                {/* Icon Box: Hover border #52640a */}
                <div className="w-10 h-10 border border-[#CBD2A4]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#52640a] transition-colors duration-300">
                  <Mail size={18} className="text-[#52640a]" />
                </div>
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-[#CBD2A4]/60 mb-2">Email</h3>
                  <a href="mailto:hello@atelier.com" className="font-heading text-xl text-white hover:text-[#52640a] transition-colors">hello@craftings.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 border border-[#CBD2A4]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#52640a] transition-colors duration-300">
                  <Phone size={18} className="text-[#52640a]" />
                </div>
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-[#CBD2A4]/60 mb-2">Phone</h3>
                  <a href="tel:+15551234567" className="font-heading text-xl text-white hover:text-[#52640a] transition-colors">+91 9024751178</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 border border-[#CBD2A4]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#52640a] transition-colors duration-300">
                  <MapPin size={18} className="text-[#52640a]" />
                </div>
                <div>
                  <h3 className="font-body text-xs uppercase tracking-widest text-[#CBD2A4]/60 mb-2">Location</h3>
                  <p className="font-heading text-xl text-white">
                    Jaipur, Rajasthan<br />India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-[#CBD2A4]/5 bg-[#CBD2A4]/[0.02]">
              <div className="flex items-center gap-3 mb-4 text-[#52640a]">
                <Clock size={18} />
                <h3 className="font-body text-xs uppercase tracking-widest font-bold">Office Hours</h3>
              </div>
              <ul className="text-[#CBD2A4]/70 text-sm font-body font-light space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Weekends</span>
                  <span className="text-white">9:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Minimalist Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-body uppercase tracking-widest text-[#CBD2A4]/50 mb-2 group-focus-within:text-[#52640a] transition-colors">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  // Inputs: Border bottom #CBD2A4/20, Focus #52640a
                  className="w-full bg-transparent border-b border-[#CBD2A4]/20 py-3 text-white placeholder-[#CBD2A4]/30 focus:outline-none focus:border-[#52640a] transition-colors font-heading text-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-xs font-body uppercase tracking-widest text-[#CBD2A4]/50 mb-2 group-focus-within:text-[#52640a] transition-colors">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#CBD2A4]/20 py-3 text-white placeholder-[#CBD2A4]/30 focus:outline-none focus:border-[#52640a] transition-colors font-heading text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-xs font-body uppercase tracking-widest text-[#CBD2A4]/50 mb-2 group-focus-within:text-[#52640a] transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#CBD2A4]/20 py-3 text-white placeholder-[#CBD2A4]/30 focus:outline-none focus:border-[#52640a] transition-colors font-heading text-lg"
                  placeholder="Enter your phone"
                />
              </div>

              <div className="group">
                <label htmlFor="projectType" className="block text-xs font-body uppercase tracking-widest text-[#CBD2A4]/50 mb-2 group-focus-within:text-[#52640a] transition-colors">
                  Project Interest *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#CBD2A4]/20 py-3 text-white focus:outline-none focus:border-[#52640a] transition-colors font-heading text-lg appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#2E2623] text-[#CBD2A4]/50">Select a project type</option>
                  <option value="residential" className="bg-[#2E2623] text-[#CBD2A4]">Residential Design</option>
                  <option value="commercial" className="bg-[#2E2623] text-[#CBD2A4]">Commercial Space</option>
                  <option value="renovation" className="bg-[#2E2623] text-[#CBD2A4]">Full Renovation</option>
                  <option value="kitchens" className="bg-[#2E2623] text-[#CBD2A4]">Modular Kitchens</option>
                  <option value="styling" className="bg-[#2E2623] text-[#CBD2A4]">Styling & Art Curation</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs font-body uppercase tracking-widest text-[#CBD2A4]/50 mb-2 group-focus-within:text-[#52640a] transition-colors">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#CBD2A4]/20 py-3 text-white placeholder-[#CBD2A4]/30 focus:outline-none focus:border-[#52640a] transition-colors font-heading text-lg resize-none"
                  placeholder="Tell us about your space and vision..."
                ></textarea>
              </div>

              {isSubmitted && (
                <div className="bg-[#52640a]/10 border border-[#52640a]/50 text-[#52640a] px-6 py-4 flex items-center gap-3">
                   <div className="w-2 h-2 bg-[#52640a] rounded-full"></div>
                   <p className="font-body text-sm">Thank you. We will be in touch shortly.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                // Updated Button: BG Sage, Text Dark Espresso, Hover Olive
                className="w-full bg-[#CBD2A4] text-[#2E2623] px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#52640a] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
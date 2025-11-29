import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'Portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'Services':
        return <Services onNavigate={handleNavigate} />;
      case 'About':
        return <About onNavigate={handleNavigate} />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {renderPage()}
      </main>
      
      {/* Placed here so it renders on every page */}
      <WhatsAppButton />
      
      <Footer />
    </div>
  );
}

export default App;
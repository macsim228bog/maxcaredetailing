import { useState, useEffect } from 'react';
import { Menu, X, } from 'lucide-react';
// 1. Импортируем логотип
import logo from './logo.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#pricing' },
    { name: 'Gallery', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <>
      <header 
        className={`w-full fixed top-0 z-[90] transition-all duration-300 ${
          scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-lg' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3 relative z-50">
            <div className="relative flex items-center justify-center">
              {/* 2. Используем импортированную переменную logo */}
              <img 
                src={logo} 
                alt="MaxCare Mobile Logo" 
                className="w-12 h-12 rounded-full object-cover border border-zinc-800 shadow-lg" 
              />
              <div className="absolute inset-0 bg-teal-500/20 blur-md rounded-full -z-10" />
            </div>
            <span className="text-white font-black text-xl tracking-tighter uppercase hidden sm:block">
              MaxCare
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-zinc-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="#book" className="bg-white text-zinc-950 px-6 py-2.5 rounded font-bold uppercase tracking-widest text-xs hover:bg-teal-500 hover:text-white transition-colors">
              Booking
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      <div 
        className={`md:hidden fixed inset-0 bg-zinc-950 z-[100] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            {/* И в мобилке тоже используем logo */}
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 rounded-full object-cover border border-zinc-800" 
            />
            <span className="text-white font-black text-lg uppercase tracking-tighter">MaxCare</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#book"
              onClick={() => setIsOpen(false)} 
              className="bg-white text-zinc-950 px-6 py-2.5 rounded font-bold uppercase tracking-widest text-xs active:scale-95 transition-transform"
            >
              Booking
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 border border-zinc-700 rounded text-zinc-400 active:border-teal-500 active:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="flex flex-col px-8 pt-10 gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 text-lg font-bold uppercase tracking-widest hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-12 opacity-20 pointer-events-none">
             <div className="w-20 h-1 bg-zinc-800 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Header;
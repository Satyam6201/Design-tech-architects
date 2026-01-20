import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed w-full z-[100] transition-all duration-300 px-6 py-4"
      style={{ 
        backgroundColor: scrolled ? 'var(--nav-blur)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        color: scrolled ? 'var(--text-primary)' : '#fff'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <h1 className="text-2xl font-black tracking-tighter" style={{ color: 'var(--accent)' }}>DESIGN TECH</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-bold text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-70 transition-opacity">{link.name}</a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-black/10 dark:bg-white/10">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#booking" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">Booking</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute left-0 w-full bg-white dark:bg-slate-900 p-6 flex flex-col gap-4 shadow-xl text-slate-900 dark:text-white"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold">{link.name}</a>
            ))}
            <button onClick={toggleTheme} className="flex items-center gap-2 font-bold">
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />} Toggle Mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
export default Navbar;
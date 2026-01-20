import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Surendra Villa style
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", // Interior Room
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", // Commercial Hero style
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", // 3D Building
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", // Exterior
  "https://images.unsplash.com/photo-1555636222-cae831e670b3"  // Lakme Studio style
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <span className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 block">Nature Creates Beauty</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
            DESIGN TECH <br/> <span className="text-blue-500 italic">ARCHITECTURE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            From the luxury of <span className="text-white font-bold">Surendra Villa</span> to commercial 
            excellence for Lakme, we craft 3D realities.
          </p>
          <div className="flex gap-6">
            <a href="#projects" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl">View Projects</a>
            <a href="#booking" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">Book Slot</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
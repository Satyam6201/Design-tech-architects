import { motion } from 'framer-motion';
import { FileText, ExternalLink, Box, Home, Layout } from 'lucide-react';

// Yeh 3 Files aapke Assets folder se link hongi
const pdfFiles = [
  {
    name: "DESIGN TECH (1)",
    description: "Complete architectural portfolio featuring Lakme and Hero showroom projects.",
    path: "/src/assets/DESIGN TECH.pdf",
    icon: <Layout className="w-8 h-8" />,
    tag: "Master Portfolio"
  },
  {
    name: "Interiors Design",
    description: "Detailed visualization of the Surendra Villa project and luxury residential concepts.",
    path: "/src/assets/Interiors design.pdf",
    icon: <Home className="w-8 h-8" />,
    tag: "Residential"
  },
  {
    name: "Interiors Design Room",
    description: "Specific room-by-room interior renders and high-end finishing details.",
    path: "/src/assets/Interiors design room.pdf",
    icon: <Box className="w-8 h-8" />,
    tag: "Interior"
  }
];

// Demo Cards (Image + Caption) as requested
const demoCards = [
  {
    title: "The Glass Pavilion",
    caption: "A seamless blend of nature and modern structural engineering.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  {
    title: "Urban Executive Suite",
    caption: "Maximizing space with minimalist aesthetics for corporate hubs.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-black mb-4">Official Catalogs</h2>
          <p className="opacity-70 text-lg">Click to view our detailed architectural and interior PDF documents.</p>
        </motion.div>

        {/* 1. PDF FILE CARDS SECTION */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {pdfFiles.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="themed-card p-8 rounded-[2.5rem] relative group cursor-pointer shadow-xl"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-100 transition-opacity text-blue-600">
                <FileText size={40} />
              </div>
              <span className="bg-blue-600/10 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {file.tag}
              </span>
              <div className="mt-8 mb-6 text-blue-600">
                {file.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{file.name}</h3>
              <p className="opacity-70 mb-8 text-sm leading-relaxed">{file.description}</p>
              
              <a 
                href={file.path} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-blue-600 hover:underline"
              >
                Open PDF Document <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* 2. DEMO IMAGE CARDS SECTION */}
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-3xl font-black italic">Concept Renders</h3>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {demoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: index === 0 ? -1 : 1 }}
              className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[450px]"
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                <h4 className="text-3xl font-bold text-white mb-2">{card.title}</h4>
                <p className="text-gray-300">{card.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
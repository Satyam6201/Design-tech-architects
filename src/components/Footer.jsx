import { motion } from 'framer-motion';
import { 
  Facebook, Instagram, Linkedin, Twitter, 
  MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/Gandhi+Complex+Station+Road+Motihari";
  const phoneNumber = "+916204203526";
  const emailAddress = "info@designtech.com";
  const whatsappNumber = "916204203526";

  const quickLinks = ["About Us", "Services", "Portfolio", "Testimonials", "Careers", "Blog"];
  const services = ["Residential", "Commercial", "Interiors", "Planning", "Turnkey", "Consultation"];

  return (
    <footer className="relative py-12 px-6 border-t overflow-hidden" 
            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-3xl font-black tracking-tighter text-blue-600">
            DESIGNTECH
          </h3>
          <p className="opacity-70 text-xs leading-relaxed font-medium max-w-xs">
            India's premier design and construction firm delivering architectural innovation and world-class craftsmanship.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <motion.a 
                key={i} href="#" 
                whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 transition-all opacity-70"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-blue-600">Company</h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {quickLinks.map(link => (
              <li key={link} className="group flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all">
                <ChevronRight size={12} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                <span className="font-bold text-[11px] uppercase">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-black text-sm mb-6 uppercase tracking-widest text-blue-600">Expertise</h4>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
            {services.map(service => (
              <li key={service} className="group flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all">
                <ChevronRight size={12} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                <span className="font-bold text-[11px] uppercase">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="font-black text-sm mb-2 uppercase tracking-widest text-blue-600">Contact</h4>
          
          <div className="space-y-3">
            <div className="flex gap-4">
              <a href={`tel:${phoneNumber}`} className="p-2 rounded-lg bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Phone size={14} />
              </a>
              <a href={`mailto:${emailAddress}`} className="p-2 rounded-lg bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                <Mail size={14} />
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-green-600/10 text-green-600 hover:bg-green-600 hover:text-white transition-all">
                <MessageCircle size={14} />
              </a>
            </div>

            <motion.a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ y: -3 }}
              className="block p-4 rounded-xl themed-card border-dashed border-2 hover:border-blue-500 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1 text-blue-600">
                <MapPin size={14} />
                <span className="text-[9px] font-black uppercase tracking-widest">Studio Location</span>
              </div>
              <p className="text-[10px] leading-tight opacity-70">
                Gandhi Complex, Station Road, Motihari, Bihar 845401
              </p>
              <div className="mt-2 flex items-center gap-1 text-[9px] font-black text-blue-600 uppercase">
                Navigate <ArrowUpRight size={10} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t flex justify-between items-center opacity-40 text-[10px] font-bold uppercase tracking-[0.2em]" 
           style={{ borderColor: 'var(--border)' }}>
        <p>© {new Date().getFullYear()} DESIGNTECH</p>
        <p>Architectural Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;
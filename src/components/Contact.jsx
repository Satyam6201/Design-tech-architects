import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Gandhi+Complex+Station+Road+Motihari+Bihar";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative Blur background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.span variants={itemVariants} className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Get in Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Ready to Build <br/> Your <span className="text-blue-600 italic">3D Reality?</span>
          </motion.h2>
          
          <div className="space-y-6 mt-6">
            {/* Clickable Location Card */}
            <motion.a 
              variants={itemVariants}
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-blue-600/5 transition-all cursor-pointer border border-transparent hover:border-blue-600/20"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-600/5">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-1">Our Studio</p>
                <p className="font-bold text-lg group-hover:text-blue-600 transition-colors">Gandhi Complex, Motihari, Bihar</p>
              </div>
            </motion.a>

            {/* Clickable Phone Card */}
            <motion.a 
              variants={itemVariants}
              href="tel:+916204203526"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-blue-600/5 transition-all"
            >
              <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-600/5">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-1">Call Experts</p>
                <p className="font-bold text-lg group-hover:text-indigo-600 transition-colors">062042 03526</p>
              </div>
            </motion.a>

            {/* Clickable Email Card */}
            <motion.a 
              variants={itemVariants}
              href="mailto:info@designtech.com"
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-blue-600/5 transition-all"
            >
              <div className="w-16 h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-600/5">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase opacity-40 tracking-widest mb-1">Email Inquiry</p>
                <p className="font-bold text-lg group-hover:text-emerald-600 transition-colors">info@designtech.com</p>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="themed-card p-10 md:p-14 rounded-[4rem] shadow-2xl relative"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}
        >
          {/* Subtle Form Decoration */}
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <Globe size={12} className="animate-spin-slow" /> Online Inquiry Form
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-50 tracking-widest ml-4">Full Name</label>
                <input type="text" placeholder="e.g. John Doe" className="w-full p-5 rounded-3xl border outline-none focus:ring-4 ring-blue-500/10 focus:border-blue-600 transition-all bg-transparent" style={{ borderColor: 'var(--border)' }} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase opacity-50 tracking-widest ml-4">Email Address</label>
                <input type="email" placeholder="name@company.com" className="w-full p-5 rounded-3xl border outline-none focus:ring-4 ring-blue-500/10 focus:border-blue-600 transition-all bg-transparent" style={{ borderColor: 'var(--border)' }} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-50 tracking-widest ml-4">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full p-5 rounded-3xl border outline-none focus:ring-4 ring-blue-500/10 focus:border-blue-600 transition-all bg-transparent" style={{ borderColor: 'var(--border)' }} />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-50 tracking-widest ml-4">Describe Your Project</label>
              <textarea placeholder="Tell us about your 3D design or construction needs..." rows="4" className="w-full p-5 rounded-3xl border outline-none focus:ring-4 ring-blue-500/10 focus:border-blue-600 transition-all bg-transparent" style={{ borderColor: 'var(--border)' }}></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 group"
            >
              Secure My Inquiry <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </form>

          {/* Social Connect feature */}
          <div className="mt-10 pt-8 border-t border-dashed flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
            <span className="text-[10px] font-black uppercase opacity-40">Prefer direct chat?</span>
            <button className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase hover:underline">
              <MessageSquare size={14} /> WhatsApp Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
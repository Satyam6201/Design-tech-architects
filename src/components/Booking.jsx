import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ShieldCheck, Zap, ChevronRight, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleBooking = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <section id="booking" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="themed-card p-8 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Left Side: Info */}
                <div className="space-y-8">
                  <div>
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Priority Access</span>
                    <h2 className="text-5xl font-black tracking-tighter leading-tight mb-6">
                      Reserve Your <br/> <span className="text-blue-600">Construction Slot</span>
                    </h2>
                    <p className="opacity-70 leading-relaxed font-medium">
                      Design Tech handles only a limited number of premium projects annually to ensure world-class quality and focused craftsmanship.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: <ShieldCheck size={18}/>, text: "Guaranteed Completion Timeline" },
                      { icon: <Zap size={18}/>, text: "Instant 3D Concept Review" },
                      { icon: <Calendar size={18}/>, text: "Direct Architect Consultation" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 font-bold text-sm opacity-80">
                        <div className="text-blue-600">{item.icon}</div>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive UI */}
                <div className="bg-gray-50/50 dark:bg-white/5 p-8 rounded-[3rem] border border-dashed border-gray-300 dark:border-gray-700">
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-3 block">Select Project Start Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          className="w-full p-5 rounded-2xl border-2 outline-none bg-white dark:bg-slate-900 focus:border-blue-600 transition-all font-bold"
                          style={{ borderColor: 'var(--border)' }}
                        />
                        <Calendar className="absolute right-5 top-5 opacity-30 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-3 block">Project Type</label>
                      <select className="w-full p-5 rounded-2xl border-2 outline-none bg-white dark:bg-slate-900 focus:border-blue-600 transition-all font-bold appearance-none" style={{ borderColor: 'var(--border)' }}>
                        <option>Luxury Residential</option>
                        <option>Commercial / Retail</option>
                        <option>Interior Renovation</option>
                      </select>
                    </div>

                    <button 
                      onClick={handleBooking}
                      disabled={loading}
                      className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <Clock size={24} />
                        </motion.div>
                      ) : (
                        <>Check Availability <ChevronRight size={20} /></>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] opacity-40 font-bold uppercase tracking-tighter">
                      No commitment required for initial inquiry
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="themed-card p-16 rounded-[4rem] text-center shadow-2xl"
              style={{ backgroundColor: 'var(--card-bg)' }}
            >
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-4xl font-black mb-4">Slot is Available!</h2>
              <p className="opacity-70 mb-10 max-w-md mx-auto">
                Great news! Our team can accommodate your project for the selected timeline. We will contact you within 24 hours.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs"
              >
                Back to Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Booking;
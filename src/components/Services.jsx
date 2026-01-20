import { motion } from 'framer-motion';
import { 
  Ruler, Paintbrush, Building, Layout, 
  Lightbulb, PenTool, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

const services = [
  { 
    title: "Architectural Planning", 
    icon: <Ruler className="w-8 h-8" />, 
    desc: "Masterful 2D/3D blueprints focusing on structural integrity and aesthetic innovation.",
    features: ["Vastu Analysis", "Structural Maps", "Site Supervision"],
    color: "#3b82f6" 
  },
  { 
    title: "Interior Design", 
    icon: <Paintbrush className="w-8 h-8" />, 
    desc: "Bespoke luxury interiors inspired by projects like the iconic Surendra Villa.",
    features: ["Furniture Design", "Material Selection", "Lighting Decor"],
    color: "#6366f1"
  },
  { 
    title: "Commercial Excellence", 
    icon: <Building className="w-8 h-8" />, 
    desc: "World-class retail and corporate spaces for elite brands like Lakme & Hero.",
    features: ["Brand Identity", "Traffic Flow", "Modular Setup"],
    color: "#8b5cf6"
  },
  { 
    title: "Turnkey Solutions", 
    icon: <Layout className="w-8 h-8" />, 
    desc: "Seamless 'Design to Delivery' management. We handle everything from soil to ceiling.",
    features: ["Project Management", "Cost Control", "Timely Delivery"],
    color: "#ec4899"
  },
  { 
    title: "Expert Consultation", 
    icon: <Lightbulb className="w-8 h-8" />, 
    desc: "Professional guidance on land acquisition, legal norms, and architectural feasibility.",
    features: ["Legal Compliance", "Budget Estimation", "Material Quality"],
    color: "#f59e0b"
  },
  { 
    title: "3D Visualisation", 
    icon: <PenTool className="w-8 h-8" />, 
    desc: "Experience your future home before it's built with hyper-realistic 3D walkthroughs.",
    features: ["Virtual Tours", "4K Rendering", "VR Experience"],
    color: "#10b981"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-4">What We Do</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
              Crafting Future <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Living Spaces</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-lg opacity-60 max-w-sm font-medium leading-relaxed"
          >
            We merge nature's beauty with engineering precision to create timeless masterpieces.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -15, 
                rotateX: 2, 
                rotateY: -2,
                transition: { duration: 0.3 } 
              }}
              className="themed-card group p-8 rounded-[3rem] relative shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2"
              style={{ 
                backgroundColor: 'var(--card-bg)', 
                borderColor: 'var(--border)',
                perspective: '1000px'
              }}
            >
              {/* Card Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}
              />

              {/* Icon & Title */}
              <div className="relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-black mb-4 group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-sm opacity-70 leading-relaxed mb-8 h-12">
                  {service.desc}
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-10">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold opacity-80 uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Bottom Link */}
                <div className="flex items-center justify-between pt-6 border-t border-dashed" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Explore Expertise</span>
                  <div className="p-2 rounded-full bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { motion } from "framer-motion";
import { Terminal, Shield, Database, Globe, Cpu, Code, FileText, ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/deep_space_nebula_background_for_website.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Space Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-primary/30 text-primary text-sm font-mono mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM STATUS: ONLINE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            TOMISLAV VRBICIC
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto"
          >
            Spacecraft Controller & Cybersecurity Specialist
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="glass-panel p-6 rounded-lg tech-border flex flex-col items-center hover:bg-white/5 transition-colors group">
              <Globe className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-mono text-sm text-muted-foreground mb-1">CURRENT MISSION</h3>
              <p className="font-bold">EUMETSAT Ops</p>
            </div>
            <div className="glass-panel p-6 rounded-lg tech-border flex flex-col items-center hover:bg-white/5 transition-colors group">
              <Shield className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-mono text-sm text-muted-foreground mb-1">SECURITY LEVEL</h3>
              <p className="font-bold">Cybersec Expert</p>
            </div>
            <div className="glass-panel p-6 rounded-lg tech-border flex flex-col items-center hover:bg-white/5 transition-colors group">
              <Cpu className="w-8 h-8 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-mono text-sm text-muted-foreground mb-1">SYSTEMS</h3>
              <p className="font-bold">Linux / Windows</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

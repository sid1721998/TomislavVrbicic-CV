import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/deep_space_nebula_background_for_website.png";

// Simple satellite/spacecraft SVG component
const Satellite = ({ className, delay = 0, duration = 20 }: { className?: string, delay?: number, duration?: number }) => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    initial={{ x: -100, opacity: 0 }}
    animate={{ 
      x: ["-10%", "110%"],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ 
      duration: duration, 
      ease: "linear", 
      repeat: Infinity,
      delay: delay
    }}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </motion.svg>
);

const SpaceStation = ({ className, delay = 0, duration = 30 }: { className?: string, delay?: number, duration?: number }) => (
  <motion.svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    initial={{ x: "110%", opacity: 0 }}
    animate={{ 
      x: ["110%", "-10%"],
      opacity: [0, 1, 1, 0]
    }}
    transition={{ 
      duration: duration, 
      ease: "linear", 
      repeat: Infinity,
      delay: delay
    }}
  >
     <circle cx="12" cy="12" r="3" />
     <path d="M3 12h6M15 12h6M12 3v6M12 15v6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2" />
  </motion.svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Space Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />
        
        {/* Animated Spacecraft Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <Satellite className="absolute top-1/4 text-primary" delay={0} duration={45} />
          <Satellite className="absolute top-3/4 text-white scale-75" delay={15} duration={60} />
          <SpaceStation className="absolute top-1/3 text-white/50" delay={5} duration={80} />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-0 font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            TOMISLAV VRBICIC
          </motion.h1>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

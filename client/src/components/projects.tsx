import { motion } from "framer-motion";
import { Flame, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section className="py-24 bg-black/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">MISSION PROJECTS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Flame className="w-48 h-48 text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">IN2Flame</h3>
                <span className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20">ACTIVE</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                An advanced Fire Ground Air Control system designed for aerial firefighting coordination. 
                This project integrates real-time data visualization and communication protocols to enhance situational awareness during emergency operations.
                (Part of the FireGroundAirControl initiative).
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Real-time Data", "Mission Control", "Geospatial Mapping"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-muted-foreground border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Note: Since I cannot link to other Replit projects directly, I am leaving this button as a visual element or placeholder for the user to add the real link if they have it public */}
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10" disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Internal Access Only
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

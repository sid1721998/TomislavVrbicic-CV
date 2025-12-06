import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">EDUCATION</h3>
            </motion.div>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-lg border border-white/5">
                <h4 className="font-bold text-lg text-white">High School for Mechanical Technician for CAD</h4>
                <p className="text-primary font-mono text-sm">01/2016 - 01/2020</p>
                <p className="text-muted-foreground mt-2">Specialized in Computer Aided Design and technical mechanics.</p>
              </div>
              
              <div className="glass-panel p-6 rounded-lg border border-white/5">
                <h4 className="font-bold text-lg text-white">General Education Gymnasium</h4>
                <p className="text-muted-foreground text-sm">KSC Don Bosco Zepce</p>
                <p className="text-primary font-mono text-sm">01/2012 - 01/2016</p>
              </div>
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">COMMUNICATION</h3>
            </motion.div>

            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center justify-between">
                <span className="font-bold text-white">English</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono border border-primary/30">PROFICIENT</span>
              </div>
              <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center justify-between">
                <span className="font-bold text-white">German</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-muted-foreground text-xs font-mono border border-white/10">INTERMEDIATE</span>
              </div>
              <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center justify-between">
                <span className="font-bold text-white">Italian</span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-muted-foreground text-xs font-mono border border-white/10">BEGINNER</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

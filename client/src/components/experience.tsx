import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Spacecraft Controller",
    company: "Serco Services GmbH | EUMETSAT",
    location: "Darmstadt, Germany",
    period: "05/2023 - Present",
    description: "Operating and monitoring spacecraft systems for Meteosat Satellites. Executing real-time flight operations, telemetry analysis, and anomaly resolution. Collaborating with engineering teams to optimize performance and troubleshoot system anomalies.",
    active: true
  },
  {
    id: 2,
    role: "Cybersecurity Bootcamp Participant",
    company: "Code Labs Academy",
    location: "Remote",
    period: "07/2024 - 01/2025",
    description: "Completed comprehensive program covering cybersecurity fundamentals, penetration testing, and DFIR. Gained expertise in Windows/Linux security, vulnerability scanning, and exploitation.",
    active: false
  },
  {
    id: 3,
    role: "Computer Numerical Control Programmer",
    company: "prostoria ltd",
    location: "Sveti Kriz Zacretje, Croatia",
    period: "06/2021 - 04/2023",
    description: "Specialized in CNC programming and operations for manufacturing precision components.",
    active: false
  },
  {
    id: 4,
    role: "Computer Aided Design Programmer",
    company: "Saga d.o.o.",
    location: "Žepče, Bosnia and Herzegovina",
    period: "01/2017 - 01/2022",
    description: "CAD programming and design implementation for technical projects.",
    active: false
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">MISSION LOG</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${exp.active ? 'bg-primary border-primary shadow-[0_0_10px_rgba(0,255,255,0.5)]' : 'bg-background border-muted-foreground'} transition-colors`} />

              <div className="glass-panel p-6 rounded-lg border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary/80 font-mono text-sm mt-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

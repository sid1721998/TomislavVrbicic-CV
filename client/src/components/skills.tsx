import { motion } from "framer-motion";
import { Terminal, Lock, Server, Cpu, ShieldCheck, Code, Network, Binary } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    skills: ["Penetration Testing", "Vulnerability Assessment", "Incident Response", "Digital Forensics", "Threat Modelling", "SIEM (Snort, Splunk)", "Cryptography", "Linux/Windows Security"]
  },
  {
    title: "Technical Ops",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Spacecraft Operations", "Telemetry Analysis", "Root Cause Analysis", "Anomaly Resolution", "Real-time Decision Making", "Mission Planning"]
  },
  {
    title: "Tools & Systems",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Linux (Kali, Ubuntu)", "Python", "Bash Scripting", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "Git"]
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">TECHNICAL ARSENAL</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

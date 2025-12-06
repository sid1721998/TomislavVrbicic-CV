import { motion } from "framer-motion";
import { Award, FileCheck } from "lucide-react";

const certifications = [
  { name: "SOC Analyst Learning Path", issuer: "LetsDefend", year: "2025" },
  { name: "Cyber Security Bootcamp", issuer: "CertifyMe", year: "2025" },
  { name: "Linux Privilege Escalation", issuer: "TCM Security", year: "2025" },
  { name: "Practical Ethical Hacking", issuer: "TCM Security", year: "2025" },
  { name: "Windows Privilege Escalation", issuer: "TCM Security", year: "2025" },
  { name: "Junior Penetration Tester (eJPT)", issuer: "INE", year: "2024" },
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", year: "2024" },
  { name: "Security Principles", issuer: "ISC2", year: "2024" }
];

export default function Certifications() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">CERTIFICATIONS</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-card/20 hover:bg-card/40 transition-colors"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">{cert.name}</h4>
                <p className="text-xs font-mono text-muted-foreground">{cert.issuer} • {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

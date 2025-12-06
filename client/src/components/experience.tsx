import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Spacecraft Controller",
    company: "Serco Services GmbH | EUMETSAT",
    location: "Darmstadt, Germany",
    period: "05/2023 - Present",
    details: [
      "Operated and monitored spacecraft systems, ensuring mission success and operational safety.",
      "Executed real-time flight operations, telemetry analysis, and anomaly resolution for Meteosat Satellites.",
      "Part of the Meteosat Third Generation (MTG) operations team.",
      "Performed system validation tests for MTG-I1 and MTG-S1 satellites.",
      "Collaborated with engineering teams to optimize spacecraft performance and troubleshoot system anomalies.",
      "Developed and implemented operational procedures to enhance mission efficiency and reliability.",
      "Worked in high-pressure environments, making critical decisions in real-time to ensure spacecraft safety.",
      "Currently transitioning to the Low Earth Orbit (LEO) program."
    ],
    active: true
  },
  {
    id: 2,
    role: "Cybersecurity Bootcamp Participant",
    company: "Code Labs Academy",
    location: "Remote",
    period: "07/2024 - 01/2025",
    details: [
      "Completed a comprehensive program covering cybersecurity fundamentals, penetration testing, and Digital Forensics & Incident Response (DFIR).",
      "Developed expertise in Windows and Linux security, file permissions, system utilities, and networking protocols.",
      "Gained hands-on experience in penetration testing, including reconnaissance, vulnerability scanning (Nmap, Hydra), exploitation, privilege escalation, and web security (OWASP).",
      "Conducted cryptographic analysis and hash cracking, applying real-world attack and defense methodologies.",
      "Learned digital forensics techniques, including Windows/Linux forensics, malware analysis, network packet inspection (Wireshark), and incident response strategies.",
      "Worked with defensive security tools, such as IDS/IPS (Snort), YARA rule writing, MITRE ATT&CK, honeypots, and threat intelligence frameworks."
    ],
    active: false
  },
  {
    id: 3,
    role: "Computer Numerical Control Programmer",
    company: "prostoria ltd",
    location: "Sveti Kriz Zacretje, Croatia",
    period: "06/2021 - 04/2023",
    details: [
      "Specialized in Computer Numerical Control (CNC) programming for precision manufacturing.",
      "Operated and maintained CNC machinery to produce high-quality components.",
      "Optimized machining processes to improve efficiency and reduce waste."
    ],
    active: false
  },
  {
    id: 4,
    role: "Computer Aided Design Programmer",
    company: "Saga d.o.o.",
    location: "Žepče, Bosnia and Herzegovina",
    period: "01/2017 - 01/2022",
    details: [
      "Designed detailed technical drawings and schematics using Computer-Aided Design (CAD) software.",
      "Collaborated with engineering teams to translate concepts into technical specifications.",
      "Managed design documentation and revision control for ongoing projects."
    ],
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
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">EXPERIENCE</h2>
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
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
                
                <ul className="space-y-2 list-disc list-inside text-muted-foreground leading-relaxed marker:text-primary/50">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="pl-2 -indent-2">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Education from "@/components/education";
import Projects from "@/components/projects";
import { Mail, Linkedin, Download, Github, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Hero />
      
      <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
        <div className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl bg-card/40">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Open to Work</h3>
            <p className="text-muted-foreground">Open to opportunities in Space Operations & Cybersecurity</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
             <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="/TomislavVrbicic_CV.pdf" download target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://github.com/sid1721998" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/tomislav-v-bb10ba270/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button className="bg-primary text-background hover:bg-primary/90 font-bold" asChild>
              <a href="mailto:tomislavvrbicic@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />

      <footer className="py-12 border-t border-white/5 bg-black/40 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 mb-8 text-muted-foreground">
            <a href="mailto:tomislavvrbicic@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              tomislavvrbicic@gmail.com
            </a>
            <a href="tel:+491782026523" className="hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +491782026523
            </a>
          </div>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Tomislav Vrbicic. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

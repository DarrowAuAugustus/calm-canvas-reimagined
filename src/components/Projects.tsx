import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "WhatsApp Real Estate CRM",
      description: "Built an n8n workflow that receives WhatsApp messages, classifies intent with GPT-4, extracts budget/location/timeline, and updates Airtable. Replies to customers using OpenAI-generated natural language.",
      tech: ["n8n", "OpenAI", "Twilio", "Airtable"],
      image: "🏡",
      github: "#",
      live: "#"
    },
    {
      title: "Self-Hosted Portfolio on VPS",
      description: "Deployed this portfolio using Docker + Caddy on a VPS with Tailscale for remote access and SSL via Caddy reverse proxy.",
      tech: ["Docker", "Caddy", "Tailscale", "DevOps"],
      image: "🚀",
      github: "#",
      live: "https://thesaad.dev"
    },
    {
      title: "Automation Onboarding Toolkit",
      description: "Created a modular onboarding system for new automation clients that collects business info via WhatsApp, structures it in Airtable, and prompts manual review for final config.",
      tech: ["Client Intake", "n8n", "OpenAI", "WhatsApp"],
      image: "⚡",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real automation projects that save time and streamline workflows for businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card floating-card rounded-2xl p-6 group transition-all duration-700 ease-smooth ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-border/20">
                <div className="text-8xl opacity-40">{project.image}</div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 ink-link text-muted-foreground hover:text-primary"
                  >
                    <Github size={18} />
                    View Flow
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 ink-link text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={18} />
                    See Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
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
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Design System",
      description: "Comprehensive design system and component library for consistent user experiences across multiple products. Includes documentation, accessibility guidelines, and automated testing.",
      tech: ["React", "Storybook", "Figma", "CSS-in-JS"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and customizable widgets. Built for scalability with efficient data visualization and export capabilities.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for clean code and thoughtful design.
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
              <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🎨</div>
                </div>
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
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 ink-link text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={18} />
                    Live Demo
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
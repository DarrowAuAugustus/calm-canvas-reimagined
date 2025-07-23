import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      description: "Modern web technologies including React, Next.js, TypeScript, and Node.js. Always learning and adapting to new tools."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Creating intuitive user experiences with attention to detail, accessibility, and aesthetic harmony."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing for speed, scalability, and user experience. Building fast, reliable, and maintainable applications."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-800 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a creative developer who bridges the gap between design and functionality. 
                With a passion for clean code and thoughtful user experiences, I craft digital 
                solutions that are both beautiful and performant.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing 
                to open source projects, or experimenting with emerging technologies. I believe 
                in continuous learning and sharing knowledge with the community.
              </p>
              <p>
                Based in the digital realm, working with clients and teams worldwide to bring 
                ideas to life through carefully crafted web experiences.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-800 delay-200 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`floating-card p-6 rounded-2xl transition-all duration-600 ease-smooth ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
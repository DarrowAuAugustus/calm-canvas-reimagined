import { useEffect, useRef, useState } from 'react';
import { Building2, Brain, Wrench, MapPin } from 'lucide-react';

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

  const timeline = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Project Manager at LSEG",
      description: "Network infrastructure focus"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Pivot to automation builder",
      description: "Discovering the power of AI workflows"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Learning n8n, AI, self-hosting",
      description: "Building technical expertise"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Now helping Dubai businesses",
      description: "Automating processes intelligently"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 transition-all duration-800 ease-smooth ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            My Journey
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-800 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I specialize in turning repetitive tasks into intelligent, AI-powered flows — 
                all while keeping things minimal and elegant. I believe automation is only useful 
                if it's invisible.
              </p>
              <p>
                From managing network infrastructure at the London Stock Exchange to building 
                WhatsApp automation for Dubai real estate, I've learned that the best technology 
                feels effortless to use.
              </p>
              <p>
                Currently helping businesses in Dubai automate their processes with tools like 
                n8n, OpenAI, and custom workflows that actually save time instead of creating 
                more complexity.
              </p>
            </div>
          </div>
          
          <div className={`transition-all duration-800 delay-200 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`floating-card p-6 rounded-2xl transition-all duration-600 ease-smooth flex items-center gap-4 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="text-primary p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="ml-auto text-accent text-2xl">→</div>
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
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 tracking-tight">
            Saad
            <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground mt-2 font-normal">
              Creative Developer
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Crafting digital experiences with clean code and thoughtful design.
            Building bridges between imagination and reality.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="ink-link text-lg font-medium text-foreground hover:text-primary px-6 py-3"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn-soft px-8 py-3 rounded-full text-foreground hover:text-primary font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ease-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-float" />
      </div>
    </section>
  );
};

export default Hero;
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
      {/* Soft background with paper texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className={`transition-all duration-1000 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 text-foreground">
            Building automation that{' '}
            <span className="relative inline-block">
              actually saves you time
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-1000 delay-1000 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}></div>
            </span>
            .
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            I'm <span className="text-foreground font-medium">Saad</span> — former project manager at the London Stock Exchange, 
            now building AI and automation workflows for real estate and SMBs in Dubai using tools like n8n and OpenAI.
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="floating-card px-8 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all hover:shadow-lg"
            >
              Explore Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full text-lg font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Work With Me
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
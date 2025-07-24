import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import CursorTrail from '../components/CursorTrail';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/30 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Saad</h3>
              <p className="text-muted-foreground">
                Building automation that actually saves you time.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary ink-link">GitHub</a>
                <a href="#" className="block text-muted-foreground hover:text-primary ink-link">LinkedIn</a>
                <a href="mailto:hello@thesaad.dev" className="block text-muted-foreground hover:text-primary ink-link">Email</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Built With</h4>
              <p className="text-muted-foreground text-sm">
                Lovable + OpenAI + Self-hosted on VPS
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/20 text-center">
            <p className="text-muted-foreground">
              © 2024 Saad. Crafted with care and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ease-smooth ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Let's build something intelligent together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business processes? Let's discuss how AI can save you time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-800 delay-200 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="floating-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">hello@thesaad.dev</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Reach out for project inquiries, collaborations, or just to say hello.
              </p>
            </div>
            
            <div className="floating-card p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 text-accent rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">Chat directly</p>
                </div>
              </div>
              <a href="#" className="text-muted-foreground hover:text-primary ink-link">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`transition-all duration-800 delay-400 ease-smooth ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="floating-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-soft px-6 py-3 rounded-lg font-medium text-foreground hover:text-primary flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
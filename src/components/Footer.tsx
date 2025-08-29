import { Flame, Heart, Instagram, Facebook, Mail, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Flame className="h-8 w-8 text-primary flicker" />
                <span className="font-festival text-2xl font-bold fire-text">
                  Lampu Festival
                </span>
              </div>
              <p className="text-foreground/70 mb-4 max-w-md">
                A transformative gathering inspired by Burning Man principles, 
                celebrating radical self-expression, community, and conscious connection 
                in the mystical heart of Bali.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com/lampufestival" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/lampufestival" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://t.me/lampufestival" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Users className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@lampufestival.com"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Festival</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors duration-300">
                    About & Values
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-primary transition-colors duration-300">
                    Program & Location
                  </a>
                </li>
                <li>
                  <a href="#tickets" className="hover:text-primary transition-colors duration-300">
                    Tickets & Passes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors duration-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-primary mb-4">Community</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="mailto:art@lampufestival.com" className="hover:text-primary transition-colors duration-300">
                    Artist Applications
                  </a>
                </li>
                <li>
                  <a href="mailto:volunteer@lampufestival.com" className="hover:text-primary transition-colors duration-300">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="https://t.me/lampufestival" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                    Join Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Burning Man Principles */}
          <div className="border-t border-primary/20 pt-8 mb-8">
            <h3 className="font-festival text-lg font-semibold text-center mb-4 fire-text">
              Our Guiding Principles
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70">
              <span>Radical Inclusion</span>
              <span>•</span>
              <span>Gifting</span>
              <span>•</span>
              <span>Decommodification</span>
              <span>•</span>
              <span>Self-Reliance</span>
              <span>•</span>
              <span>Self-Expression</span>
              <span>•</span>
              <span>Communal Effort</span>
              <span>•</span>
              <span>Civic Responsibility</span>
              <span>•</span>
              <span>Leave No Trace</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span>© {currentYear} Lampu Festival.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary flicker" />
              <span>in community.</span>
            </div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/code-of-conduct" className="hover:text-primary transition-colors duration-300">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
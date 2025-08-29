import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import heroImage from '@/assets/hero-festival.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
      </div>

      {/* Glowing particles overlay */}
      <div className="absolute inset-0 particles" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 page-enter">
        <h1 className="font-festival text-6xl md:text-8xl font-bold mb-6 fire-text flicker">
          Lampu Festival
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
          A celebration of radical self-expression, community, and light
        </p>

        {/* Festival Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Late February 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Bali, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Community Gathering</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Get Your Tickets
          </Button>
          <Button variant="ember" size="xl">
            Learn More
          </Button>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 italic">
            "In the spirit of Burning Man, we gather to create a temporary community 
            dedicated to radical inclusion, gifting, decommodification, and leaving no trace."
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
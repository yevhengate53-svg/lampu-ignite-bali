import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Gift, Recycle, Eye, Star, Globe, Lightbulb } from 'lucide-react';
import communityImage from '@/assets/community-fire.jpg';

const AboutSection = () => {
  const principles = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Radical Inclusion",
      description: "Everyone is welcome. We are committed to being a community where all people can feel safe to express their authentic selves."
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Gifting",
      description: "We seek to create a gift economy where goods and services are freely given without expectation of return."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Decommodification",
      description: "Our community seeks to create social environments unmediated by commercial sponsorships, transactions, or advertising."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Radical Self-reliance",
      description: "We encourage individuals to discover, exercise and rely on their inner resources."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Radical Self-expression",
      description: "No one other than the individual or a collaborating group can determine its content. It is offered as a gift to others."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Communal Effort",
      description: "Our community values creative cooperation and collaboration. We strive to produce, promote and protect social networks."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Civic Responsibility",
      description: "We value civil society. Community members who organize events should assume responsibility for public welfare."
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Leave No Trace",
      description: "Our community respects the environment. We are committed to leaving no physical trace of our activities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-ember">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-festival text-4xl md:text-6xl font-bold mb-6 fire-text">
              Our Story & Values
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Lampu Festival brings the transformative spirit of Burning Man to the mystical 
              island of Bali, creating a unique fusion of radical self-expression and Balinese wisdom.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="font-festival text-3xl font-semibold text-primary">
                The Birth of Light
              </h3>
              <p className="text-lg text-foreground/80">
                Born from the desire to create a transformative experience that honors both 
                the revolutionary spirit of Burning Man and the sacred traditions of Bali, 
                Lampu Festival represents a new paradigm of conscious celebration.
              </p>
              <p className="text-lg text-foreground/80">
                In the ancient language of Sanskrit, "Lampu" means light - not just the 
                physical illumination of fire and lanterns, but the inner light of awareness, 
                creativity, and connection that ignites when like-minded souls gather in authentic community.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="italic text-foreground/90">
                  "We are not just creating an event, we are nurturing a movement of conscious 
                  beings who dare to live authentically, love unconditionally, and create fearlessly."
                </p>
                <p className="text-sm text-primary mt-2">- Festival Founders</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Community gathering around fire" 
                className="rounded-lg shadow-ember hover:shadow-fire transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-lg opacity-50" />
            </div>
          </div>

          {/* Burning Man Principles */}
          <div className="mb-16">
            <h3 className="font-festival text-3xl font-semibold text-center mb-12 fire-text">
              Our Guiding Principles
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="ember-card group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-primary group-hover:text-primary-glow transition-colors duration-300">
                      {principle.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Testimonials */}
          <div className="text-center">
            <h3 className="font-festival text-3xl font-semibold mb-12 fire-text">
              Voices from Our Community
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Lampu Festival changed my life. It showed me what true community feels like.",
                  author: "Maya K., Artist"
                },
                {
                  quote: "The perfect blend of Burning Man spirit and Balinese magic. Transformative.",
                  author: "David R., Filmmaker"
                },
                {
                  quote: "I found my tribe here. The connections made are deeper than anything I've experienced.",
                  author: "Luna S., Healer"
                }
              ].map((testimonial, index) => (
                <div key={index} className="ember-card p-6">
                  <p className="italic text-foreground/80 mb-4">"{testimonial.quote}"</p>
                  <p className="text-primary font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
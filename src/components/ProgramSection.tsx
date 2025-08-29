import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Calendar, Music, Palette, Heart, Zap } from 'lucide-react';

const ProgramSection = () => {
  const programHighlights = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fire Ceremonies",
      time: "Sunset & Midnight",
      description: "Sacred fire rituals blending Balinese traditions with radical self-expression"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Sound Journeys",
      time: "Evening",
      description: "Immersive electronic music experiences and live performances"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Art Installations",
      time: "All Day",
      description: "Interactive art pieces created by the community for the community"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healing Circles",
      time: "Morning & Afternoon",
      description: "Workshops on personal growth, meditation, and conscious connection"
    }
  ];

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-festival text-4xl md:text-6xl font-bold mb-6 fire-text">
              Program & Location
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Three days of transformative experiences in the heart of Bali's spiritual landscape
            </p>
          </div>

          {/* Location Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="font-festival text-3xl font-semibold text-primary">
                Sacred Grounds
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ubud Sacred Valley</h4>
                  <p className="text-foreground/80">
                    Nestled in the lush rice terraces of Ubud, our festival ground sits on 
                    sacred land blessed by Balinese ceremonies. The venue offers stunning 
                    views of ancient temples and tropical forests.
                  </p>
                </div>
              </div>
              
              <div className="ember-card p-6">
                <h4 className="font-semibold text-lg mb-4 text-primary">Getting There</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• 45 minutes from Ngurah Rai International Airport</li>
                  <li>• 20 minutes from central Ubud</li>
                  <li>• Shuttle service available from main hotels</li>
                  <li>• Parking available on-site</li>
                </ul>
              </div>
            </div>

            <div className="ember-card p-8">
              <h4 className="font-festival text-2xl font-semibold mb-6 text-center fire-text">
                Festival Schedule
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Friday, Feb 28</span>
                  <span className="text-muted-foreground">- Opening Ceremony</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Saturday, Mar 1</span>
                  <span className="text-muted-foreground">- Main Festival Day</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Sunday, Mar 2</span>
                  <span className="text-muted-foreground">- Closing Ritual</span>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="fire" size="lg">
                  Download Full Schedule
                </Button>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <h3 className="font-festival text-3xl font-semibold text-center mb-12 fire-text">
              Experience Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programHighlights.map((item, index) => (
                <Card key={index} className="ember-card group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                        {item.icon}
                      </div>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.time}</span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Participation Guidelines */}
          <div className="ember-card p-8 text-center">
            <h3 className="font-festival text-2xl font-semibold mb-6 fire-text">
              Come as You Are, Leave as You Were Meant to Be
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              This is not a spectator event. You are invited to participate, create, and contribute 
              to our temporary community. Bring your art, your music, your authentic self.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="festival" size="lg">
                Register to Participate
              </Button>
              <Button variant="ember" size="lg">
                Artist Applications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Heart, Users } from 'lucide-react';

const TicketsSection = () => {
  const ticketTypes = [
    {
      name: "Seeker",
      price: "$150",
      icon: <Heart className="h-8 w-8" />,
      description: "Perfect for first-time festival goers",
      features: [
        "3-day festival access",
        "Welcome gift bag",
        "Basic camping area",
        "Shared meal experiences",
        "Workshop participation"
      ],
      popular: false
    },
    {
      name: "Creator",
      price: "$250",
      icon: <Star className="h-8 w-8" />,
      description: "For active community contributors",
      features: [
        "All Seeker benefits",
        "Priority workshop access",
        "Art supply access",
        "VIP camping area",
        "Artist networking events",
        "Exclusive morning ceremonies"
      ],
      popular: true
    },
    {
      name: "Guardian",
      price: "$400",
      icon: <Users className="h-8 w-8" />,
      description: "Support the festival community",
      features: [
        "All Creator benefits",
        "Private meeting spaces",
        "Mentor circle access",
        "Festival planning participation",
        "Lifetime community membership",
        "Guest passes (2)"
      ],
      popular: false
    }
  ];

  return (
    <section id="tickets" className="py-20 bg-gradient-ember">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-festival text-4xl md:text-6xl font-bold mb-6 fire-text">
              Join Our Community
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Choose your level of participation and become part of something extraordinary. 
              Every ticket holder is a valued member of our temporary city.
            </p>
          </div>

          {/* Ticket Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ticketTypes.map((ticket, index) => (
              <Card 
                key={index} 
                className={`ember-card relative ${ticket.popular ? 'border-primary shadow-fire' : ''}`}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-fire text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-primary">
                    {ticket.icon}
                  </div>
                  <CardTitle className="text-2xl font-festival">{ticket.name}</CardTitle>
                  <div className="text-4xl font-bold fire-text mb-2">{ticket.price}</div>
                  <p className="text-muted-foreground">{ticket.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={ticket.popular ? "fire" : "festival"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Your {ticket.name} Pass
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment & Registration Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="ember-card p-6">
              <h3 className="font-festival text-xl font-semibold mb-4 text-primary">
                Payment Options
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Secure online payment via Stripe</li>
                <li>• Installment plans available</li>
                <li>• Cryptocurrency accepted</li>
                <li>• Group discounts for 5+ people</li>
                <li>• Scholarship applications open</li>
              </ul>
            </div>
            
            <div className="ember-card p-6">
              <h3 className="font-festival text-xl font-semibold mb-4 text-primary">
                What's Included
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• All festival activities & workshops</li>
                <li>• Camping space (bring your tent)</li>
                <li>• Communal kitchen access</li>
                <li>• Sacred ceremony participation</li>
                <li>• Art supply sharing library</li>
              </ul>
            </div>
          </div>

          {/* Early Bird & Group Pricing */}
          <div className="text-center ember-card p-8">
            <h3 className="font-festival text-2xl font-semibold mb-4 fire-text">
              Limited Time Offers
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Early Bird Special</h4>
                <p className="text-foreground/80">
                  Save 25% when you register before December 31st. 
                  Price increases January 1st.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Group Discount</h4>
                <p className="text-foreground/80">
                  Bring your tribe! Groups of 5+ save 15% on all ticket types. 
                  Community discounts available.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Register Now & Save
              </Button>
              <Button variant="ember" size="xl">
                Group Registration
              </Button>
            </div>
          </div>

          {/* Terms Notice */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              By purchasing tickets, you agree to our community guidelines and commitment to Leave No Trace principles. 
              Refund policy and terms available at checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
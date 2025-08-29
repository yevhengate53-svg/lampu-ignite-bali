import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I bring to the festival?",
      answer: "Essential items include: camping gear (tent, sleeping bag), reusable water bottle, sunscreen, comfortable clothing for day and warm layers for night, flashlight/headlamp, any personal medications, and an open heart. We'll provide a detailed packing list upon registration. Remember, this is a gift economy - consider bringing something to share with the community!"
    },
    {
      question: "Is this suitable for first-time festival goers?",
      answer: "Absolutely! Our community is built on radical inclusion. First-timers are welcomed with open arms and guided through the experience. We offer orientation sessions, buddy systems, and gentle introduction workshops. Many of our most active community members discovered their tribe at their first Lampu Festival."
    },
    {
      question: "What are the participation requirements?",
      answer: "Lampu Festival operates on Burning Man principles - this means active participation rather than passive spectatorship. You're encouraged to contribute through art, performance, volunteering, or simply being your authentic self. No specific skills required, just willingness to engage with the community and respect our principles."
    },
    {
      question: "How does the gift economy work?",
      answer: "Nothing is sold at Lampu Festival except tickets, ice, and basic supplies. Instead, we practice gifting - offering goods, services, or experiences without expectation of return. This creates deeper connections and abundance for all. You might gift a massage, teach a skill, share food, or create art for others."
    },
    {
      question: "What about food and water?",
      answer: "We provide access to clean drinking water throughout the festival. Food is handled through our communal kitchen system and gift economy. Many participants organize group meals, cooking circles, and food sharing. You can also bring your own food. Alcohol is not sold but can be gifted responsibly among adults."
    },
    {
      question: "Is it safe for solo travelers?",
      answer: "Yes! Many participants come solo and find it's one of the best ways to fully immerse in the experience. Our community strongly values consent, safety, and mutual care. We have dedicated safety volunteers, clear community agreements, and a culture of looking out for each other."
    },
    {
      question: "What's the camping situation?",
      answer: "You'll need to bring your own tent and camping gear. We provide designated camping areas based on your ticket type, access to bathroom facilities, and shower areas. Some participants organize 'camps' - themed community areas where like-minded people cluster together."
    },
    {
      question: "How do I get from the airport to the festival?",
      answer: "We provide shuttle services from Ngurah Rai Airport and central Ubud. Schedule and booking details are sent to registered participants. You can also arrange private transport, rent a scooter, or coordinate rides with other attendees through our community forum."
    },
    {
      question: "What if I can't afford a ticket?",
      answer: "We believe in radical inclusion and offer various support options: work-exchange programs, payment plans, local resident discounts, and need-based scholarships. We also seek sponsors and community support to help make the festival accessible. Contact us to discuss options."
    },
    {
      question: "How do you handle environmental impact?",
      answer: "Leave No Trace is one of our core principles. We implement comprehensive waste reduction, recycling, and composting programs. Solar power, biodegradable materials, and minimal packaging are priorities. Participants commit to leaving the land better than they found it and carrying out all personal waste."
    },
    {
      question: "Can I bring children?",
      answer: "Families with children are welcome! We're a multigenerational community that values the wisdom and joy children bring. We offer family camping areas, child-friendly activities, and community childcare support. Parents remain responsible for their children's safety and wellbeing."
    },
    {
      question: "What about medical emergencies?",
      answer: "We have qualified medical volunteers on-site and established protocols for emergencies. The nearest hospital is 20 minutes away. We strongly recommend travel insurance and bringing any personal medications. Our intake process includes health questionnaires to ensure we can support everyone safely."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-festival text-4xl md:text-6xl font-bold mb-6 fire-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/80">
              Everything you need to know about joining our transformative community
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="ember-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-primary/20"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-300 py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions? */}
          <div className="text-center mt-12">
            <div className="ember-card p-8">
              <h3 className="font-festival text-2xl font-semibold mb-4 fire-text">
                Still Have Questions?
              </h3>
              <p className="text-foreground/80 mb-6">
                Our community is here to help! Reach out and connect with fellow participants 
                or ask our organizing team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-fire text-primary-foreground rounded-md font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a 
                  href="https://t.me/lampufestival" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 ember-card border border-primary/20 hover:border-primary/40 rounded-md font-semibold transition-all duration-300"
                >
                  Join Telegram Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Send, Instagram, Facebook, Users } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integration needed with backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-ember">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-festival text-4xl md:text-6xl font-bold mb-6 fire-text">
              Connect With Us
            </h2>
            <p className="text-xl text-foreground/80">
              Join our community, ask questions, or share your vision for the festival
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="ember-card">
                <CardHeader>
                  <CardTitle className="font-festival text-2xl fire-text flex items-center gap-2">
                    <Mail className="h-6 w-6" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your thoughts, questions, or ideas..."
                        rows={6}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button type="submit" variant="fire" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Community Links */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <Card className="ember-card">
                <CardHeader>
                  <CardTitle className="font-festival text-xl fire-text flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Ask Our AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 mb-4">
                    Get instant answers to common questions about the festival, 
                    activities, and logistics.
                  </p>
                  <Button variant="festival" size="sm" className="w-full">
                    Chat Now
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Powered by ChatGPT integration
                  </p>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="ember-card">
                <CardHeader>
                  <CardTitle className="font-festival text-xl fire-text">
                    Stay Connected
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="newsletter" className="block text-sm font-medium mb-2">
                      Newsletter Email
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="newsletter"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                      <Button variant="fire" size="sm">
                        Join
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm font-medium mb-3">Join Our Community</p>
                    <div className="flex gap-2">
                      <Button variant="ember" size="sm" className="flex-1">
                        <Users className="h-4 w-4 mr-1" />
                        Telegram
                      </Button>
                      <Button variant="ember" size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="ember-card">
                <CardHeader>
                  <CardTitle className="font-festival text-xl fire-text">
                    Follow Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="ember" size="sm" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                    <Button variant="ember" size="sm" className="flex items-center gap-2">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    @lampufestival | Tag us in your posts!
                  </p>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="ember-card">
                <CardHeader>
                  <CardTitle className="font-festival text-xl fire-text">
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">General Inquiries:</span>
                    <p className="text-foreground/80">hello@lampufestival.com</p>
                  </div>
                  <div>
                    <span className="font-medium">Artist Applications:</span>
                    <p className="text-foreground/80">art@lampufestival.com</p>
                  </div>
                  <div>
                    <span className="font-medium">Volunteer Coordination:</span>
                    <p className="text-foreground/80">volunteer@lampufestival.com</p>
                  </div>
                  <div>
                    <span className="font-medium">Media & Press:</span>
                    <p className="text-foreground/80">media@lampufestival.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
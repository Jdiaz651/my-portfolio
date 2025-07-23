import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      username: "@yourusername"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      username: "/in/yourusername"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or opportunity..." 
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect with me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <a 
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {social.username}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/resume" target="_blank">
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      View GitHub Profile
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
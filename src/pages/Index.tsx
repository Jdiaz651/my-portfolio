import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Rocket,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      icon: Code,
      title: "XR & Full-Stack Developer",
      description:
        "Building mixed reality and full-stack web apps using Unity, React, Firebase, and more.",
    },
    {
      icon: Rocket,
      title: "Demo-Ready Projects",
      description:
        "Contributed to civic tech apps, VR tours, and mobile price tools demoed across FIU and beyond.",
    },
    {
      icon: Users,
      title: "Team & Community Builder",
      description:
        "Led ops for WiTCON and contributed to INIT, helping bring student tech projects to life.",
    },
  ];

  const featuredSkills = [
    "React",
    "React Native",
    "Unity",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Python",
    "C#",
    "Node.js",
    "Meta XR SDK",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              XR & Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hey, I'm{" "}
              <span className="font-semibold text-foreground">Jaime Diaz</span>{" "}
              — I craft immersive XR experiences and scalable web solutions with
              a focus on accessibility, creativity, and real-world impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6 mb-16">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/jaimehamdiaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/jaimehamdiaz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/resume">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I enjoy blending creativity and engineering to build meaningful,
              responsive, and immersive products.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {featuredSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Bring</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From interactive apps to infrastructure at scale, I bring a mix of
              technical depth, team collaboration, and community involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              I’m actively seeking software engineering or XR development
              internships and new-grad roles. If you're looking for someone who
              blends technical versatility with creative problem-solving, I’d
              love to hear from you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">Explore My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

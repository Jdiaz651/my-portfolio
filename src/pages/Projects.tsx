import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Skyreach",
      description:
        "A 2D platformer where players use a grappling hook to climb a vertical tower and dodge hazards. Built in Unity and showcased with INIT, a student-led tech club.",
      technologies: [
        "Unity",
        "C#",
        "2D Physics",
        "Custom Movement",
        "Level Design",
      ],
      githubUrl: "https://github.com/pistolPeterson/Project-SkyReach",
      image: "/gifs/skyreach.gif",
    },
    {
      title: "PriceHub",
      description:
        "A mobile-friendly tool for finding the lowest prices on products across retailers. Built with a React Native frontend and Firebase backend, optimized for quick product scanning and result comparison.",
      technologies: ["React Native", "Firebase", "Tailwind CSS", "Expo"],
      githubUrl: "https://github.com/luis-c465/price-checker",
      image: "/gifs/pricehub.gif",
    },
    {
      title: "PlantSafe XR",
      description:
        "A gamified Mixed Reality app that uses AI to scan houseplants, track their health, and generate a care routine. Developed for XRBootcamp’s showcase project.",
      technologies: ["Unity", "Meta XR SDK", "C#", "AI APIs"],
      githubUrl: "https://github.com/Jaedon-L/PlantIdentifierMR",
      image: "/gifs/plantsafe.gif",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are a few immersive and impactful projects I've worked on
            recently, combining full-stack skills with XR and product thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* GIF Preview */}
              <div className="aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

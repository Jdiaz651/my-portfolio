import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Resume = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Frontend": ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
    "Backend": ["Node.js", "Express", "Django", "Spring Boot", "RESTful APIs"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Firebase", "Jest", "Webpack"]
  };

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews"
      ]
    },
    {
      title: "Software Engineer",
      company: "Startup XYZ",
      location: "Remote",
      duration: "Jun 2020 - Dec 2021",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Developed RESTful APIs with Node.js and Express",
        "Collaborated with cross-functional teams in Agile environment"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "Boston, MA",
      duration: "2016 - 2020",
      gpa: "3.8/4.0"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <div className="flex justify-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Skills */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{job.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{job.company} • {job.location}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.school} • {edu.location}</p>
                    <p className="text-sm">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
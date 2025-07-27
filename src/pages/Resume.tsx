import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Resume = () => {
  const skills = {
    "Programming Languages": [
      "Python",
      "JavaScript",
      "TypeScript",
      "C#",
      "HTML",
      "CSS",
    ],
    Frontend: ["React", "React Native", "Tailwind CSS"],
    Backend: ["Node.js", "RESTful APIs", "Firebase", "Web Scraping"],
    "XR / Game Development": [
      "Unity",
      "Meta XR SDK",
      "MRUK",
      "Photosphere Rendering",
      "VR Interaction",
    ],
    "Tools & Technologies": ["Git", "Lucide Icons"],
  };

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "Breakthrough Tech Miami",
      location: "Miami, FL",
      duration: "Aug 2024 – Dec 2024",
      description: [
        "Built a full-stack civic tech web app to display local government agendas using Python and React",
        "Automated data scraping pipelines and integrated RESTful APIs to fetch and display structured data",
        "Used AI models to convert legal documents into plain language for public accessibility",
      ],
    },
    {
      title: "Cybersecurity Analyst Intern",
      company: "United Data Technologies",
      location: "Miami, FL",
      duration: "Jun 2023 – Aug 2023",
      description: [
        "Identified and remediated critical system vulnerabilities across enterprise IT infrastructure",
        "Triaged cybersecurity incidents, executing rapid risk mitigation protocols",
        "Provided cybersecurity training to non-technical teams, fostering a security-first culture",
      ],
    },
    {
      title: "Operations & Infrastructure Lead",
      company: "Women in Computer Science (FIU Student Tech Org)",
      location: "Miami, FL",
      duration: "Aug 2022 – Mar 2025",
      description: [
        "Led A/V setup and logistics for WiTCON, Florida's largest student-run Women in Tech conference",
        "Managed live technical operations, contingency planning, and multi-room support for 3 annual events",
        "Organized workshops and helped increase inclusivity in tech outreach and education",
      ],
    },
    {
      title: "Software Engineer, Project Contributor",
      company: "INIT (FIU Student Tech Org)",
      location: "Miami, FL",
      duration: "Aug 2022 – Present",
      description: [
        "Collaborated on student-led teams to build production-ready mobile and VR projects using React Native and Unity",
        "Contributed to PriceHub, PawsUp VR Tour, and OPERATION: SKYREACH! platformer game",
        "Participated in agile team sprints, code reviews, and public demo showcases",
      ],
    },
    {
      title: "XR Developer",
      company: "XRBootcamp",
      location: "Remote",
      duration: "Feb 2025 – Jul 2025",
      description: [
        "Developed immersive Mixed Reality apps using Unity, MRUK, and Meta XR SDKs for the Quest 3",
        "Built and demoed capstone projects: Build-A-Way XR and Plant-Safe XR with hand tracking and AI",
        "Focused on 3D physics systems, gesture controls, and natural world anchoring for real-world interactions",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Florida International University",
      location: "Miami, FL",
      duration: "Aug 2021 – Dec 2025",
      gpa: "3.5",
    },
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
                <span>jdiaz651@outlook.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (786) 602-3052</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Miami, FL</span>
              </div>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              <a href="/Jaime_Diaz_Resume.pdf" download target="_blank">
                Download PDF
              </a>
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
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
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
                    <p className="text-muted-foreground mb-2">
                      {job.company} • {job.location}
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm">
                          {item}
                        </li>
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
                    <p className="text-muted-foreground">
                      {edu.school} • {edu.location}
                    </p>
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

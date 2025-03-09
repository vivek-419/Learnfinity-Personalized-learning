
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Code, Users, PanelLeft, Dices, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

const Features = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('');

  const features = [
    {
      icon: Brain,
      title: "AI Skill Clustering",
      description: "Our advanced algorithms analyze your skills and learning patterns to group you with similar learners, creating personalized recommendations."
    },
    {
      icon: PanelLeft,
      title: "Adaptive Learning Paths",
      description: "Dynamic learning journeys that evolve based on your progress, interests, and career goals, ensuring you're always learning what matters most."
    },
    {
      icon: Code,
      title: "Project Workspace",
      description: "A collaborative environment where you can build real projects, receive feedback, and showcase your work to potential employers."
    },
    {
      icon: Dices,
      title: "Personalized DSA Questions",
      description: "Practice data structures and algorithms with questions tailored to your skill level and learning needs."
    },
    {
      icon: BookOpen,
      title: "Framework Learning Hub",
      description: "Dedicated sections for learning popular frameworks and technologies with hands-on exercises and real-world applications."
    },
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Connect with like-minded learners, form study groups, and collaborate on projects to enhance your learning experience."
    }
  ];

  // Dummy DSA questions for the dialog
  const dsaQuestions = [
    {
      id: 1,
      difficulty: "Easy",
      title: "Two Sum",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      id: 2,
      difficulty: "Medium",
      title: "Reverse Linked List",
      description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      example: "Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]"
    },
    {
      id: 3,
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      example: "Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]"
    }
  ];

  // Dummy data for learning paths
  const learningPaths = [
    {
      title: "Web Development",
      progress: 65,
      steps: ["HTML/CSS Fundamentals", "JavaScript Basics", "Frontend Frameworks", "Backend Development", "Deployment"]
    },
    {
      title: "Data Science",
      progress: 40,
      steps: ["Python Basics", "Data Analysis", "Machine Learning", "Deep Learning", "Data Visualization"]
    },
    {
      title: "Mobile Development",
      progress: 25,
      steps: ["React Native Basics", "State Management", "API Integration", "Native Modules", "App Store Deployment"]
    }
  ];

  // Dummy project workspace data
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce site with product listing, cart, and checkout.",
      contributors: 8,
      techStack: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Weather App",
      description: "Real-time weather information with location-based forecasts.",
      contributors: 4,
      techStack: ["React", "OpenWeather API", "Geolocation API"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task tracker with team management features.",
      contributors: 12,
      techStack: ["React", "Redux", "Firebase"]
    }
  ];

  // Dummy frameworks data
  const frameworks = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      popularity: 95,
      difficulty: "Moderate",
      courses: 48
    },
    {
      name: "Angular",
      description: "Platform for building mobile and desktop web applications",
      popularity: 82,
      difficulty: "High",
      courses: 36
    },
    {
      name: "Vue.js",
      description: "Progressive JavaScript framework for building UIs",
      popularity: 78,
      difficulty: "Low",
      courses: 29
    },
    {
      name: "Next.js",
      description: "React framework for production with server-side rendering",
      popularity: 88,
      difficulty: "Moderate",
      courses: 22
    }
  ];

  // Dummy peer recommendations
  const peerRecommendations = [
    {
      name: "Sarah Johnson",
      skills: ["React", "Node.js", "MongoDB"],
      availableHours: "Evenings (PST)",
      matchScore: 92
    },
    {
      name: "Miguel Sanchez",
      skills: ["Python", "Machine Learning", "Data Visualization"],
      availableHours: "Weekends",
      matchScore: 87
    },
    {
      name: "Li Wei",
      skills: ["Angular", "TypeScript", "Firebase"],
      availableHours: "Mornings (EST)",
      matchScore: 81
    }
  ];

  // Dummy AI clustering insights
  const clusteringInsights = [
    {
      clusterName: "Frontend Specialists",
      members: 342,
      commonSkills: ["React", "CSS", "JavaScript"],
      learningTrends: ["State management", "Performance optimization", "Accessibility"]
    },
    {
      clusterName: "Data Scientists",
      members: 278,
      commonSkills: ["Python", "Statistics", "ML Algorithms"],
      learningTrends: ["Deep learning", "Natural language processing", "Big data"]
    },
    {
      clusterName: "Full Stack Developers",
      members: 512,
      commonSkills: ["JavaScript", "Node.js", "SQL"],
      learningTrends: ["Microservices", "GraphQL", "Cloud deployment"]
    }
  ];

  const handleFeatureClick = (title) => {
    setSelectedFeature(title);
    setOpenDialog(true);
  };

  const renderDialogContent = () => {
    switch(selectedFeature) {
      case "AI Skill Clustering":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Skill Clustering
              </DialogTitle>
              <DialogDescription>
                Our advanced algorithms analyze your skills and learning patterns to group you with similar learners.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <h3 className="text-md font-semibold">Your Current Skill Clusters</h3>
              {clusteringInsights.map((cluster, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{cluster.clusterName}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {cluster.members} members
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm mb-2">Common skills: {cluster.commonSkills.join(", ")}</p>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-2">Learning Trends in This Cluster:</h4>
                    <ul className="list-disc pl-5 text-sm text-foreground/80">
                      {cluster.learningTrends.map((trend, i) => (
                        <li key={i}>{trend}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                See More Insights
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      case "Adaptive Learning Paths":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <PanelLeft className="h-5 w-5 text-primary" />
                Adaptive Learning Paths
              </DialogTitle>
              <DialogDescription>
                Dynamic learning journeys that evolve based on your progress and career goals.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <h3 className="text-md font-semibold">Your Current Learning Paths</h3>
              {learningPaths.map((path, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{path.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {path.progress}% complete
                    </span>
                  </div>
                  <div className="mb-3">
                    <Progress value={path.progress} className="h-2 bg-white/10" />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium mb-2">Path Milestones:</h4>
                    <ol className="list-decimal pl-5 text-sm text-foreground/80">
                      {path.steps.map((step, i) => (
                        <li key={i} className={i < path.progress / 20 ? "text-primary" : ""}>
                          {step} {i < path.progress / 20 && "✓"}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                Explore New Paths
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      case "Project Workspace":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Project Workspace
              </DialogTitle>
              <DialogDescription>
                A collaborative environment where you can build real projects and receive feedback.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <h3 className="text-md font-semibold">Popular Project Collaborations</h3>
              {projects.map((project, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {project.contributors} contributors
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs bg-white/10 text-foreground/70 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button size="sm">
                      Join Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                Create New Project
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      case "Personalized DSA Questions":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Dices className="h-5 w-5 text-primary" />
                Personalized DSA Questions
              </DialogTitle>
              <DialogDescription>
                Practice data structures and algorithms with questions tailored to your skill level.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              {dsaQuestions.map((question) => (
                <div key={question.id} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{question.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      question.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                      question.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {question.difficulty}
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm mb-3">{question.description}</p>
                  <div className="bg-black/20 p-3 rounded-md">
                    <pre className="text-xs text-foreground/90 whitespace-pre-wrap">{question.example}</pre>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">
                      View Hints
                    </Button>
                    <Button size="sm">
                      Solve Problem
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                Get New Questions
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      case "Framework Learning Hub":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Framework Learning Hub
              </DialogTitle>
              <DialogDescription>
                Dedicated sections for learning popular frameworks with hands-on exercises.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <h3 className="text-md font-semibold">Popular Frameworks</h3>
              {frameworks.map((framework, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{framework.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {framework.courses} courses
                    </span>
                  </div>
                  <p className="text-foreground/80 text-sm mb-3">{framework.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs text-foreground/60">Popularity</p>
                      <Progress value={framework.popularity} className="h-2 bg-white/10 mt-1" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60">Difficulty: {framework.difficulty}</p>
                      <div className="flex gap-1 mt-1">
                        <span className={`h-2 rounded-full flex-1 ${framework.difficulty === "Low" ? "bg-green-500" : "bg-white/10"}`}></span>
                        <span className={`h-2 rounded-full flex-1 ${framework.difficulty === "Moderate" ? "bg-yellow-500" : "bg-white/10"}`}></span>
                        <span className={`h-2 rounded-full flex-1 ${framework.difficulty === "High" ? "bg-red-500" : "bg-white/10"}`}></span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button size="sm">
                      Explore Courses
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                See All Frameworks
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      case "Peer Collaboration":
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Peer Collaboration
              </DialogTitle>
              <DialogDescription>
                Connect with like-minded learners and form study groups to enhance your learning.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <h3 className="text-md font-semibold">Recommended Learning Partners</h3>
              {peerRecommendations.map((peer, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/60 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{peer.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {peer.matchScore}% match
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-foreground/60">Skills</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {peer.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-white/10 text-foreground/70 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60">Availability</p>
                      <p className="text-sm mt-1">{peer.availableHours}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button size="sm">
                      Connect
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                Find More Peers
              </Button>
              <DialogClose asChild>
                <Button variant="ghost">Close</Button>
              </DialogClose>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            LearnInfinity combines cutting-edge AI with proven learning methodologies to create a unique educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`glass border-white/20 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer ${feature.title === selectedFeature ? "border-primary/30" : ""}`}
              onClick={() => handleFeatureClick(feature.title)}
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Feature Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-2xl glass border-white/20">
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;

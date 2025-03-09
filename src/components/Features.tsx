
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Code, Users, PanelLeft, Dices, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

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

  const handleFeatureClick = (title) => {
    if (title === "Personalized DSA Questions") {
      setSelectedFeature(title);
      setOpenDialog(true);
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
              className={`glass border-white/20 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer ${feature.title === "Personalized DSA Questions" ? "border-primary/30" : ""}`}
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

      {/* DSA Questions Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-2xl glass border-white/20">
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
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;

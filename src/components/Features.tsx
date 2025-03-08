
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Code, Users, PanelLeft, Dices } from 'lucide-react';

const Features = () => {
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
              className="glass border-white/20 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
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
    </section>
  );
};

export default Features;

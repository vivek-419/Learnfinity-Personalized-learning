
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Compass, LineChart, Users, MessageSquare, Code } from 'lucide-react';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "AI-Powered Learning Paths",
      description: "Our algorithms analyze your learning style, pace, and goals to create a personalized curriculum that evolves with you."
    },
    {
      icon: <LineChart className="w-10 h-10 text-primary" />,
      title: "Skill Gap Analysis",
      description: "Identify your strengths and areas for improvement with our comprehensive assessment system."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Peer Learning Networks",
      description: "Connect with other learners who complement your skills for collaborative projects and knowledge sharing."
    },
    {
      icon: <Compass className="w-10 h-10 text-primary" />,
      title: "Career Trajectory Mapping",
      description: "Visualize your learning journey and see how each course connects to your long-term career goals."
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "AI Tutoring Assistance",
      description: "Get 24/7 help from our AI tutors who can answer questions, provide explanations, and guide your learning."
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Hands-On Project Learning",
      description: "Apply your knowledge to real-world projects with automated feedback and guidance."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Features</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Discover how Learnfinity transforms education through AI-powered personalization and community collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass border border-white/20 shadow-subtle hover:shadow-elevated transition-all duration-300 rounded-xl p-6"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your learning experience?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/register')}
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/about')}
                className="border-primary/20 text-primary"
              >
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

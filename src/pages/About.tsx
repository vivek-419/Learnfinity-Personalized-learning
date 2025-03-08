
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Learnfinity</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-foreground/80 mb-6">
              Learnfinity is on a mission to transform education through AI-powered personalized learning experiences. We believe that everyone deserves access to high-quality education tailored to their unique learning style, pace, and career goals.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
            <p className="mb-6">
              Founded in 2023, Learnfinity began with a simple observation: traditional one-size-fits-all education doesn't work for most people. Our team of educators, engineers, and AI specialists came together to create a learning platform that adapts to each learner rather than forcing learners to adapt to a rigid system.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h2>
            <p className="mb-6">
              We use advanced AI algorithms to analyze learning patterns, identify knowledge gaps, and create personalized learning paths that evolve as you progress. Our system doesn't just teach content—it teaches you how to learn more effectively.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
            <ul className="space-y-2 mb-6">
              <li><strong>Accessibility:</strong> Education should be available to everyone, regardless of background or circumstances.</li>
              <li><strong>Adaptability:</strong> Learning experiences should adapt to the learner, not the other way around.</li>
              <li><strong>Community:</strong> Learning happens best in collaborative environments with peer support.</li>
              <li><strong>Continuous Improvement:</strong> Our platform gets smarter with every interaction, just like our learners.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Join Us</h2>
            <p className="mb-8">
              Whether you're a student, professional, educator, or lifelong learner, Learnfinity has something for you. Join our community and discover a more effective, engaging, and personalized way to learn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/register')}
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/features')}
                className="border-primary/20 text-primary"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

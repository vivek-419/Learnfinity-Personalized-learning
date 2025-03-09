
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.speed || '20';
        const moveX = x * parseInt(speed);
        const moveY = y * parseInt(speed);
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLearnMore = () => {
    navigate('/features');
  };

  return (
    <div 
      ref={heroRef}
      className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl parallax" data-speed="10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl parallax" data-speed="15"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full blur-sm animate-pulse-soft parallax" data-speed="25"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-400 rounded-full blur-sm animate-pulse-soft parallax" data-speed="20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">AI-Powered Learning</span> for the{" "}
              <span className="relative">
                Future
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Personalized learning paths, intelligent skill clustering, and collaborative workspaces—all powered by cutting-edge AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-colors text-base h-12 px-6"
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-primary h-12 px-6"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div 
            className={`glass border border-white/20 shadow-elevated rounded-xl overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}
          >
            <div className="relative w-full pt-[56.25%]">
              <div className="absolute inset-0 bg-white/5 p-5 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="w-40 h-6 rounded-full bg-white/10"></div>
                </div>
                
                <div className="flex flex-1 gap-5">
                  <div className="w-1/4 flex flex-col space-y-5">
                    <div className="h-10 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="h-8 bg-white/10 rounded-lg"></div>
                    <div className="flex-1"></div>
                    <div className="h-20 bg-white/5 rounded-lg"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col space-y-5">
                    <div className="h-10 bg-white/5 rounded-lg"></div>
                    <div className="flex-1 bg-white/5 rounded-lg p-3">
                      <div className="h-6 w-1/3 bg-white/10 rounded-md mb-3"></div>
                      <div className="h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-md mb-5"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-white/10 rounded-md"></div>
                        <div className="h-24 bg-white/10 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

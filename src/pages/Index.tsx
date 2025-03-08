
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SkillAssessment from '@/components/SkillAssessment';
import LearningPath from '@/components/LearningPath';
import ProjectWorkspace from '@/components/ProjectWorkspace';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <SkillAssessment />
      <LearningPath />
      <ProjectWorkspace />
      <Footer />
    </div>
  );
};

export default Index;

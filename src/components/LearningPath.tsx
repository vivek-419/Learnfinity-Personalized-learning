
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Code, FileText, Stars, Video } from 'lucide-react';

const courseData = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    description: "Learn the fundamentals of machine learning algorithms and applications.",
    duration: "8 weeks",
    difficulty: "Beginner",
    completionRate: 0,
    resources: [
      { type: "video", count: 24 },
      { type: "reading", count: 12 },
      { type: "practice", count: 8 }
    ],
    tags: ["AI", "Data Science", "Python"],
    isRecommended: true
  },
  {
    id: 2,
    title: "Advanced Data Structures",
    description: "Master complex data structures and algorithms for efficient problem solving.",
    duration: "6 weeks",
    difficulty: "Intermediate",
    completionRate: 15,
    resources: [
      { type: "video", count: 18 },
      { type: "reading", count: 9 },
      { type: "practice", count: 12 }
    ],
    tags: ["Algorithms", "Programming", "Computer Science"],
    isRecommended: true
  },
  {
    id: 3,
    title: "Cloud Architecture Fundamentals",
    description: "Learn to design, implement and manage cloud-based solutions.",
    duration: "10 weeks",
    difficulty: "Intermediate",
    completionRate: 0,
    resources: [
      { type: "video", count: 32 },
      { type: "reading", count: 15 },
      { type: "practice", count: 10 }
    ],
    tags: ["Cloud", "AWS", "DevOps"],
    isRecommended: false
  }
];

const LearningPath = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showingAll, setShowingAll] = useState(false);
  const [courses, setCourses] = useState(courseData.filter(course => course.isRecommended));

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('learning-path');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowAll = () => {
    setShowingAll(true);
    setCourses(courseData);
  };

  return (
    <section id="learning-path" className="py-20 bg-gradient-to-b from-background to-blue-50/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Personalized Learning Path</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            AI-generated recommendations based on your skill assessment, learning patterns, and career goals.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="glass border-white/20 shadow-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription className="mt-2">{course.description}</CardDescription>
                    </div>
                    {course.isRecommended && (
                      <div className="h-6 w-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <Stars size={14} className="text-primary" />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white/10 rounded-md p-2 text-center">
                      <p className="text-xs text-foreground/60">Duration</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div className="bg-white/10 rounded-md p-2 text-center">
                      <p className="text-xs text-foreground/60">Difficulty</p>
                      <p className="font-medium">{course.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-3">
                      <div className="flex items-center text-foreground/60 text-xs">
                        <Video size={14} className="mr-1" /> {course.resources[0].count}
                      </div>
                      <div className="flex items-center text-foreground/60 text-xs">
                        <FileText size={14} className="mr-1" /> {course.resources[1].count}
                      </div>
                      <div className="flex items-center text-foreground/60 text-xs">
                        <Code size={14} className="mr-1" /> {course.resources[2].count}
                      </div>
                    </div>
                    <div className="text-xs font-medium">
                      {course.completionRate > 0 ? `${course.completionRate}% complete` : 'Not started'}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/10 hover:bg-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full flex items-center justify-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20">
                    {course.completionRate > 0 ? 'Continue Learning' : 'Start Course'}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {!showingAll && (
            <div className="mt-10 text-center">
              <Button 
                onClick={handleShowAll} 
                variant="outline" 
                className="border-primary/20 text-primary"
              >
                Show All Recommended Courses
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;


import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const questionData = [
  {
    id: 1,
    question: "Which of the following best describes a RESTful API?",
    options: [
      "A programming language for building web applications",
      "A stateless architecture for client-server communication",
      "A database management system",
      "A framework for building desktop applications"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the primary purpose of machine learning?",
    options: [
      "To create human-like robots",
      "To enable computers to learn from data without explicit programming",
      "To improve hardware performance",
      "To replace human workers"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which data structure would be most efficient for implementing a priority queue?",
    options: [
      "Array",
      "Linked List",
      "Heap",
      "Hash Table"
    ],
    correctAnswer: 2
  }
];

const SkillAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    completed: boolean;
    strengths: string[];
    suggestions: string[];
  }>({
    completed: false,
    strengths: [],
    suggestions: []
  });
  const navigate = useNavigate();

  const currentQuestion = questionData[currentQuestionIndex];

  useEffect(() => {
    // Update progress
    setProgress(((currentQuestionIndex) / questionData.length) * 100);
  }, [currentQuestionIndex]);

  const handleOptionSelect = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Complete the assessment
      setResults({
        completed: true,
        strengths: ["Data Structures", "API Design"],
        suggestions: ["Machine Learning Fundamentals", "Cloud Architecture"]
      });
      setProgress(100);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const handleViewLearningPath = () => {
    toast.success("Assessment completed! Redirecting to your personalized learning path");
    // Scroll to learning path section or navigate to dedicated page
    const learningPathSection = document.getElementById('learning-path');
    if (learningPathSection) {
      learningPathSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/dashboard');
    }
  };

  // Simulated typing effect
  const [analysisText, setAnalysisText] = useState("");
  const fullAnalysisText = "Analyzing your responses and building your skill profile...";
  
  useEffect(() => {
    if (results.completed && analysisText.length < fullAnalysisText.length) {
      const timer = setTimeout(() => {
        setAnalysisText(fullAnalysisText.substring(0, analysisText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [results.completed, analysisText]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Skill Assessment</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our AI-powered assessment identifies your strengths and learning opportunities.
            </p>
          </div>

          <Card className="glass border-white/20 shadow-elevated overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl">
                  {results.completed ? "Assessment Complete" : `Question ${currentQuestionIndex + 1} of ${questionData.length}`}
                </CardTitle>
              </div>
              <Progress value={progress} className="h-1.5 bg-white/10" />
            </CardHeader>
            
            <CardContent className="pt-4">
              {!results.completed ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          className={`w-full text-left p-3 rounded-lg transition-all flex items-start ${
                            selectedOption === index 
                              ? isSubmitted 
                                ? index === currentQuestion.correctAnswer 
                                  ? "bg-green-500/10 border border-green-500/30"
                                  : "bg-red-500/10 border border-red-500/30" 
                                : "bg-primary/10 border border-primary/30"
                              : "bg-white/5 hover:bg-white/10 border border-white/10"
                          }`}
                          onClick={() => handleOptionSelect(index)}
                          disabled={isSubmitted}
                        >
                          <span className="flex-1">{option}</span>
                          {isSubmitted && index === currentQuestion.correctAnswer && (
                            <Check size={18} className="text-green-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    {!isSubmitted ? (
                      <Button 
                        onClick={handleSubmit} 
                        disabled={selectedOption === null}
                        className="bg-primary hover:bg-primary/90 transition-colors"
                      >
                        Submit Answer
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleNext} 
                        className="bg-primary hover:bg-primary/90 transition-colors"
                      >
                        {currentQuestionIndex < questionData.length - 1 ? (
                          <>Next Question <ChevronRight size={16} className="ml-1" /></>
                        ) : (
                          <>Complete Assessment <ChevronRight size={16} className="ml-1" /></>
                        )}
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="py-4">
                  {analysisText.length < fullAnalysisText.length ? (
                    <div className="flex flex-col items-center justify-center py-10">
                      <div className="mb-4 relative">
                        <div className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
                        <div className="w-16 h-16 border-4 border-t-transparent border-r-primary/30 border-b-transparent border-l-transparent rounded-full absolute top-0 left-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '6s'}}></div>
                      </div>
                      <p className="text-foreground/70">{analysisText}<span className="animate-pulse">|</span></p>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <div className="bg-white/5 rounded-lg p-4 mb-6">
                        <h4 className="font-medium mb-3">Your Strengths</h4>
                        <ul className="space-y-2">
                          {results.strengths.map((strength, index) => (
                            <li key={index} className="flex items-center text-green-500">
                              <Check size={16} className="mr-2 flex-shrink-0" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-4 mb-8">
                        <h4 className="font-medium mb-3">Recommended Focus Areas</h4>
                        <ul className="space-y-2">
                          {results.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-center text-blue-400">
                              <ArrowRight size={16} className="mr-2 flex-shrink-0" />
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 transition-colors"
                        onClick={handleViewLearningPath}
                      >
                        View Your Personalized Learning Path
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessment;

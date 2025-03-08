
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, BookOpen, Code, FileText, GraduationCap, Menu, MessageSquare, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      progress: 45,
      lastAccessed: "2 days ago",
      nextLesson: "Supervised vs. Unsupervised Learning"
    },
    {
      id: 2,
      title: "Advanced Data Structures",
      progress: 23,
      lastAccessed: "Yesterday",
      nextLesson: "B-Trees and Red-Black Trees"
    },
    {
      id: 3,
      title: "Web Development with React",
      progress: 78,
      lastAccessed: "3 hours ago",
      nextLesson: "State Management with Redux"
    }
  ];

  const recommendedPeers = [
    { id: 1, name: "Alex Chen", skills: ["Machine Learning", "Python"], match: 92 },
    { id: 2, name: "Maya Patel", skills: ["Web Development", "React"], match: 88 },
    { id: 3, name: "Jordan Smith", skills: ["Data Science", "Statistics"], match: 85 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 transform glass border-r border-white/20 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-bold text-lg">LearnInfinity</span>
            </Link>
            <button 
              className="md:hidden" 
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex-1 py-6 px-4">
            <ul className="space-y-1">
              <li>
                <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
                  <GraduationCap size={18} className="mr-2" /> Dashboard
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-foreground/70 hover:text-foreground">
                  <BookOpen size={18} className="mr-2" /> My Courses
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-foreground/70 hover:text-foreground">
                  <Code size={18} className="mr-2" /> Projects
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-foreground/70 hover:text-foreground">
                  <MessageSquare size={18} className="mr-2" /> Discussions
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start text-foreground/70 hover:text-foreground">
                  <Users size={18} className="mr-2" /> Network
                </Button>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 mt-auto">
            <Card className="bg-primary/5 border border-primary/10">
              <CardContent className="p-4">
                <h3 className="font-medium text-sm mb-2">AI Skill Analysis</h3>
                <p className="text-xs text-foreground/70 mb-3">
                  Complete your skill assessment to get personalized recommendations.
                </p>
                <Button variant="outline" size="sm" className="w-full text-xs border-primary/20 text-primary">
                  View Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 md:px-6 md:ml-0">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <button 
              className="p-2 rounded-lg hover:bg-gray-200" 
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-bold text-lg">LearnInfinity</span>
            </Link>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>

          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-foreground/70">Continue your learning journey where you left off.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass border-white/20 shadow-subtle">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Learning Progress</CardTitle>
                <CardDescription>Your overall learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-3xl font-bold">62%</span>
                  <span className="text-sm text-foreground/60">+5% this week</span>
                </div>
                <Progress value={62} className="h-2 bg-white/10" />
              </CardContent>
            </Card>
            
            <Card className="glass border-white/20 shadow-subtle">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Skill Mastery</CardTitle>
                <CardDescription>Top skills being developed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Machine Learning</span>
                      <span>68%</span>
                    </div>
                    <Progress value={68} className="h-2 bg-white/10" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Web Development</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2 bg-white/10" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Structures</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2 bg-white/10" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass border-white/20 shadow-subtle">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Activity Stats</CardTitle>
                <CardDescription>Your learning activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <h4 className="text-sm text-foreground/60 mb-1">Current Streak</h4>
                    <p className="text-2xl font-bold">12 days</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <h4 className="text-sm text-foreground/60 mb-1">Projects</h4>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <h4 className="text-sm text-foreground/60 mb-1">Hours</h4>
                    <p className="text-2xl font-bold">48</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <h4 className="text-sm text-foreground/60 mb-1">Rank</h4>
                    <p className="text-2xl font-bold">#25</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="courses" className="mb-8">
            <TabsList className="bg-white/10 mb-6">
              <TabsTrigger value="courses" className="data-[state=active]:bg-white/20">
                <BookOpen size={16} className="mr-2" /> My Courses
              </TabsTrigger>
              <TabsTrigger value="network" className="data-[state=active]:bg-white/20">
                <Users size={16} className="mr-2" /> Network
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="courses" className="mt-0">
              <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                  <Card key={course.id} className="glass border-white/20 shadow-subtle hover:shadow-elevated transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>Last accessed: {course.lastAccessed}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2 bg-white/10" />
                      </div>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="text-foreground/70">Next:</span>
                        <span className="font-medium">{course.nextLesson}</span>
                      </div>
                      <Button className="w-full text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20">
                        Continue <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="network" className="mt-0">
              <h2 className="text-xl font-bold mb-4">Recommended Peers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedPeers.map(peer => (
                  <Card key={peer.id} className="glass border-white/20 shadow-subtle hover:shadow-elevated transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="font-medium">{peer.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{peer.name}</CardTitle>
                          <CardDescription>{peer.match}% skill match</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {peer.skills.map((skill, index) => (
                          <span key={index} className="text-xs bg-white/10 text-foreground/70 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20">
                          Connect
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="glass border-white/20 shadow-subtle mb-8">
            <CardHeader>
              <CardTitle>Weekly Learning Summary</CardTitle>
              <CardDescription>Your learning activity for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full bg-white/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground/60 mb-2">Chart visualization will appear here</p>
                  <p className="text-sm text-foreground/40">(Placeholder for visualization)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass border-white/20 shadow-subtle">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Live Coding Session</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Tomorrow</span>
                </div>
                <CardDescription>Building a Real-time Chat App with WebSockets</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Join senior engineer Marcus Chen for a hands-on coding session. Perfect for intermediate web developers.
                </p>
                <Button variant="outline" className="w-full">
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
            
            <Card className="glass border-white/20 shadow-subtle">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Tech Career Panel</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">In 3 days</span>
                </div>
                <CardDescription>Navigating Your Path in AI and Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  Hear from industry professionals at Google, Microsoft, and OpenAI about career opportunities.
                </p>
                <Button variant="outline" className="w-full">
                  Add to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, FileCode, Play, Save, Users } from 'lucide-react';

const ProjectWorkspace = () => {
  const [code, setCode] = useState(`function calculateSkillMatch(userSkills, projectRequirements) {
  let matchScore = 0;
  
  // Calculate skill overlap
  for (const skill of userSkills) {
    if (projectRequirements.includes(skill.name)) {
      matchScore += skill.level / 10;
    }
  }
  
  // Normalize score
  return Math.min(matchScore / projectRequirements.length, 1) * 100;
}`);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern bg-dots opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Collaborative Project Workspace</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Work on hands-on projects, solve real-world problems, and collaborate with peers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass border-white/20 shadow-elevated overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3">
                    <FileCode size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Skill Matching Algorithm</h3>
                    <p className="text-sm text-foreground/60">JavaScript • Last edited 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs border-2 border-white">JD</div>
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs border-2 border-white">MK</div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-white">+2</div>
                  </div>
                  <Button variant="outline" size="sm" className="border-primary/20 text-primary">
                    <Users size={14} className="mr-1" /> Invite
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="code" className="w-full">
                <TabsList className="bg-white/10 mb-6">
                  <TabsTrigger value="code" className="data-[state=active]:bg-white/20">
                    <Code size={14} className="mr-2" /> Code Editor
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="data-[state=active]:bg-white/20">
                    <Play size={14} className="mr-2" /> Preview
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="code" className="mt-0">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-white/70 hover:text-white">
                          <Save size={14} className="mr-1" /> Save
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <pre className="text-left">
                        <code className="text-white/90 font-mono text-sm whitespace-pre-wrap">
                          {code.split('\n').map((line, i) => (
                            <div key={i} className="flex">
                              <span className="inline-block w-8 text-white/40 select-none">{i + 1}</span>
                              <span>{line}</span>
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="preview" className="mt-0">
                  <div className="bg-white rounded-lg p-6 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 relative mx-auto w-16 h-16">
                        <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">Calculate Skill Match</h3>
                      <p className="text-gray-600">Current match score: 78%</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass border-white/20 shadow-subtle hover:shadow-elevated transition-all">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Collaborative Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Real-time code collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Integrated version control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">In-browser code execution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-white/20 shadow-subtle hover:shadow-elevated transition-all">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Featured Projects</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">AI-powered chatbot</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Full-stack web application</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground/80">Data analysis dashboard</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectWorkspace;

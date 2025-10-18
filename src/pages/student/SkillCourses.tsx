import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Sparkles, TrendingUp, Target, Brain, CheckCircle, Star, Trophy, Zap, PlayCircle, Filter, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const mockCourses = [
  {
    id: 1,
    title: 'Advanced React Development',
    provider: 'Coursera',
    duration: '6 weeks',
    level: 'Intermediate',
    progress: 65,
    aiRecommended: true,
    skillGap: 'React Hooks & Performance',
    rating: 4.8,
    students: 15240,
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    provider: 'edX',
    duration: '8 weeks',
    level: 'Beginner',
    progress: 0,
    aiRecommended: true,
    skillGap: 'Data Science',
    rating: 4.9,
    students: 28500,
    category: 'AI/ML',
  },
  {
    id: 3,
    title: 'Cloud Architecture with AWS',
    provider: 'Udemy',
    duration: '4 weeks',
    level: 'Advanced',
    progress: 30,
    aiRecommended: false,
    skillGap: null,
    rating: 4.7,
    students: 12800,
    category: 'Cloud',
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    provider: 'Udacity',
    duration: '12 weeks',
    level: 'Intermediate',
    progress: 0,
    aiRecommended: true,
    skillGap: 'Backend Development',
    rating: 4.8,
    students: 18600,
    category: 'Full Stack',
  },
  {
    id: 5,
    title: 'Blockchain Fundamentals',
    provider: 'Coursera',
    duration: '5 weeks',
    level: 'Beginner',
    progress: 15,
    aiRecommended: true,
    skillGap: 'Emerging Tech',
    rating: 4.6,
    students: 9200,
    category: 'Blockchain',
  },
  {
    id: 6,
    title: 'UI/UX Design Principles',
    provider: 'Udemy',
    duration: '6 weeks',
    level: 'Beginner',
    progress: 0,
    aiRecommended: false,
    skillGap: null,
    rating: 4.7,
    students: 14300,
    category: 'Design',
  },
];

export default function SkillCourses() {
  const enrolledCourses = mockCourses.filter(c => c.progress > 0);
  const avgProgress = enrolledCourses.length > 0 
    ? Math.round(enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCourses.length)
    : 0;
  const aiRecommendedCount = mockCourses.filter(c => c.aiRecommended).length;

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Skill Development Courses</h1>
        <p className="text-muted-foreground">AI-powered course recommendations tailored to your career goals</p>
      </motion.div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Enrolled</p>
                <p className="text-3xl font-bold text-primary">{enrolledCourses.length}</p>
              </div>
              <BookOpen className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Active courses</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
                <p className="text-3xl font-bold text-accent">{avgProgress}%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-accent opacity-50" />
            </div>
            <Progress value={avgProgress} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">AI Matches</p>
                <p className="text-3xl font-bold text-success">{aiRecommendedCount}</p>
              </div>
              <Brain className="w-10 h-10 text-success opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Personalized picks</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Skill Boost</p>
                <p className="text-3xl font-bold text-warning">+35%</p>
              </div>
              <Trophy className="w-10 h-10 text-warning opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Match rate increase</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Skill Gap Analysis */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Skill Gap Analysis & Career Roadmap</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Priority Skills</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-accent/5 rounded border border-accent/20">
                  <span className="text-sm font-medium">React Hooks</span>
                  <Badge className="bg-accent text-accent-foreground">High</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-accent/5 rounded border border-accent/20">
                  <span className="text-sm font-medium">Machine Learning</span>
                  <Badge className="bg-accent text-accent-foreground">High</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-warning/5 rounded border border-warning/20">
                  <span className="text-sm font-medium">Cloud Computing</span>
                  <Badge className="bg-warning text-warning-foreground">Medium</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-success" />
                <h3 className="font-semibold">Market Demand</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>React.js</span>
                    <span className="text-success font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>AI/ML</span>
                    <span className="text-accent font-medium">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Cloud</span>
                    <span className="text-primary font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-warning" />
                <h3 className="font-semibold">Impact Prediction</h3>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm font-semibold">Internship Match Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-success">+35%</p>
                  <p className="text-xs text-muted-foreground">After completing recommended courses</p>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Estimated time: 8-10 weeks</p>
                  <p>• 3 high-priority courses</p>
                  <p>• Expected ROI: High</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Browse Courses
            </CardTitle>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-primary/20">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="aiml">AI/ML</SelectItem>
                  <SelectItem value="cloud">Cloud</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-primary/20">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Course Tabs */}
      <Tabs defaultValue="recommended" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
          <TabsTrigger value="enrolled">My Courses</TabsTrigger>
          <TabsTrigger value="all">All Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.filter(c => c.aiRecommended).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        AI Pick
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{course.duration}</span>
                        </div>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.students.toLocaleString()} students</span>
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                    </div>

                    {course.skillGap && (
                      <div className="p-2 bg-accent/5 rounded border border-accent/20">
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-accent font-medium">Addresses: {course.skillGap}</span>
                        </div>
                      </div>
                    )}

                    <Separator />
                    
                    {course.progress > 0 ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <Button className="w-full" variant="outline">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    ) : (
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 transition-opacity">
                        <Award className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enrolled">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0 h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-primary text-primary-foreground">Enrolled</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{course.provider}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Your Progress</span>
                          <span className="font-medium text-primary">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {course.progress >= 75 ? 'Almost done! Keep going!' : 
                           course.progress >= 50 ? 'Great progress!' : 
                           course.progress >= 25 ? 'Good start!' : 
                           'Just getting started'}
                        </p>
                      </div>

                      <Separator />

                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <Card className="col-span-full p-12 text-center">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Enrolled Courses Yet</h3>
                <p className="text-muted-foreground mb-4">Start learning today with AI-recommended courses!</p>
                <Button className="bg-gradient-to-r from-primary to-primary-glow text-white">
                  Browse Recommended Courses
                </Button>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      {course.aiRecommended && (
                        <Badge className="bg-gradient-to-r from-accent to-accent/80 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Pick
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 ml-auto">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>

                    {course.progress > 0 ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <Button className="w-full" variant="outline">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    ) : (
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 transition-opacity">
                        <Award className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

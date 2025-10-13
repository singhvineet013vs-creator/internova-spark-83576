import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Sparkles, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

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
  },
];

export default function SkillCourses() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Skill Courses</h1>
        <p className="text-muted-foreground">Enhance your skills with recommended courses</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Skill Gap Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-sm">
              Based on job market trends and your profile, we've identified key skill gaps:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-accent text-accent">
                <TrendingUp className="w-3 h-3 mr-1" />
                React Hooks
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                <TrendingUp className="w-3 h-3 mr-1" />
                Machine Learning
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                <TrendingUp className="w-3 h-3 mr-1" />
                Cloud Computing
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Completing these courses could increase your internship match rate by 35%.
            </p>
          </div>
        </CardContent>
      </Card>

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
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  {course.aiRecommended && (
                    <Badge className="bg-gradient-accent text-accent-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{course.provider}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {course.duration}
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  {course.aiRecommended && course.skillGap && (
                    <div className="flex items-center text-sm text-accent">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Addresses: {course.skillGap}
                    </div>
                  )}
                </div>
                
                {course.progress > 0 ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <Button className="w-full" variant="outline">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Continue Learning
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                    <Award className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

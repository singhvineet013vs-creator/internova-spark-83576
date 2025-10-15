import DashboardLayout from '@/components/layout/DashboardLayout';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Sparkles, Shield, Brain, TrendingUp, Award, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const mockInternships = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    company: 'Tech Solutions Pvt Ltd',
    duration: '3 months',
    stipend: '₹15,000/month',
    location: 'Bangalore',
    skills: ['React', 'Node.js', 'MongoDB'],
    aiRecommended: true,
    matchPercentage: 92,
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Analytics Corp',
    duration: '6 months',
    stipend: '₹20,000/month',
    location: 'Hyderabad',
    skills: ['Python', 'ML', 'TensorFlow'],
    aiRecommended: true,
    matchPercentage: 88,
  },
  {
    id: 3,
    title: 'UI/UX Design Intern',
    company: 'Creative Studios',
    duration: '4 months',
    stipend: '₹12,000/month',
    location: 'Mumbai',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    aiRecommended: false,
    matchPercentage: 0,
  },
];

export default function FindInternships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Find Internships</h1>
          <p className="text-muted-foreground">
            AI-powered matching with blockchain-verified opportunities
          </p>
        </div>

        {/* AI Insights Card */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>AI Career Intelligence</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Strength</span>
                  <span className="text-sm font-semibold">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Market Demand</span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-xs">High demand for your skills in tech sector</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Blockchain Verified</span>
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <p className="text-xs">78% of listings are blockchain verified</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by title, company, or skills..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                </SelectContent>
              </Select>
              <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Different Views */}
        <Tabs defaultValue="recommended" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recommended">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Recommended
            </TabsTrigger>
            <TabsTrigger value="all">All Internships</TabsTrigger>
            <TabsTrigger value="blockchain">
              <Shield className="h-4 w-4 mr-2" />
              Blockchain Verified
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-4">
            <div className="grid gap-4">
              {mockInternships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl">{internship.title}</CardTitle>
                            {Math.random() > 0.3 && (
                              <Badge variant="outline" className="gap-1">
                                <Lock className="w-3 h-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-base">{internship.company}</CardDescription>
                        </div>
                        {internship.aiRecommended && (
                          <div className="text-right">
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 mb-1">
                              <Brain className="w-3 h-3 mr-1" />
                              AI Match {internship.matchPercentage}%
                            </Badge>
                            <p className="text-xs text-muted-foreground">Skills aligned</p>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center text-sm">
                            <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
                            {internship.stipend}
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                            {internship.location}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        {internship.aiRecommended && (
                          <div className="p-3 rounded-lg bg-muted/50 text-sm">
                            <p className="font-medium mb-1 flex items-center gap-2">
                              <Award className="h-4 w-4 text-primary" />
                              AI Recommendation Insights
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Your React & Node.js skills are a perfect match. Average acceptance rate: 78%
                            </p>
                          </div>
                        )}
                        <Button className="w-full">
                          Apply Now
                          <Shield className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="space-y-4">
            <p className="text-muted-foreground text-center py-8">
              Showing all available internships across industries
            </p>
          </TabsContent>
          
          <TabsContent value="blockchain" className="space-y-4">
            <p className="text-muted-foreground text-center py-8">
              Showing blockchain-verified opportunities with immutable records
            </p>
          </TabsContent>
        </Tabs>
      </motion.div>
    </DashboardLayout>
  );
}

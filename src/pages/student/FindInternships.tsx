import DashboardLayout from '@/components/layout/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Sparkles, Shield, Brain, TrendingUp, Award, Lock, Bookmark, BookmarkCheck, Filter, X, ChevronDown, Star, Building2, Users, Calendar, Send, Target, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const mockInternships = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    company: 'Tech Solutions Pvt Ltd',
    duration: '6 months',
    stipend: '₹15,000/month',
    location: 'Bangalore',
    type: 'Hybrid',
    applicants: 45,
    deadline: '2025-02-15',
    skills: ['React', 'Node.js', 'MongoDB', 'REST API'],
    requirements: ['3rd year or above', 'Strong coding skills', 'Team player'],
    aiRecommended: true,
    matchPercentage: 92,
    verified: true,
    companyRating: 4.5,
    savedByUser: false,
    postedDays: 2,
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'Analytics Corp',
    duration: '6 months',
    stipend: '₹20,000/month',
    location: 'Hyderabad',
    type: 'Remote',
    applicants: 67,
    deadline: '2025-02-20',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis'],
    requirements: ['Statistical knowledge', 'Python proficiency', 'Problem solving'],
    aiRecommended: true,
    matchPercentage: 88,
    verified: true,
    companyRating: 4.7,
    savedByUser: false,
    postedDays: 5,
  },
  {
    id: 3,
    title: 'UI/UX Design Intern',
    company: 'Creative Studios',
    duration: '4 months',
    stipend: '₹12,000/month',
    location: 'Mumbai',
    type: 'On-site',
    applicants: 32,
    deadline: '2025-02-10',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    requirements: ['Portfolio required', 'Design thinking', 'Communication skills'],
    aiRecommended: false,
    matchPercentage: 65,
    verified: false,
    companyRating: 4.2,
    savedByUser: false,
    postedDays: 1,
  },
  {
    id: 4,
    title: 'Backend Developer Intern',
    company: 'Cloud Systems Inc',
    duration: '5 months',
    stipend: '₹18,000/month',
    location: 'Delhi',
    type: 'Hybrid',
    applicants: 52,
    deadline: '2025-02-18',
    skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    requirements: ['Database knowledge', 'API development', 'Git proficiency'],
    aiRecommended: true,
    matchPercentage: 85,
    verified: true,
    companyRating: 4.6,
    savedByUser: true,
    postedDays: 3,
  },
  {
    id: 5,
    title: 'Mobile App Developer Intern',
    company: 'AppTech Solutions',
    duration: '6 months',
    stipend: '₹16,000/month',
    location: 'Pune',
    type: 'On-site',
    applicants: 38,
    deadline: '2025-02-25',
    skills: ['React Native', 'JavaScript', 'Mobile UI', 'Redux'],
    requirements: ['Mobile development experience', 'Problem solving', 'Agile mindset'],
    aiRecommended: true,
    matchPercentage: 78,
    verified: true,
    companyRating: 4.4,
    savedByUser: false,
    postedDays: 4,
  },
];

export default function FindInternships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [savedInternships, setSavedInternships] = useState<number[]>([4]);
  const [stipendRange, setStipendRange] = useState([0, 25000]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSave = (id: number) => {
    setSavedInternships(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalInternships = mockInternships.length;
  const verifiedCount = mockInternships.filter(i => i.verified).length;
  const avgMatch = Math.round(mockInternships.filter(i => i.aiRecommended).reduce((sum, i) => sum + i.matchPercentage, 0) / mockInternships.filter(i => i.aiRecommended).length);

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Find Internships
            </h1>
            <p className="text-muted-foreground">
              AI-powered matching with blockchain-verified opportunities
            </p>
          </div>
          <Button variant="outline" className="border-primary/30">
            <BookmarkCheck className="w-4 h-4 mr-2" />
            Saved ({savedInternships.length})
          </Button>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available</p>
                  <p className="text-3xl font-bold text-primary">{totalInternships}</p>
                </div>
                <Building2 className="w-10 h-10 text-primary opacity-50" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Active listings</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">AI Match</p>
                  <p className="text-3xl font-bold text-accent">{avgMatch}%</p>
                </div>
                <Brain className="w-10 h-10 text-accent opacity-50" />
              </div>
              <Progress value={avgMatch} className="mt-2 h-1.5" />
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-gradient-to-br from-sky/20 to-sky/5 border border-sky/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="text-3xl font-bold text-primary">{verifiedCount}</p>
                </div>
                <Shield className="w-10 h-10 text-primary opacity-50" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Blockchain secured</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Today</p>
                  <p className="text-3xl font-bold text-success">3</p>
                </div>
                <Sparkles className="w-10 h-10 text-success opacity-50" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Fresh opportunities</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applied</p>
                  <p className="text-3xl font-bold text-warning">4</p>
                </div>
                <Send className="w-10 h-10 text-warning opacity-50" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">In progress</p>
            </CardContent>
          </Card>
        </div>

        {/* AI Career Intelligence */}
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 via-primary/5 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-accent" />
                <CardTitle>AI Career Intelligence Dashboard</CardTitle>
              </div>
              <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                Powered by AI
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Profile Match</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Strength</span>
                    <span className="text-lg font-bold text-primary">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                  <p className="text-xs text-muted-foreground">Excellent match rate</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <h3 className="font-semibold">Market Demand</h3>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-xs font-medium text-success">🔥 High Demand</p>
                    <p className="text-xs text-muted-foreground mt-1">Your skills are trending</p>
                  </div>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Verification</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Secured</span>
                    <span className="text-lg font-bold text-primary">{verifiedCount}/{totalInternships}</span>
                  </div>
                  <Progress value={(verifiedCount / totalInternships) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground">Blockchain verified</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">Success Rate</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-center p-2 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-2xl font-bold text-accent">78%</p>
                    <p className="text-xs text-muted-foreground">Predicted acceptance</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Search & Filters */}
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                <Input
                  placeholder="Search by title, company, skills, or location..."
                  className="pl-10 border-primary/20 focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="border-primary/30"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Location</Label>
                      <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger className="border-primary/20">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Duration</Label>
                      <Select value={durationFilter} onValueChange={setDurationFilter}>
                        <SelectTrigger className="border-primary/20">
                          <SelectValue placeholder="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Durations</SelectItem>
                          <SelectItem value="3">3 months</SelectItem>
                          <SelectItem value="4">4 months</SelectItem>
                          <SelectItem value="5">5 months</SelectItem>
                          <SelectItem value="6">6 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Work Type</Label>
                      <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="border-primary/20">
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Verified Only</Label>
                      <div className="flex items-center h-10 px-3 border border-primary/20 rounded-md">
                        <Checkbox id="verified" />
                        <Label htmlFor="verified" className="ml-2 text-sm cursor-pointer">
                          Blockchain verified
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Stipend Range: ₹{stipendRange[0].toLocaleString()} - ₹{stipendRange[1].toLocaleString()}</Label>
                    <Slider
                      value={stipendRange}
                      onValueChange={setStipendRange}
                      min={0}
                      max={25000}
                      step={1000}
                      className="w-full"
                    />
                  </div>

                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" size="sm" onClick={() => {
                      setLocationFilter('all');
                      setDurationFilter('all');
                      setTypeFilter('all');
                      setStipendRange([0, 25000]);
                    }}>
                      <X className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Internship Listings with Tabs */}
        <Tabs defaultValue="recommended" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50">
            <TabsTrigger value="recommended" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Recommended
            </TabsTrigger>
            <TabsTrigger value="all">
              All Internships ({totalInternships})
            </TabsTrigger>
            <TabsTrigger value="verified">
              <Shield className="h-4 w-4 mr-2" />
              Verified ({verifiedCount})
            </TabsTrigger>
            <TabsTrigger value="saved">
              <Bookmark className="h-4 w-4 mr-2" />
              Saved ({savedInternships.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-4">
            <div className="grid gap-4">
              {mockInternships.filter(i => i.aiRecommended).map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full -z-10" />
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{internship.title}</CardTitle>
                            {internship.verified && (
                              <Badge className="bg-success text-success-foreground border-0">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {internship.company}
                            </span>
                            <Separator orientation="vertical" className="h-4" />
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-accent text-accent" />
                              {internship.companyRating}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className="bg-gradient-to-r from-accent via-primary to-accent text-white border-0">
                            <Brain className="w-3 h-3 mr-1" />
                            {internship.matchPercentage}% Match
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleSave(internship.id)}
                          >
                            {savedInternships.includes(internship.id) ? (
                              <BookmarkCheck className="w-5 h-5 text-primary fill-primary" />
                            ) : (
                              <Bookmark className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Quick Info */}
                      <div className="grid grid-cols-4 gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-accent" />
                          <span>{internship.stipend}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-success" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-warning" />
                          <span>{internship.applicants} applied</span>
                        </div>
                      </div>

                      <Separator />

                      {/* Skills */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-primary/30">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="p-3 rounded-lg bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 border border-accent/20">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium">AI Recommendation</p>
                            <p className="text-xs text-muted-foreground">
                              Your {internship.skills[0]} & {internship.skills[1]} skills perfectly match. 
                              Predicted acceptance rate: <span className="font-semibold text-success">78%</span>
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Progress value={internship.matchPercentage} className="h-1.5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                          <Send className="w-4 h-4 mr-2" />
                          Apply Now
                        </Button>
                        <Button variant="outline" className="border-primary/30">
                          View Details
                        </Button>
                      </div>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Posted {internship.postedDays} days ago
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Deadline: {internship.deadline}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4">
              {mockInternships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{internship.title}</CardTitle>
                            {internship.verified && (
                              <Badge className="bg-success text-success-foreground border-0 text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                            {internship.aiRecommended && (
                              <Badge variant="outline" className="border-accent/30 text-xs">
                                <Brain className="w-3 h-3 mr-1" />
                                AI Match
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{internship.company}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleSave(internship.id)}
                        >
                          {savedInternships.includes(internship.id) ? (
                            <BookmarkCheck className="w-5 h-5 text-primary fill-primary" />
                          ) : (
                            <Bookmark className="w-5 h-5" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-4 gap-2 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          {internship.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-accent" />
                          {internship.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 text-success" />
                          {internship.stipend}
                        </span>
                        <Badge variant="secondary" className="justify-center">
                          {internship.type}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-primary" size="sm">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="verified" className="space-y-4">
            <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0 mb-4">
              <CardHeader className="bg-gradient-to-r from-success/5 to-transparent border-b border-success/20">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-success" />
                  Blockchain Verified Internships
                </CardTitle>
                <CardDescription>
                  These opportunities are secured on blockchain with immutable records
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="grid gap-4">
              {mockInternships.filter(i => i.verified).map((internship) => (
                <Card key={internship.id} className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-success/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle>{internship.title}</CardTitle>
                          <Badge className="bg-success text-success-foreground">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{internship.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                      <p className="text-xs text-success font-mono">
                        ✓ Verified on blockchain • Hash: 0x{internship.id}abc...def • Tamper-proof
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            {savedInternships.length > 0 ? (
              <div className="grid gap-4">
                {mockInternships.filter(i => savedInternships.includes(i.id)).map((internship) => (
                  <Card key={internship.id} className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>{internship.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{internship.company}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleSave(internship.id)}
                        >
                          <BookmarkCheck className="w-5 h-5 text-primary fill-primary" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
                <CardContent className="py-12 text-center">
                  <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No saved internships yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Save internships to quickly access them later
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>
    </DashboardLayout>
  );
}

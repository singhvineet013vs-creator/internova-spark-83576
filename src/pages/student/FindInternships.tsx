import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, DollarSign, Sparkles, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  },
];

export default function FindInternships() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Find Internships</h1>
        <p className="text-muted-foreground">Discover opportunities that match your skills</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
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
                <MapPin className="w-4 h-4 mr-2" />
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
                <Filter className="w-4 h-4 mr-2" />
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInternships.map((internship, index) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-lift backdrop-blur-md bg-card/80 shadow-lg border-0 h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{internship.title}</CardTitle>
                  {internship.aiRecommended && (
                    <Badge className="bg-gradient-accent text-accent-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      AI Match
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{internship.company}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 mr-2 text-primary" />
                    {internship.stipend}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
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
                <Button className="w-full bg-gradient-accent hover:opacity-90 transition-opacity">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

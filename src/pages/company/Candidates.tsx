import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Search, Mail, Phone, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

export default function Candidates() {
  const [searchQuery, setSearchQuery] = useState('');

  const candidates = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      phone: '+1234567890',
      location: 'New York, NY',
      skills: ['React', 'JavaScript', 'CSS', 'Git'],
      rating: 4.5,
      college: 'MIT',
      course: 'Computer Science',
      semester: 6,
    },
    {
      id: '2',
      name: 'Bob Williams',
      email: 'bob@example.com',
      phone: '+1234567891',
      location: 'San Francisco, CA',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      rating: 4.8,
      college: 'Stanford University',
      course: 'Software Engineering',
      semester: 7,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Candidate Pool</h1>
          <p className="text-muted-foreground">Browse and connect with potential interns</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search candidates by name, skills, or college..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Advanced Search</Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      {candidate.name}
                      <div className="flex items-center gap-1 text-sm font-normal text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {candidate.rating}
                      </div>
                    </CardTitle>
                    <div className="space-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {candidate.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {candidate.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {candidate.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Education</p>
                  <p className="text-sm text-muted-foreground">
                    {candidate.course} • Semester {candidate.semester}
                  </p>
                  <p className="text-sm text-muted-foreground">{candidate.college}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Skills</p>
                  <div className="flex gap-2 flex-wrap">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">View Profile</Button>
                  <Button variant="outline" className="flex-1">Contact</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

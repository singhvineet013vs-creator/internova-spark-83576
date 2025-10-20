import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, UserPlus, Eye, Sparkles, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockStudents = [
  {
    id: 1,
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    department: 'Computer Science',
    semester: 6,
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    status: 'active',
    skills: ['React', 'Node.js', 'MongoDB'],
    nepCredits: 18,
    aiScore: 92,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    department: 'Data Science',
    semester: 7,
    internship: 'Data Analyst',
    company: 'Analytics Corp',
    status: 'active',
    skills: ['Python', 'ML', 'TensorFlow'],
    nepCredits: 20,
    aiScore: 95,
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit@example.com',
    department: 'Information Technology',
    semester: 5,
    internship: null,
    company: null,
    status: 'searching',
    skills: ['Java', 'Spring Boot', 'MySQL'],
    nepCredits: 14,
    aiScore: 78,
  },
];

export default function Students() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<typeof mockStudents[0] | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Students</h1>
          <p className="text-muted-foreground">Manage student profiles and internships</p>
        </div>
        <Button className="bg-gradient-accent hover:opacity-90">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockStudents.length}</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <Award className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {mockStudents.filter(s => s.status === 'active').length}
              </p>
              <p className="text-sm text-muted-foreground">Active Internships</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {(mockStudents.reduce((sum, s) => sum + s.aiScore, 0) / mockStudents.length).toFixed(0)}
              </p>
              <p className="text-sm text-muted-foreground">Avg Readiness Score</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ds">Data Science</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardHeader>
            <CardTitle>Student Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Current Internship</TableHead>
                  <TableHead>NEP Credits</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      AI Score
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell>{student.semester}</TableCell>
                    <TableCell>
                      {student.internship ? (
                        <div>
                          <p className="font-medium text-sm">{student.internship}</p>
                          <p className="text-xs text-muted-foreground">{student.company}</p>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>{student.nepCredits}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          student.aiScore >= 90
                            ? 'bg-success text-success-foreground'
                            : student.aiScore >= 70
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted'
                        }
                      >
                        {student.aiScore}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedStudent(student)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="backdrop-blur-md bg-card/95 max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Student Profile</DialogTitle>
                          </DialogHeader>
                          {selectedStudent && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Name</p>
                                  <p className="font-medium">{selectedStudent.name}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Email</p>
                                  <p className="font-medium">{selectedStudent.email}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Department</p>
                                  <p className="font-medium">{selectedStudent.department}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Semester</p>
                                  <p className="font-medium">{selectedStudent.semester}</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-2">Skills</p>
                                <div className="flex flex-wrap gap-2">
                                  {selectedStudent.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex gap-4">
                                <Button className="flex-1 bg-gradient-accent hover:opacity-90">
                                  Assign Mentor
                                </Button>
                                <Button variant="outline" className="flex-1">
                                  Approve Internship
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, UserPlus, Eye, Sparkles, Award, TrendingUp, Filter, BookOpen, Target, Shield, Brain, Download, BarChart3, CheckCircle, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

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
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Student Management
          </h1>
          <p className="text-muted-foreground">AI-powered student tracking and internship management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-accent hover:opacity-90 gap-2">
            <UserPlus className="w-4 h-4" />
            Add Student
          </Button>
        </div>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            <CardTitle>AI-Driven Analytics Dashboard</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{mockStudents.length}</p>
              <p className="text-sm text-muted-foreground">Total Students</p>
              <p className="text-xs text-accent mt-1">↑ 12% from last month</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
              <Award className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-3xl font-bold">
                {mockStudents.filter(s => s.status === 'active').length}
              </p>
              <p className="text-sm text-muted-foreground">Active Internships</p>
              <p className="text-xs text-success mt-1">67% Placement Rate</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-bold">
                {(mockStudents.reduce((sum, s) => sum + s.aiScore, 0) / mockStudents.length).toFixed(0)}
              </p>
              <p className="text-sm text-muted-foreground">Avg AI Readiness</p>
              <Progress value={85} className="mt-2 h-1" />
            </div>
            <div className="text-center p-4 rounded-lg bg-warning/10 border border-warning/20">
              <Target className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-3xl font-bold">
                {(mockStudents.reduce((sum, s) => sum + s.nepCredits, 0) / mockStudents.length).toFixed(0)}
              </p>
              <p className="text-sm text-muted-foreground">Avg NEP Credits</p>
              <p className="text-xs text-warning mt-1">Out of 22 credits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Top Performer</p>
                    <p className="text-lg font-bold">Priya Sharma</p>
                    <Badge className="bg-success text-success-foreground mt-1">95 AI Score</Badge>
                  </div>
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/5 to-warning/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Skills Gap</p>
                    <p className="text-lg font-bold">Cloud Computing</p>
                    <Badge variant="secondary" className="mt-1">High Demand</Badge>
                  </div>
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-warning/5 to-success/5 border-warning/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Placement Ready</p>
                    <p className="text-lg font-bold">2 Students</p>
                    <Badge className="bg-warning text-warning-foreground mt-1">Action Needed</Badge>
                  </div>
                  <BarChart3 className="w-10 h-10 text-warning" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, skills, or company..."
                className="pl-10 border-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ds">Data Science</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active Internship</SelectItem>
                <SelectItem value="searching">Searching</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardHeader className="border-b border-accent/20">
            <div className="flex items-center justify-between">
              <CardTitle>Student Directory</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="gap-1">
                  <Shield className="w-3 h-3" />
                  Blockchain Verified
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                <TabsTrigger value="all" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  All Students ({mockStudents.length})
                </TabsTrigger>
                <TabsTrigger value="active" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Active ({mockStudents.filter(s => s.status === 'active').length})
                </TabsTrigger>
                <TabsTrigger value="top" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Top Performers
                </TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="p-6">
                <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name & Contact</TableHead>
                  <TableHead>Department/Sem</TableHead>
                  <TableHead>Current Internship</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      NEP Credits
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-accent" />
                      AI Readiness
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/50 transition-colors border-b border-accent/10">
                    <TableCell>
                      <div>
                        <p className="font-medium flex items-center gap-2">
                          {student.name}
                          {student.aiScore >= 90 && <Shield className="w-4 h-4 text-success" />}
                        </p>
                        <p className="text-xs text-muted-foreground">{student.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{student.department}</p>
                        <Badge variant="outline" className="mt-1">Sem {student.semester}</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      {student.internship ? (
                        <div>
                          <p className="font-medium text-sm">{student.internship}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            {student.company}
                          </p>
                        </div>
                      ) : (
                        <Badge variant="secondary" className="gap-1">
                          <Search className="w-3 h-3" />
                          Searching
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{student.nepCredits}/22</span>
                        <Progress value={(student.nepCredits / 22) * 100} className="w-16 h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            student.aiScore >= 90
                              ? 'bg-success text-success-foreground'
                              : student.aiScore >= 70
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-muted'
                          }
                        >
                          {student.aiScore}%
                        </Badge>
                        {student.aiScore >= 90 && <Sparkles className="w-4 h-4 text-accent" />}
                      </div>
                    </TableCell>
                    <TableCell>
                      {student.status === 'active' ? (
                        <Badge className="bg-success text-success-foreground gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Active
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Searching</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedStudent(student)}
                            className="gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            View Profile
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="backdrop-blur-md bg-card/95 max-w-3xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader className="border-b border-accent/20 pb-4">
                            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                              Student Profile
                            </DialogTitle>
                          </DialogHeader>
                          {selectedStudent && (
                            <div className="space-y-6">
                              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                                <CardContent className="pt-6">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="text-xl font-bold">{selectedStudent.name}</h3>
                                      <p className="text-sm text-muted-foreground">{selectedStudent.email}</p>
                                    </div>
                                    <div className="text-right">
                                      <Badge className="bg-accent text-accent-foreground mb-2">
                                        AI Score: {selectedStudent.aiScore}%
                                      </Badge>
                                      <p className="text-xs text-muted-foreground">Readiness Level: High</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <div className="grid grid-cols-2 gap-4">
                                <Card>
                                  <CardContent className="pt-6">
                                    <p className="text-sm text-muted-foreground mb-1">Department</p>
                                    <p className="font-medium">{selectedStudent.department}</p>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="pt-6">
                                    <p className="text-sm text-muted-foreground mb-1">Current Semester</p>
                                    <p className="font-medium">Semester {selectedStudent.semester}</p>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="pt-6">
                                    <p className="text-sm text-muted-foreground mb-1">NEP Credits</p>
                                    <div className="flex items-center gap-2">
                                      <p className="font-medium">{selectedStudent.nepCredits}/22</p>
                                      <Progress value={(selectedStudent.nepCredits / 22) * 100} className="flex-1 h-2" />
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="pt-6">
                                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                                    <Badge variant={selectedStudent.status === 'active' ? 'default' : 'secondary'} className="capitalize">
                                      {selectedStudent.status}
                                    </Badge>
                                  </CardContent>
                                </Card>
                              </div>

                              {selectedStudent.internship && (
                                <Card className="border-success/20 bg-success/5">
                                  <CardHeader className="pb-3">
                                    <CardTitle className="text-sm flex items-center gap-2">
                                      <Award className="w-4 h-4 text-success" />
                                      Current Internship
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="grid grid-cols-2 gap-2">
                                      <div>
                                        <p className="text-sm text-muted-foreground">Position</p>
                                        <p className="font-medium">{selectedStudent.internship}</p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground">Company</p>
                                        <p className="font-medium">{selectedStudent.company}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              )}

                              <div>
                                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                                  <BookOpen className="w-4 h-4" />
                                  Skills & Expertise
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedStudent.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex gap-3">
                                <Button className="flex-1 bg-gradient-accent hover:opacity-90 gap-2">
                                  <UserPlus className="w-4 h-4" />
                                  Assign Mentor
                                </Button>
                                <Button variant="outline" className="flex-1 gap-2">
                                  <CheckCircle className="w-4 h-4" />
                                  Approve Internship
                                </Button>
                                <Button variant="outline" className="gap-2">
                                  <Download className="w-4 h-4" />
                                  Export
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
              </TabsContent>

              <TabsContent value="active" className="p-6">
                <div className="text-center py-8 text-muted-foreground">
                  Showing students with active internships...
                </div>
              </TabsContent>

              <TabsContent value="top" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockStudents.filter(s => s.aiScore >= 90).map((student) => (
                    <Card key={student.id} className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold">{student.name}</h3>
                            <p className="text-sm text-muted-foreground">{student.department}</p>
                          </div>
                          <Badge className="bg-success text-success-foreground">
                            {student.aiScore}% AI Score
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {student.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Department Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Computer Science</span>
                            <span className="font-semibold">33%</span>
                          </div>
                          <Progress value={33} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Data Science</span>
                            <span className="font-semibold">33%</span>
                          </div>
                          <Progress value={33} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Information Technology</span>
                            <span className="font-semibold">34%</span>
                          </div>
                          <Progress value={34} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Internship Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Active Internships</span>
                            <span className="font-semibold">67%</span>
                          </div>
                          <Progress value={67} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Searching</span>
                            <span className="font-semibold">33%</span>
                          </div>
                          <Progress value={33} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

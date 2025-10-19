import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, FileText, Upload, Sparkles, Edit, Trash, Brain, TrendingUp, Target, Shield, BarChart3, Clock, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const mockEntries = [
  {
    id: 1,
    date: '2025-01-10',
    title: 'React Component Development',
    description: 'Built reusable form components with validation',
    hours: 8,
    status: 'verified',
    skills: ['React', 'JavaScript', 'UI/UX'],
    productivity: 95,
  },
  {
    id: 2,
    date: '2025-01-09',
    title: 'API Integration',
    description: 'Integrated REST APIs for user authentication',
    hours: 6,
    status: 'verified',
    skills: ['Node.js', 'REST API', 'JWT'],
    productivity: 88,
  },
  {
    id: 3,
    date: '2025-01-08',
    title: 'Database Schema Design',
    description: 'Designed and optimized database schema for user management',
    hours: 7,
    status: 'pending',
    skills: ['PostgreSQL', 'Database Design'],
    productivity: 90,
  },
];

export default function MyLogbook() {
  const [open, setOpen] = useState(false);
  
  const totalHours = mockEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const avgProductivity = Math.round(mockEntries.reduce((sum, entry) => sum + entry.productivity, 0) / mockEntries.length);
  const verifiedEntries = mockEntries.filter(e => e.status === 'verified').length;
  const thisWeekHours = 14; // Mock data

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">My Logbook</h1>
          <p className="text-muted-foreground">Track your internship activities with AI-powered insights</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-accent hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="backdrop-blur-md bg-card/95">
            <DialogHeader>
              <DialogTitle>Add Logbook Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="What did you work on?" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your activities..." rows={4} />
              </div>
              <div>
                <Label htmlFor="hours">Hours Worked</Label>
                <Input id="hours" type="number" placeholder="8" />
              </div>
              <div>
                <Label htmlFor="file">Supporting Documents</Label>
                <div className="flex items-center gap-2">
                  <Input id="file" type="file" />
                  <Button variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full bg-gradient-accent hover:opacity-90">Submit Entry</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Hours</p>
                <p className="text-3xl font-bold text-primary">{totalHours}h</p>
              </div>
              <Clock className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Logged this month</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-3xl font-bold text-accent">{thisWeekHours}h</p>
              </div>
              <Calendar className="w-10 h-10 text-accent opacity-50" />
            </div>
            <Progress value={(thisWeekHours / 40) * 100} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Productivity</p>
                <p className="text-3xl font-bold text-success">{avgProductivity}%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-success opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">AI-calculated score</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-sky/20 to-sky/5 border border-sky/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified</p>
                <p className="text-3xl font-bold text-primary">{verifiedEntries}</p>
              </div>
              <Shield className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Blockchain secured</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Activity Analysis */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            <CardTitle>AI Activity Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Key Insights</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Strong focus on React development (65% of time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Consistent 7+ hours daily - excellent pattern</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Diverse skill development across 8 technologies</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-success" />
                <h3 className="font-semibold">Skill Distribution</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>React & Frontend</span>
                    <span className="text-primary font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Backend & APIs</span>
                    <span className="text-accent font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Database</span>
                    <span className="text-success font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                <h3 className="font-semibold">Achievements</h3>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-success/5 rounded border border-success/20">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span>7-day streak maintained</span>
                  </div>
                </div>
                <div className="p-2 bg-accent/5 rounded border border-accent/20">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>20+ hours logged this week</span>
                  </div>
                </div>
                <div className="p-2 bg-primary/5 rounded border border-primary/20">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>100% verification rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logbook Entries with Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="all">All Entries</TabsTrigger>
          <TabsTrigger value="verified">Verified</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
              <CardHeader>
                <CardTitle>Logbook Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date
                        </div>
                      </TableHead>
                      <TableHead>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Title
                        </div>
                      </TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Productivity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockEntries.map((entry) => (
                      <TableRow key={entry.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell>{entry.date}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{entry.title}</p>
                            <p className="text-xs text-muted-foreground">{entry.description}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {entry.skills.slice(0, 2).map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{entry.hours}h</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={entry.productivity} className="h-1.5 w-12" />
                            <span className="text-xs font-medium text-accent">{entry.productivity}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {entry.status === 'verified' ? (
                            <Badge className="bg-success text-success-foreground">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Pending</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="verified">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-success/5 to-transparent border-b border-success/20">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Blockchain Verified Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {mockEntries.filter(e => e.status === 'verified').map((entry) => (
                  <div key={entry.id} className="p-4 border border-success/20 rounded-lg bg-success/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{entry.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    <Separator className="my-3" />
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{entry.date}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Hours</p>
                        <p className="font-medium">{entry.hours}h</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Productivity</p>
                        <p className="font-medium text-success">{entry.productivity}%</p>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-white/50 rounded border border-success/20">
                      <p className="text-xs text-success font-mono">
                        ✓ Verified on blockchain • Hash: 0x{entry.id}abc...def
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Performance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold">Weekly Trends</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Monday - Friday</span>
                      <span className="font-medium">7.5h avg</span>
                    </div>
                    <Progress value={93} className="h-2" />
                    <p className="text-xs text-muted-foreground">15% above target</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Most Productive Day</h3>
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-2xl font-bold text-accent">Tuesday</p>
                    <p className="text-sm text-muted-foreground">Average 8.5 hours</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Top Skills Practiced</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary">React (8h)</Badge>
                    <Badge className="bg-accent">Node.js (6h)</Badge>
                    <Badge className="bg-success">PostgreSQL (7h)</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Completion Rate</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Tasks Completed</span>
                      <span className="text-2xl font-bold text-success">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

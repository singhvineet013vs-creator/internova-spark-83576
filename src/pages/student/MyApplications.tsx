import { motion } from 'framer-motion';
import { FileText, Calendar, Building2, XCircle, Sparkles, TrendingUp, Shield, Target, CheckCircle, Clock, AlertCircle, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const mockApplications = [
  {
    id: 1,
    internship: 'Full Stack Developer',
    company: 'Tech Solutions Pvt Ltd',
    appliedOn: '2025-01-05',
    status: 'pending',
    aiScore: 92,
    verified: true,
    deadline: '2025-01-25',
  },
  {
    id: 2,
    internship: 'Data Science Intern',
    company: 'Analytics Corp',
    appliedOn: '2025-01-03',
    status: 'accepted',
    aiScore: 88,
    verified: true,
    deadline: '2025-01-20',
  },
  {
    id: 3,
    internship: 'UI/UX Design Intern',
    company: 'Creative Studios',
    appliedOn: '2025-01-01',
    status: 'rejected',
    aiScore: 75,
    verified: false,
    deadline: '2025-01-18',
  },
  {
    id: 4,
    internship: 'Backend Developer',
    company: 'Cloud Systems Inc',
    appliedOn: '2025-01-08',
    status: 'under_review',
    aiScore: 85,
    verified: true,
    deadline: '2025-01-28',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending':
      return (
        <Badge variant="secondary" className="bg-secondary">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      );
    case 'accepted':
      return (
        <Badge className="bg-success text-success-foreground">
          <CheckCircle className="w-3 h-3 mr-1" />
          Accepted
        </Badge>
      );
    case 'rejected':
      return (
        <Badge variant="destructive">
          <XCircle className="w-3 h-3 mr-1" />
          Rejected
        </Badge>
      );
    case 'under_review':
      return (
        <Badge className="bg-warning text-warning-foreground">
          <AlertCircle className="w-3 h-3 mr-1" />
          Under Review
        </Badge>
      );
    default:
      return null;
  }
};

export default function MyApplications() {
  const totalApplications = mockApplications.length;
  const acceptedApplications = mockApplications.filter(app => app.status === 'accepted').length;
  const pendingApplications = mockApplications.filter(app => app.status === 'pending' || app.status === 'under_review').length;
  const verifiedApplications = mockApplications.filter(app => app.verified).length;
  const avgAiScore = Math.round(mockApplications.reduce((sum, app) => sum + app.aiScore, 0) / totalApplications);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>
        <p className="text-muted-foreground">Track and manage your internship applications with AI insights</p>
      </motion.div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Applied</p>
                <p className="text-3xl font-bold text-primary">{totalApplications}</p>
              </div>
              <FileText className="w-10 h-10 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Accepted</p>
                <p className="text-3xl font-bold text-success">{acceptedApplications}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-success opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">In Review</p>
                <p className="text-3xl font-bold text-warning">{pendingApplications}</p>
              </div>
              <Clock className="w-10 h-10 text-warning opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg AI Score</p>
                <p className="text-3xl font-bold text-accent">{avgAiScore}%</p>
              </div>
              <Brain className="w-10 h-10 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-sky/20 to-sky/5 border border-sky/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified</p>
                <p className="text-3xl font-bold text-primary">{verifiedApplications}</p>
              </div>
              <Shield className="w-10 h-10 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI-Powered Application Intelligence</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-success" />
                <h3 className="font-semibold">Success Prediction</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Next Acceptance</span>
                  <span className="text-lg font-bold text-success">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Based on your profile strength and application patterns
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Blockchain Security</h3>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">{verifiedApplications}/{totalApplications}</p>
                <p className="text-sm text-muted-foreground">applications verified on blockchain</p>
                <Button variant="outline" size="sm" className="w-full border-primary/30">
                  View Blockchain Records
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">AI Recommendations</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Update your React skills to improve match rate by 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Follow up on 2 pending applications within 48 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-muted/50">
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="pending">In Review</TabsTrigger>
          <TabsTrigger value="verified">Blockchain Verified</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Internship
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Company
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Applied On
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        AI Score
                      </div>
                    </TableHead>
                    <TableHead>Verification</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockApplications.map((application) => (
                    <TableRow key={application.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{application.internship}</TableCell>
                      <TableCell>{application.company}</TableCell>
                      <TableCell>{application.appliedOn}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={application.aiScore} className="h-2 w-16" />
                          <span className="text-sm font-medium text-accent">{application.aiScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {application.verified ? (
                          <Badge className="bg-success text-success-foreground">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        ) : (
                          <Badge variant="outline">Not Verified</Badge>
                        )}
                      </TableCell>
                      <TableCell>{getStatusBadge(application.status)}</TableCell>
                      <TableCell>
                        {(application.status === 'pending' || application.status === 'under_review') && (
                          <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                            <XCircle className="w-4 h-4 mr-2" />
                            Withdraw
                          </Button>
                        )}
                        {application.status === 'accepted' && (
                          <Button size="sm" className="bg-primary">
                            View Details
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Applications Under Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockApplications
                  .filter(app => app.status === 'pending' || app.status === 'under_review')
                  .map((application) => (
                    <div key={application.id} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{application.internship}</h3>
                          <p className="text-sm text-muted-foreground">{application.company}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Applied: {application.appliedOn}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Deadline: {application.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          {getStatusBadge(application.status)}
                          <p className="text-sm text-muted-foreground">AI Score: {application.aiScore}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verified">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-success/5 to-transparent border-b border-success/20">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Blockchain Verified Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {mockApplications
                  .filter(app => app.verified)
                  .map((application) => (
                    <div key={application.id} className="p-4 border border-success/20 rounded-lg bg-success/5">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{application.internship}</h3>
                            <Badge className="bg-success text-success-foreground">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{application.company}</p>
                          <p className="text-xs text-success">
                            ✓ Application secured on blockchain • Tamper-proof • Fully auditable
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="border-success/30">
                          View Proof
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-accent/5 to-transparent border-b border-accent/20">
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent" />
                AI-Powered Career Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    Application Strategy
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Your acceptance rate is 25% higher than average for your profile</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Applications on Tuesdays have 30% better response rates</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span>Consider applying to 3-5 more positions this week</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    Portfolio Recommendations
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Add a project showcasing React and TypeScript</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Complete "Advanced Web Development" course to boost matches</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Your GitHub activity is strong - keep it up!</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="font-semibold">Skill Gap Analysis</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>React.js (Advanced)</span>
                      <span className="text-success font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Node.js (Intermediate)</span>
                      <span className="text-accent font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Machine Learning (Beginner)</span>
                      <span className="text-warning font-medium">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
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

import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Building2, CheckCircle, XCircle, Sparkles, Shield, TrendingUp, Upload, Eye, Award, BarChart3, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const mockReports = [
  {
    id: 1,
    title: 'Mid-term Report',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    submittedOn: '2025-01-15',
    status: 'approved',
    quality: 92,
    verified: true,
    aiSuggestions: ['Add more technical depth', 'Include performance metrics'],
  },
  {
    id: 2,
    title: 'Final Report',
    internship: 'Data Science Intern',
    company: 'Analytics Corp',
    submittedOn: '2025-01-10',
    status: 'pending',
    quality: 85,
    verified: false,
    aiSuggestions: ['Expand on methodology section'],
  },
  {
    id: 3,
    title: 'Weekly Progress Report',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    submittedOn: '2025-01-12',
    status: 'approved',
    quality: 88,
    verified: true,
    aiSuggestions: [],
  },
];

const mockCertificates = [
  {
    id: 1,
    title: 'Internship Completion Certificate',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    issuedOn: '2025-01-20',
    verified: true,
    skills: ['React', 'Node.js', 'MongoDB'],
    duration: '6 months',
  },
  {
    id: 2,
    title: 'Excellence Award Certificate',
    internship: 'Data Science Intern',
    company: 'Analytics Corp',
    issuedOn: '2025-01-18',
    verified: true,
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    duration: '3 months',
  },
];

export default function ReportsCertificates() {
  const totalReports = mockReports.length;
  const approvedReports = mockReports.filter(r => r.status === 'approved').length;
  const avgQuality = Math.round(mockReports.reduce((sum, r) => sum + r.quality, 0) / totalReports);
  const verifiedCerts = mockCertificates.filter(c => c.verified).length;

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Reports & Certificates</h1>
        <p className="text-muted-foreground">Manage your internship documentation with AI-powered insights</p>
      </motion.div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <p className="text-3xl font-bold text-primary">{totalReports}</p>
              </div>
              <FileText className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Submitted this semester</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approved</p>
                <p className="text-3xl font-bold text-success">{approvedReports}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-success opacity-50" />
            </div>
            <Progress value={(approvedReports / totalReports) * 100} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Quality</p>
                <p className="text-3xl font-bold text-accent">{avgQuality}%</p>
              </div>
              <Award className="w-10 h-10 text-accent opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">AI quality score</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-sky/20 to-sky/5 border border-sky/30">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-3xl font-bold text-primary">{verifiedCerts}</p>
              </div>
              <Shield className="w-10 h-10 text-primary opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Blockchain verified</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Writing Assistant */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <CardTitle>AI Writing Assistant</CardTitle>
            </div>
            <Button className="bg-gradient-to-r from-primary to-primary-glow text-white">
              <Upload className="w-4 h-4 mr-2" />
              Submit New Report
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Next Report Due</h3>
              </div>
              <p className="text-2xl font-bold text-primary">3 Days</p>
              <p className="text-sm text-muted-foreground">Final internship report for Tech Solutions</p>
              <Button variant="outline" size="sm" className="w-full border-primary/30">
                Start Writing
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">AI Recommendations</h3>
              </div>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                  <span>Highlight API integration work from logbook</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                  <span>Include React performance metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                  <span>Add teamwork examples</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-success" />
                <h3 className="font-semibold">Quality Insights</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Your avg score</span>
                  <span className="font-bold text-success">{avgQuality}%</span>
                </div>
                <Progress value={avgQuality} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  12% higher than peer average
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Reports and Certificates */}
      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="reports">Submitted Reports</TabsTrigger>
          <TabsTrigger value="certificates">My Certificates</TabsTrigger>
          <TabsTrigger value="verified">Blockchain Verified</TabsTrigger>
        </TabsList>

        <TabsContent value="reports">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Submitted Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Title
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
                        Submitted
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Quality
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockReports.map((report) => (
                    <TableRow key={report.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{report.title}</TableCell>
                      <TableCell>{report.company}</TableCell>
                      <TableCell>{report.submittedOn}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={report.quality} className="h-2 w-16" />
                          <span className="text-sm font-medium text-accent">{report.quality}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {report.status === 'approved' ? (
                          <Badge className="bg-success text-success-foreground">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="secondary">Pending</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        {report.verified ? (
                          <Shield className="w-5 h-5 text-success" />
                        ) : (
                          <Shield className="w-5 h-5 text-muted-foreground" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>My Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                  >
                    <Card className="hover-lift border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{cert.company}</p>
                          </div>
                          {cert.verified && (
                            <Badge className="bg-success text-success-foreground">
                              <Shield className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Duration</span>
                            <span className="font-medium">{cert.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Issued On</span>
                            <span className="font-medium">{cert.issuedOn}</span>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <p className="text-sm font-medium">Skills Certified</p>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="border-primary/30">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1 bg-gradient-to-r from-primary to-primary-glow text-white">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" className="border-primary/30">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
                Blockchain Verified Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                  <p className="text-3xl font-bold text-success">{mockReports.filter(r => r.verified).length}</p>
                  <p className="text-sm text-muted-foreground">Verified Reports</p>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                  <p className="text-3xl font-bold text-success">{verifiedCerts}</p>
                  <p className="text-sm text-muted-foreground">Verified Certificates</p>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
                  <p className="text-3xl font-bold text-success">100%</p>
                  <p className="text-sm text-muted-foreground">Security Score</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Blockchain Security Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>All documents are cryptographically signed and tamper-proof</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Immutable record of submission and approval timestamps</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Instant verification for employers and institutions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Decentralized storage ensures permanent accessibility</span>
                  </li>
                </ul>
              </div>

              <Button variant="outline" className="w-full border-success/30">
                <Shield className="w-4 h-4 mr-2" />
                View Complete Blockchain Audit Trail
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

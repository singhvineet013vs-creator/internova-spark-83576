import { motion } from 'framer-motion';
import { FileText, Calendar, User, Building2, CheckCircle, XCircle, Download, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockReports = [
  {
    id: 1,
    title: 'Mid-term Report',
    student: 'Rahul Kumar',
    company: 'Tech Solutions',
    submittedOn: '2025-01-15',
    status: 'pending',
    quality: 85,
  },
  {
    id: 2,
    title: 'Final Report',
    student: 'Priya Sharma',
    company: 'Analytics Corp',
    submittedOn: '2025-01-12',
    status: 'approved',
    quality: 92,
  },
  {
    id: 3,
    title: 'Weekly Progress Report',
    student: 'Amit Patel',
    company: 'Creative Studios',
    submittedOn: '2025-01-10',
    status: 'pending',
    quality: 78,
  },
];

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Reports</h1>
        <p className="text-muted-foreground">Review and approve internship reports</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-sm">
              Reports analysis shows 2 pending submissions requiring review. Average quality score: 85/100.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-warning/10">
                <FileText className="w-8 h-8 text-warning mx-auto mb-2" />
                <p className="text-2xl font-bold">
                  {mockReports.filter(r => r.status === 'pending').length}
                </p>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-success/10">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="text-2xl font-bold">
                  {mockReports.filter(r => r.status === 'approved').length}
                </p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/10">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold">
                  {(mockReports.reduce((sum, r) => sum + r.quality, 0) / mockReports.length).toFixed(0)}
                </p>
                <p className="text-sm text-muted-foreground">Avg Quality Score</p>
              </div>
            </div>
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
                      <User className="w-4 h-4" />
                      Student
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
                      Submitted On
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Quality
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReports.map((report) => (
                  <TableRow key={report.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{report.title}</TableCell>
                    <TableCell>{report.student}</TableCell>
                    <TableCell>{report.company}</TableCell>
                    <TableCell>{report.submittedOn}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          report.quality >= 85
                            ? 'bg-success text-success-foreground'
                            : report.quality >= 70
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted'
                        }
                      >
                        {report.quality}
                      </Badge>
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
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        {report.status === 'pending' && (
                          <>
                            <Button size="sm" className="bg-success hover:bg-success/90">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
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

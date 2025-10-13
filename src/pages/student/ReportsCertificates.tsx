import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Building2, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockReports = [
  {
    id: 1,
    title: 'Mid-term Report',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    submittedOn: '2025-01-15',
    status: 'approved',
  },
  {
    id: 2,
    title: 'Final Report',
    internship: 'Data Science Intern',
    company: 'Analytics Corp',
    submittedOn: '2025-01-10',
    status: 'pending',
  },
];

const mockCertificates = [
  {
    id: 1,
    title: 'Internship Completion Certificate',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    issuedOn: '2025-01-20',
  },
];

export default function ReportsCertificates() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Reports & Certificates</h1>
        <p className="text-muted-foreground">Manage your internship documentation</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm">
            Your final report submission is due in 3 days. Based on your logbook, we suggest highlighting 
            your API integration work and React component development.
          </p>
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
                  <TableHead>Status</TableHead>
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
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardHeader>
            <CardTitle>My Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Certificate
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
                      Issued On
                    </div>
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCertificates.map((cert) => (
                  <TableRow key={cert.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{cert.title}</TableCell>
                    <TableCell>{cert.company}</TableCell>
                    <TableCell>{cert.issuedOn}</TableCell>
                    <TableCell>
                      <Button className="bg-gradient-accent hover:opacity-90" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
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

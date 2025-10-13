import { motion } from 'framer-motion';
import { Award, Calendar, User, Building2, Download, FileText, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockCertificates = [
  {
    id: 1,
    student: 'Rahul Kumar',
    internship: 'Full Stack Developer',
    company: 'Tech Solutions',
    startDate: '2024-10-01',
    endDate: '2025-01-15',
    status: 'issued',
    verified: true,
  },
  {
    id: 2,
    student: 'Priya Sharma',
    internship: 'Data Analyst',
    company: 'Analytics Corp',
    startDate: '2024-09-15',
    endDate: '2025-01-10',
    status: 'issued',
    verified: true,
  },
  {
    id: 3,
    student: 'Amit Patel',
    internship: 'UI/UX Designer',
    company: 'Creative Studios',
    startDate: '2024-11-01',
    endDate: '2025-02-01',
    status: 'pending',
    verified: false,
  },
];

export default function Certificates() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Certificates</h1>
        <p className="text-muted-foreground">Generate and manage internship certificates</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Verification</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockCertificates.length}</p>
              <p className="text-sm text-muted-foreground">Total Certificates</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <FileText className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {mockCertificates.filter(c => c.status === 'issued').length}
              </p>
              <p className="text-sm text-muted-foreground">Issued</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {mockCertificates.filter(c => c.verified).length}
              </p>
              <p className="text-sm text-muted-foreground">AI Verified</p>
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
            <CardTitle>Certificate Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Student
                    </div>
                  </TableHead>
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
                      Duration
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCertificates.map((cert) => (
                  <TableRow key={cert.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{cert.student}</TableCell>
                    <TableCell>{cert.internship}</TableCell>
                    <TableCell>{cert.company}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p>{cert.startDate}</p>
                        <p className="text-muted-foreground">to {cert.endDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={cert.status === 'issued' ? 'default' : 'secondary'}>
                        {cert.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {cert.verified ? (
                        <Badge className="bg-success text-success-foreground">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Pending</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {cert.status === 'issued' ? (
                          <Button size="sm" className="bg-gradient-accent hover:opacity-90">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <Award className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
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

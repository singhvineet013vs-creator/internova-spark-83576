import { motion } from 'framer-motion';
import { FileText, Calendar, Building2, XCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockApplications = [
  {
    id: 1,
    internship: 'Full Stack Developer',
    company: 'Tech Solutions Pvt Ltd',
    appliedOn: '2025-01-05',
    status: 'pending',
  },
  {
    id: 2,
    internship: 'Data Science Intern',
    company: 'Analytics Corp',
    appliedOn: '2025-01-03',
    status: 'accepted',
  },
  {
    id: 3,
    internship: 'UI/UX Design Intern',
    company: 'Creative Studios',
    appliedOn: '2025-01-01',
    status: 'rejected',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending':
      return <Badge variant="secondary">Pending</Badge>;
    case 'accepted':
      return <Badge className="bg-success text-success-foreground">Accepted</Badge>;
    case 'rejected':
      return <Badge variant="destructive">Rejected</Badge>;
    default:
      return null;
  }
};

export default function MyApplications() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>
        <p className="text-muted-foreground">Track your internship applications</p>
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
            Based on your profile, we recommend updating your resume to highlight your React skills. 
            This could improve your acceptance rate by 23%.
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
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell>
                      {application.status === 'pending' && (
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <XCircle className="w-4 h-4 mr-2" />
                          Withdraw
                        </Button>
                      )}
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

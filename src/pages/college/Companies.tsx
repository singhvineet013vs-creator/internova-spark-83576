import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search, Eye, CheckCircle, XCircle, Sparkles, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const mockCompanies = [
  {
    id: 1,
    name: 'Tech Solutions Pvt Ltd',
    industry: 'Technology',
    website: 'techsolutions.com',
    activePostings: 5,
    totalHires: 12,
    status: 'approved',
    matchScore: 94,
  },
  {
    id: 2,
    name: 'Analytics Corp',
    industry: 'Data Science',
    website: 'analyticscorp.com',
    activePostings: 3,
    totalHires: 8,
    status: 'approved',
    matchScore: 88,
  },
  {
    id: 3,
    name: 'Creative Studios',
    industry: 'Design',
    website: 'creativestudios.com',
    activePostings: 2,
    totalHires: 0,
    status: 'pending',
    matchScore: 76,
  },
];

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<typeof mockCompanies[0] | null>(null);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Companies</h1>
        <p className="text-muted-foreground">Manage registered companies and internship postings</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockCompanies.length}</p>
              <p className="text-sm text-muted-foreground">Total Companies</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {mockCompanies.filter(c => c.status === 'approved').length}
              </p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-warning/10">
              <TrendingUp className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {mockCompanies.reduce((sum, c) => sum + c.activePostings, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Active Postings</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {(mockCompanies.reduce((sum, c) => sum + c.matchScore, 0) / mockCompanies.length).toFixed(0)}
              </p>
              <p className="text-sm text-muted-foreground">Avg Match Score</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by company name or industry..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
            <CardTitle>Company Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Active Postings</TableHead>
                  <TableHead>Total Hires</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Match Score
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCompanies.map((company) => (
                  <TableRow key={company.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell>{company.industry}</TableCell>
                    <TableCell>{company.activePostings}</TableCell>
                    <TableCell>{company.totalHires}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          company.matchScore >= 90
                            ? 'bg-success text-success-foreground'
                            : company.matchScore >= 75
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted'
                        }
                      >
                        {company.matchScore}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={company.status === 'approved' ? 'default' : 'secondary'}>
                        {company.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedCompany(company)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="backdrop-blur-md bg-card/95 max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Company Profile</DialogTitle>
                            </DialogHeader>
                            {selectedCompany && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm text-muted-foreground">Name</p>
                                    <p className="font-medium">{selectedCompany.name}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Industry</p>
                                    <p className="font-medium">{selectedCompany.industry}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Website</p>
                                    <p className="font-medium">{selectedCompany.website}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <Badge variant={selectedCompany.status === 'approved' ? 'default' : 'secondary'}>
                                      {selectedCompany.status}
                                    </Badge>
                                  </div>
                                </div>
                                {selectedCompany.status === 'pending' && (
                                  <div className="flex gap-4">
                                    <Button className="flex-1 bg-success hover:bg-success/90">
                                      <CheckCircle className="w-4 h-4 mr-2" />
                                      Approve
                                    </Button>
                                    <Button variant="outline" className="flex-1 text-destructive">
                                      <XCircle className="w-4 h-4 mr-2" />
                                      Reject
                                    </Button>
                                  </div>
                                )}
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
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

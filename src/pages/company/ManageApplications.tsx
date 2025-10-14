import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function ManageApplications() {
  const [searchQuery, setSearchQuery] = useState('');

  const applications = [
    {
      id: '1',
      studentName: 'John Doe',
      position: 'Software Engineer Intern',
      appliedDate: '2024-01-15',
      status: 'pending',
      skills: ['React', 'TypeScript', 'Node.js'],
      experience: '2 years',
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      position: 'Data Science Intern',
      appliedDate: '2024-01-14',
      status: 'reviewed',
      skills: ['Python', 'Machine Learning', 'SQL'],
      experience: '1 year',
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; icon: any }> = {
      pending: { variant: 'secondary', icon: Clock },
      reviewed: { variant: 'default', icon: Eye },
      accepted: { variant: 'default', icon: CheckCircle },
      rejected: { variant: 'destructive', icon: XCircle },
    };
    const { variant, icon: Icon } = variants[status] || variants.pending;
    return (
      <Badge variant={variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {status}
      </Badge>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Manage Applications</h1>
          <p className="text-muted-foreground">Review and manage internship applications</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Application Filters</CardTitle>
            <div className="flex gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by student name or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Applications</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {applications.map((app) => (
              <Card key={app.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{app.studentName}</h3>
                        {getStatusBadge(app.status)}
                      </div>
                      <p className="text-muted-foreground">{app.position}</p>
                      <div className="flex gap-2 flex-wrap">
                        {app.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Applied: {new Date(app.appliedDate).toLocaleDateString()} • Experience: {app.experience}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {app.status === 'pending' && (
                        <>
                          <Button size="sm" variant="default">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Accept
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

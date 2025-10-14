import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, FileText, Calendar, Award } from 'lucide-react';

export default function MyInterns() {
  const interns = [
    {
      id: '1',
      name: 'Sarah Connor',
      position: 'Frontend Developer Intern',
      startDate: '2024-01-01',
      duration: '6 months',
      progress: 65,
      status: 'active',
      tasksCompleted: 12,
      totalTasks: 20,
      attendance: 95,
      performance: 'Excellent',
    },
    {
      id: '2',
      name: 'John Matrix',
      position: 'Backend Developer Intern',
      startDate: '2024-01-15',
      duration: '6 months',
      progress: 45,
      status: 'active',
      tasksCompleted: 8,
      totalTasks: 18,
      attendance: 92,
      performance: 'Good',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Interns</h1>
            <p className="text-muted-foreground">Manage and track your current interns</p>
          </div>
          <Button>Add Intern</Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">Active Interns</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {interns.map((intern) => (
              <Card key={intern.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="text-lg">
                          {intern.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {intern.name}
                          <Badge variant="default">{intern.status}</Badge>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{intern.position}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Started: {new Date(intern.startDate).toLocaleDateString()} • Duration: {intern.duration}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      Performance: {intern.performance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{intern.tasksCompleted}/{intern.totalTasks}</p>
                          <p className="text-sm text-muted-foreground">Tasks Completed</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{intern.attendance}%</p>
                          <p className="text-sm text-muted-foreground">Attendance</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{intern.progress}%</p>
                          <p className="text-sm text-muted-foreground">Overall Progress</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Internship Progress</span>
                      <span className="font-medium">{intern.progress}%</span>
                    </div>
                    <Progress value={intern.progress} />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View Reports
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline" size="sm">
                      <Award className="w-4 h-4 mr-2" />
                      Generate Certificate
                    </Button>
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

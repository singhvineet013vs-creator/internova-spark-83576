import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function CompanyFeedback() {
  const [rating, setRating] = useState(5);

  const feedbackHistory = [
    {
      id: '1',
      internName: 'Sarah Connor',
      date: '2024-01-15',
      rating: 5,
      comment: 'Excellent performance, shows great initiative and technical skills.',
      category: 'Monthly Review',
    },
    {
      id: '2',
      internName: 'John Matrix',
      date: '2024-01-10',
      rating: 4,
      comment: 'Good progress, needs improvement in time management.',
      category: 'Weekly Update',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Intern Feedback</h1>
          <p className="text-muted-foreground">Provide feedback and evaluations for your interns</p>
        </div>

        <Tabs defaultValue="submit" className="w-full">
          <TabsList>
            <TabsTrigger value="submit">Submit Feedback</TabsTrigger>
            <TabsTrigger value="history">Feedback History</TabsTrigger>
          </TabsList>

          <TabsContent value="submit">
            <Card>
              <CardHeader>
                <CardTitle>Submit Intern Feedback</CardTitle>
                <CardDescription>Provide detailed feedback to help interns grow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Select Intern</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an intern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sarah">Sarah Connor - Frontend Developer</SelectItem>
                      <SelectItem value="john">John Matrix - Backend Developer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Feedback Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly Update</SelectItem>
                      <SelectItem value="monthly">Monthly Review</SelectItem>
                      <SelectItem value="project">Project Completion</SelectItem>
                      <SelectItem value="final">Final Evaluation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Performance Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-colors ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                    <span className="ml-2 text-muted-foreground">({rating}/5)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Feedback Comments</Label>
                  <Textarea
                    placeholder="Provide detailed feedback about the intern's performance, strengths, and areas for improvement..."
                    className="min-h-[200px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Technical Skills</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rate technical skills" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="needs-improvement">Needs Improvement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Communication Skills</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rate communication" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="average">Average</SelectItem>
                        <SelectItem value="needs-improvement">Needs Improvement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {feedbackHistory.map((feedback) => (
              <Card key={feedback.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        {feedback.internName}
                      </CardTitle>
                      <CardDescription>
                        {new Date(feedback.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{feedback.category}</Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < feedback.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feedback.comment}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

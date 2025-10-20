import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Users, Star, ThumbsUp, AlertCircle, Filter, Download, Eye, Brain, Sparkles, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockFeedback = [
  {
    id: 1,
    from: 'Rahul Kumar',
    to: 'Tech Solutions',
    type: 'student_to_company',
    rating: 5,
    sentiment: 'positive',
    category: 'Work Environment',
    comment: 'Excellent learning experience with great mentorship',
    date: '2025-01-15',
    aiInsights: 'Highly positive feedback highlighting mentorship quality',
  },
  {
    id: 2,
    from: 'Tech Solutions',
    to: 'Rahul Kumar',
    type: 'company_to_student',
    rating: 4,
    sentiment: 'positive',
    category: 'Performance',
    comment: 'Good technical skills, needs improvement in communication',
    date: '2025-01-14',
    aiInsights: 'Performance feedback with constructive suggestions',
  },
  {
    id: 3,
    from: 'Priya Sharma',
    to: 'Analytics Corp',
    type: 'student_to_company',
    rating: 4,
    sentiment: 'positive',
    category: 'Learning',
    comment: 'Great exposure to real-world data analytics projects',
    date: '2025-01-13',
    aiInsights: 'Positive learning experience feedback',
  },
  {
    id: 4,
    from: 'Amit Patel',
    to: 'Creative Studios',
    type: 'student_to_company',
    rating: 3,
    sentiment: 'neutral',
    category: 'Support',
    comment: 'Decent experience but expected more structured guidance',
    date: '2025-01-12',
    aiInsights: 'Neutral feedback indicating room for improvement in guidance',
  },
];

export default function Feedback() {
  const [selectedFeedback, setSelectedFeedback] = useState<typeof mockFeedback[0] | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const avgRating = (mockFeedback.reduce((sum, f) => sum + f.rating, 0) / mockFeedback.length).toFixed(1);
  const positiveFeedback = mockFeedback.filter(f => f.sentiment === 'positive').length;
  const neutralFeedback = mockFeedback.filter(f => f.sentiment === 'neutral').length;

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Feedback Management
          </h1>
          <p className="text-muted-foreground">AI-powered sentiment analysis and feedback insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-accent hover:opacity-90 gap-2">
            <MessageSquare className="w-4 h-4" />
            Request Feedback
          </Button>
        </div>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            <CardTitle>AI Sentiment Analysis Dashboard</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{mockFeedback.length}</p>
              <p className="text-sm text-muted-foreground">Total Feedback</p>
              <p className="text-xs text-accent mt-1">↑ 8% this month</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-warning/10 border border-warning/20">
              <Star className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-3xl font-bold">{avgRating}</p>
              <p className="text-sm text-muted-foreground">Avg Rating</p>
              <Progress value={parseFloat(avgRating) * 20} className="mt-2 h-1" />
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10 border border-success/20">
              <ThumbsUp className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-3xl font-bold">{positiveFeedback}</p>
              <p className="text-sm text-muted-foreground">Positive</p>
              <p className="text-xs text-success mt-1">{((positiveFeedback / mockFeedback.length) * 100).toFixed(0)}%</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
              <AlertCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-bold">{neutralFeedback}</p>
              <p className="text-sm text-muted-foreground">Needs Attention</p>
              <p className="text-xs text-accent mt-1">Action Required</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-success/5 to-primary/5 border-success/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Top Rated Company</p>
                    <p className="text-lg font-bold">Tech Solutions</p>
                    <Badge className="bg-success text-success-foreground mt-1">5.0 ★</Badge>
                  </div>
                  <TrendingUp className="w-10 h-10 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/5 to-warning/5 border-accent/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Most Improved</p>
                    <p className="text-lg font-bold">Analytics Corp</p>
                    <Badge variant="secondary" className="mt-1">↑ 0.8 points</Badge>
                  </div>
                  <BarChart3 className="w-10 h-10 text-accent" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-warning/5 to-success/5 border-warning/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Common Theme</p>
                    <p className="text-lg font-bold">Mentorship</p>
                    <Badge className="bg-warning text-warning-foreground mt-1">85% Mentioned</Badge>
                  </div>
                  <Users className="w-10 h-10 text-warning" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="work">Work Environment</SelectItem>
                <SelectItem value="learning">Learning</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardHeader className="border-b border-accent/20">
            <div className="flex items-center justify-between">
              <CardTitle>Feedback Directory</CardTitle>
              <Badge variant="outline" className="gap-1">
                <Sparkles className="w-3 h-3" />
                AI Analyzed
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                <TabsTrigger value="all" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  All Feedback ({mockFeedback.length})
                </TabsTrigger>
                <TabsTrigger value="positive" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Positive ({positiveFeedback})
                </TabsTrigger>
                <TabsTrigger value="neutral" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  Needs Attention ({neutralFeedback})
                </TabsTrigger>
                <TabsTrigger value="insights" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                  AI Insights
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="p-6">
                <div className="space-y-4">
                  {mockFeedback.map((feedback) => (
                    <Card key={feedback.id} className="hover:shadow-md transition-shadow border-accent/10">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <p className="font-medium">{feedback.from}</p>
                              <span className="text-muted-foreground">→</span>
                              <p className="text-muted-foreground">{feedback.to}</p>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="outline">{feedback.category}</Badge>
                              <Badge className={
                                feedback.sentiment === 'positive' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground'
                              }>
                                {feedback.sentiment}
                              </Badge>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star key={i} className={`w-4 h-4 ${i < feedback.rating ? 'fill-warning text-warning' : 'text-muted'}`} />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{feedback.comment}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Brain className="w-3 h-3 text-accent" />
                              <span>{feedback.aiInsights}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground mb-2">{feedback.date}</p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedFeedback(feedback)}
                                  className="gap-2"
                                >
                                  <Eye className="w-4 h-4" />
                                  Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="backdrop-blur-md bg-card/95">
                                <DialogHeader>
                                  <DialogTitle>Feedback Details</DialogTitle>
                                </DialogHeader>
                                {selectedFeedback && (
                                  <div className="space-y-4">
                                    <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                                      <CardContent className="pt-6">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <p className="text-sm text-muted-foreground">From</p>
                                            <p className="font-medium">{selectedFeedback.from}</p>
                                          </div>
                                          <div>
                                            <p className="text-sm text-muted-foreground">To</p>
                                            <p className="font-medium">{selectedFeedback.to}</p>
                                          </div>
                                          <div>
                                            <p className="text-sm text-muted-foreground">Category</p>
                                            <Badge variant="outline">{selectedFeedback.category}</Badge>
                                          </div>
                                          <div>
                                            <p className="text-sm text-muted-foreground">Sentiment</p>
                                            <Badge className={
                                              selectedFeedback.sentiment === 'positive' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground'
                                            }>
                                              {selectedFeedback.sentiment}
                                            </Badge>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-2">Rating</p>
                                      <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                          <Star key={i} className={`w-5 h-5 ${i < selectedFeedback.rating ? 'fill-warning text-warning' : 'text-muted'}`} />
                                        ))}
                                        <span className="ml-2 font-semibold">{selectedFeedback.rating}/5</span>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-sm text-muted-foreground mb-2">Feedback</p>
                                      <p className="text-sm">{selectedFeedback.comment}</p>
                                    </div>
                                    <Card className="bg-accent/5 border-accent/20">
                                      <CardContent className="pt-4">
                                        <div className="flex items-start gap-2">
                                          <Brain className="w-5 h-5 text-accent mt-0.5" />
                                          <div>
                                            <p className="text-sm font-semibold mb-1">AI Analysis</p>
                                            <p className="text-sm text-muted-foreground">{selectedFeedback.aiInsights}</p>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="positive" className="p-6">
                <div className="text-center py-8 text-muted-foreground">
                  Showing positive feedback only...
                </div>
              </TabsContent>

              <TabsContent value="neutral" className="p-6">
                <div className="text-center py-8 text-muted-foreground">
                  Showing feedback that needs attention...
                </div>
              </TabsContent>

              <TabsContent value="insights" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Sentiment Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Positive</span>
                            <span className="font-semibold">{((positiveFeedback / mockFeedback.length) * 100).toFixed(0)}%</span>
                          </div>
                          <Progress value={(positiveFeedback / mockFeedback.length) * 100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Neutral</span>
                            <span className="font-semibold">{((neutralFeedback / mockFeedback.length) * 100).toFixed(0)}%</span>
                          </div>
                          <Progress value={(neutralFeedback / mockFeedback.length) * 100} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Category Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Work Environment</span>
                            <span className="font-semibold">25%</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Learning</span>
                            <span className="font-semibold">25%</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Performance</span>
                            <span className="font-semibold">25%</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Support</span>
                            <span className="font-semibold">25%</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
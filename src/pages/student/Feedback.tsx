import { motion } from 'framer-motion';
import { Star, Building2, Calendar, MessageSquare, Sparkles, ThumbsUp, ThumbsDown, TrendingUp, Award, Brain, Target, BarChart3, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockFeedback = [
  {
    id: 1,
    type: 'received',
    from: 'Tech Solutions Pvt Ltd',
    rating: 4.5,
    comment: 'Great work on the React components. Shows strong understanding of modern development practices.',
    date: '2025-01-15',
    sentiment: 'positive',
    category: 'Technical Skills',
  },
  {
    id: 2,
    type: 'given',
    to: 'Analytics Corp',
    rating: 5,
    comment: 'Excellent mentorship and learning environment. Highly recommend this internship.',
    date: '2025-01-10',
    sentiment: 'positive',
    category: 'Company Culture',
  },
  {
    id: 3,
    type: 'received',
    from: 'Creative Studios',
    rating: 3.5,
    comment: 'Good effort, but needs improvement in time management and communication.',
    date: '2025-01-05',
    sentiment: 'neutral',
    category: 'Soft Skills',
  },
  {
    id: 4,
    type: 'received',
    from: 'Tech Solutions Pvt Ltd',
    rating: 5,
    comment: 'Exceptional problem-solving skills and quick learner. Asset to the team.',
    date: '2025-01-12',
    sentiment: 'positive',
    category: 'Performance',
  },
];

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'fill-accent text-accent'
              : i < rating
              ? 'fill-accent/50 text-accent'
              : 'text-muted-foreground'
          }`}
        />
      ))}
      <span className="text-sm ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case 'positive':
      return <ThumbsUp className="w-4 h-4 text-success" />;
    case 'negative':
      return <ThumbsDown className="w-4 h-4 text-destructive" />;
    default:
      return <AlertCircle className="w-4 h-4 text-warning" />;
  }
};

export default function Feedback() {
  const receivedFeedback = mockFeedback.filter(f => f.type === 'received');
  const avgRating = receivedFeedback.reduce((sum, f) => sum + f.rating, 0) / receivedFeedback.length;
  const positiveFeedback = mockFeedback.filter(f => f.sentiment === 'positive').length;
  const positivePercentage = Math.round((positiveFeedback / mockFeedback.length) * 100);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Feedback & Reviews</h1>
        <p className="text-muted-foreground">Track your performance with AI-powered sentiment analysis</p>
      </motion.div>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="backdrop-blur-md bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-3xl font-bold text-primary">{avgRating.toFixed(1)}</p>
              </div>
              <Award className="w-10 h-10 text-primary opacity-50" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(avgRating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Positive</p>
                <p className="text-3xl font-bold text-success">{positivePercentage}%</p>
              </div>
              <ThumbsUp className="w-10 h-10 text-success opacity-50" />
            </div>
            <Progress value={positivePercentage} className="mt-2 h-1.5" />
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reviews</p>
                <p className="text-3xl font-bold text-accent">{mockFeedback.length}</p>
              </div>
              <MessageSquare className="w-10 h-10 text-accent opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">From companies & mentors</p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-md bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Growth</p>
                <p className="text-3xl font-bold text-warning">+18%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-warning opacity-50" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Sentiment Analysis */}
      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-transparent">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Sentiment Analysis & Performance Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Sentiment Distribution
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-success" />
                      <span className="font-medium">Positive</span>
                    </div>
                    <span className="text-2xl font-bold text-success">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-warning" />
                      <span className="font-medium">Neutral</span>
                    </div>
                    <span className="text-2xl font-bold">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ThumbsDown className="w-5 h-5 text-destructive" />
                      <span className="font-medium">Needs Work</span>
                    </div>
                    <span className="text-2xl font-bold text-destructive">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Strength Areas
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-success/5 rounded border border-success/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Technical Skills</span>
                    <Badge className="bg-success text-success-foreground">Excellent</Badge>
                  </div>
                  <Progress value={95} className="h-1.5" />
                </div>
                <div className="p-3 bg-success/5 rounded border border-success/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Problem Solving</span>
                    <Badge className="bg-success text-success-foreground">Excellent</Badge>
                  </div>
                  <Progress value={90} className="h-1.5" />
                </div>
                <div className="p-3 bg-accent/5 rounded border border-accent/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">Teamwork</span>
                    <Badge className="bg-accent text-accent-foreground">Good</Badge>
                  </div>
                  <Progress value={85} className="h-1.5" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Brain className="w-4 h-4 text-primary" />
                AI Recommendations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 p-3 bg-primary/5 rounded border border-primary/20">
                  <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Communication Skills</p>
                    <p className="text-xs text-muted-foreground">Take a communication course to boost ratings by 15%</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 p-3 bg-primary/5 rounded border border-primary/20">
                  <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Time Management</p>
                    <p className="text-xs text-muted-foreground">Use project management tools to improve delivery times</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 p-3 bg-success/5 rounded border border-success/20">
                  <Award className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Keep Up the Great Work!</p>
                    <p className="text-xs text-muted-foreground">Your technical skills are highly praised</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="all">All Feedback</TabsTrigger>
          <TabsTrigger value="received">Received</TabsTrigger>
          <TabsTrigger value="given">Given</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Feedback & Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        From/To
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Rating
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Comment
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date
                      </div>
                    </TableHead>
                    <TableHead>Sentiment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockFeedback.map((feedback) => (
                    <TableRow key={feedback.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <Badge variant={feedback.type === 'received' ? 'default' : 'secondary'}>
                          {feedback.type === 'received' ? 'Received' : 'Given'}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {feedback.type === 'received' ? feedback.from : feedback.to}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{feedback.category}</Badge>
                      </TableCell>
                      <TableCell>{renderStars(feedback.rating)}</TableCell>
                      <TableCell className="max-w-md">
                        <p className="text-sm line-clamp-2">{feedback.comment}</p>
                      </TableCell>
                      <TableCell>{feedback.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getSentimentIcon(feedback.sentiment)}
                          <span className="text-sm capitalize">{feedback.sentiment}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="received">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Feedback Received</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {receivedFeedback.map((feedback) => (
                <div key={feedback.id} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{feedback.from}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(feedback.rating)}
                        <Badge variant="outline" className="text-xs">{feedback.category}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        {getSentimentIcon(feedback.sentiment)}
                        <span className="text-sm capitalize">{feedback.sentiment}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{feedback.date}</p>
                    </div>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="given">
          <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Feedback Given</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockFeedback.filter(f => f.type === 'given').map((feedback) => (
                <div key={feedback.id} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{feedback.to}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(feedback.rating)}
                        <Badge variant="outline" className="text-xs">{feedback.category}</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{feedback.date}</p>
                  </div>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

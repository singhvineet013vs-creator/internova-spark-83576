import { motion } from 'framer-motion';
import { Star, Building2, Calendar, MessageSquare, Sparkles, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockFeedback = [
  {
    id: 1,
    type: 'received',
    from: 'Tech Solutions Pvt Ltd',
    rating: 4.5,
    comment: 'Great work on the React components. Shows strong understanding of modern development practices.',
    date: '2025-01-15',
    sentiment: 'positive',
  },
  {
    id: 2,
    type: 'given',
    to: 'Analytics Corp',
    rating: 5,
    comment: 'Excellent mentorship and learning environment. Highly recommend this internship.',
    date: '2025-01-10',
    sentiment: 'positive',
  },
  {
    id: 3,
    type: 'received',
    from: 'Creative Studios',
    rating: 3.5,
    comment: 'Good effort, but needs improvement in time management and communication.',
    date: '2025-01-05',
    sentiment: 'neutral',
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
      <span className="text-sm ml-1">{rating.toFixed(1)}</span>
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
      return null;
  }
};

export default function Feedback() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Feedback</h1>
        <p className="text-muted-foreground">View feedback from companies and mentors</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Sentiment Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-success/10">
              <ThumbsUp className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-success">85%</p>
              <p className="text-sm text-muted-foreground">Positive</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <MessageSquare className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-2xl font-bold">10%</p>
              <p className="text-sm text-muted-foreground">Neutral</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-destructive/10">
              <ThumbsDown className="w-8 h-8 text-destructive mx-auto mb-2" />
              <p className="text-2xl font-bold text-destructive">5%</p>
              <p className="text-sm text-muted-foreground">Needs Improvement</p>
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
            <CardTitle>All Feedback</CardTitle>
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
                    <TableCell>{renderStars(feedback.rating)}</TableCell>
                    <TableCell className="max-w-md truncate">{feedback.comment}</TableCell>
                    <TableCell>{feedback.date}</TableCell>
                    <TableCell>{getSentimentIcon(feedback.sentiment)}</TableCell>
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

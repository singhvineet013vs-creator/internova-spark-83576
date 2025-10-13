import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, FileText, Upload, Sparkles, Edit, Trash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const mockEntries = [
  {
    id: 1,
    date: '2025-01-10',
    title: 'React Component Development',
    description: 'Built reusable form components with validation',
    hours: 8,
  },
  {
    id: 2,
    date: '2025-01-09',
    title: 'API Integration',
    description: 'Integrated REST APIs for user authentication',
    hours: 6,
  },
];

export default function MyLogbook() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">My Logbook</h1>
          <p className="text-muted-foreground">Track your daily internship activities</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-accent hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="backdrop-blur-md bg-card/95">
            <DialogHeader>
              <DialogTitle>Add Logbook Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="What did you work on?" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your activities..." rows={4} />
              </div>
              <div>
                <Label htmlFor="hours">Hours Worked</Label>
                <Input id="hours" type="number" placeholder="8" />
              </div>
              <div>
                <Label htmlFor="file">Supporting Documents</Label>
                <div className="flex items-center gap-2">
                  <Input id="file" type="file" />
                  <Button variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full bg-gradient-accent hover:opacity-90">Submit Entry</Button>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
        <CardHeader className="border-b border-accent/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <CardTitle>AI Summary</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm">
            You've logged 14 hours this week focusing on React development and API integration. 
            Great progress! Consider documenting your learnings in more detail.
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
            <CardTitle>Logbook Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Title
                    </div>
                  </TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEntries.map((entry) => (
                  <TableRow key={entry.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell>{entry.date}</TableCell>
                    <TableCell className="font-medium">{entry.title}</TableCell>
                    <TableCell>{entry.description}</TableCell>
                    <TableCell>{entry.hours}h</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                          <Trash className="w-4 h-4" />
                        </Button>
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

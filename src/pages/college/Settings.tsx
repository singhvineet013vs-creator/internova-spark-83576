import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Building2, Bell, Shield, Users, FileText, Save, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newApplications, setNewApplications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [studentUpdates, setStudentUpdates] = useState(false);

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          College Settings
        </h1>
        <p className="text-muted-foreground">Manage your college profile and system preferences</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="backdrop-blur-md bg-card/80 shadow-lg border-0">
          <CardContent className="p-0">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                <TabsTrigger value="profile" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary gap-2">
                  <Building2 className="w-4 h-4" />
                  College Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary gap-2">
                  <Bell className="w-4 h-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary gap-2">
                  <Shield className="w-4 h-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="users" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary gap-2">
                  <Users className="w-4 h-4" />
                  User Management
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">College Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="college-name">College Name</Label>
                      <Input id="college-name" defaultValue="Government Engineering College" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="college-code">College Code</Label>
                      <Input id="college-code" defaultValue="GEC2025" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Label>
                      <Input id="email" type="email" defaultValue="admin@gec.edu.in" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Phone
                      </Label>
                      <Input id="phone" type="tel" defaultValue="+91 1234567890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Website
                      </Label>
                      <Input id="website" type="url" defaultValue="https://gec.edu.in" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </Label>
                      <Input id="location" defaultValue="New Delhi, India" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-4">Administrative Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="principal">Principal Name</Label>
                      <Input id="principal" defaultValue="Dr. Rajesh Kumar" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tpo">Training & Placement Officer</Label>
                      <Input id="tpo" defaultValue="Prof. Sunita Sharma" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departments">Number of Departments</Label>
                      <Input id="departments" type="number" defaultValue="8" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="students">Total Students</Label>
                      <Input id="students" type="number" defaultValue="2500" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-accent hover:opacity-90 gap-2" onClick={handleSave}>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                  <Card className="border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-base">Email Notifications</CardTitle>
                      <CardDescription>Manage your email notification settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notif">Enable Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch
                          id="email-notif"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="new-apps">New Application Alerts</Label>
                          <p className="text-sm text-muted-foreground">Get notified when students apply for internships</p>
                        </div>
                        <Switch
                          id="new-apps"
                          checked={newApplications}
                          onCheckedChange={setNewApplications}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="weekly-reports">Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">Receive weekly summary reports</p>
                        </div>
                        <Switch
                          id="weekly-reports"
                          checked={weeklyReports}
                          onCheckedChange={setWeeklyReports}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="student-updates">Student Updates</Label>
                          <p className="text-sm text-muted-foreground">Updates on student progress and milestones</p>
                        </div>
                        <Switch
                          id="student-updates"
                          checked={studentUpdates}
                          onCheckedChange={setStudentUpdates}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-accent hover:opacity-90 gap-2" onClick={handleSave}>
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="security" className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                  <div className="space-y-6">
                    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary" />
                          Password & Authentication
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Update Password</Button>
                      </CardContent>
                    </Card>

                    <Card className="border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-base">Two-Factor Authentication</CardTitle>
                        <CardDescription>Add an extra layer of security to your account</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline">Enable 2FA</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="users" className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">User Management</h3>
                    <Button className="bg-gradient-accent hover:opacity-90 gap-2">
                      <Users className="w-4 h-4" />
                      Add User
                    </Button>
                  </div>
                  <Card className="border-accent/20">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-lg border border-accent/10 hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="font-medium">Admin User</p>
                            <p className="text-sm text-muted-foreground">admin@gec.edu.in</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Role: Administrator</span>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-lg border border-accent/10 hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="font-medium">TPO User</p>
                            <p className="text-sm text-muted-foreground">tpo@gec.edu.in</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Role: TPO</span>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
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
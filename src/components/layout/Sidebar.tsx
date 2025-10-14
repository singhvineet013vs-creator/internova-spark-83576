import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Users,
  Building2,
  FileText,
  Settings,
  BookOpen,
  Award,
  MessageSquare,
  User,
  BarChart3,
  GraduationCap,
  Search,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const getNavigationItems = () => {
    switch (profile?.role) {
      case 'student':
        return [
          { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
          { icon: Search, label: 'Find Internships', path: '/dashboard/student/find-internships' },
          { icon: FileText, label: 'My Applications', path: '/dashboard/student/my-applications' },
          { icon: BookOpen, label: 'My Logbook', path: '/dashboard/student/my-logbook' },
          { icon: Award, label: 'Reports & Certificates', path: '/dashboard/student/reports-certificates' },
          { icon: GraduationCap, label: 'Skill Courses', path: '/dashboard/student/skill-courses' },
          { icon: MessageSquare, label: 'Feedback', path: '/dashboard/student/feedback' },
        ];
      case 'company':
        return [
          { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
          { icon: FileText, label: 'Manage Applications', path: '/dashboard/company/manage-applications' },
          { icon: Users, label: 'Candidates', path: '/dashboard/company/candidates' },
          { icon: User, label: 'My Interns', path: '/dashboard/company/my-interns' },
          { icon: MessageSquare, label: 'Feedback', path: '/dashboard/company/feedback' },
          { icon: Settings, label: 'Settings', path: '/dashboard/company/settings' },
        ];
      case 'college_admin':
        return [
          { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
          { icon: Users, label: 'Students', path: '/dashboard/college/students' },
          { icon: Building2, label: 'Companies', path: '/dashboard/college/companies' },
          { icon: FileText, label: 'Reports', path: '/dashboard/college/reports' },
          { icon: Award, label: 'Certificates', path: '/dashboard/college/certificates' },
          { icon: MessageSquare, label: 'Feedback', path: '/dashboard/college/feedback' },
          { icon: Settings, label: 'Settings', path: '/dashboard/college/settings' },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className={cn(
      "bg-card border-r border-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">Prashiskshan</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 p-0"
        >
          {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                isCollapsed && "px-3 justify-center"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="flex-1 text-left">{item.label}</span>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Profile & Sign Out */}
      <div className="p-4 border-t border-border">
        {!isCollapsed && (
          <div className="mb-3 p-3 bg-muted rounded-lg">
            <p className="font-medium text-sm">{profile?.full_name}</p>
            <p className="text-xs text-muted-foreground capitalize">{profile?.role?.replace('_', ' ')}</p>
          </div>
        )}
        <Button
          variant="outline"
          className={cn(
            "w-full gap-2",
            isCollapsed && "px-3 justify-center"
          )}
          onClick={async () => {
            setIsSigningOut(true);
            await signOut();
            navigate('/auth');
          }}
          disabled={isSigningOut}
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && (isSigningOut ? "Signing Out..." : "Sign Out")}
        </Button>
      </div>
    </div>
  );
}
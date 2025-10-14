import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ChatbotWidget from "@/components/ChatbotWidget";

// Lazy load route components for code splitting
const Index = lazy(() => import("./pages/Index"));
const AuthPage = lazy(() => import("./components/auth/AuthPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Student routes
const FindInternships = lazy(() => import("./pages/student/FindInternships"));
const MyApplications = lazy(() => import("./pages/student/MyApplications"));
const MyLogbook = lazy(() => import("./pages/student/MyLogbook"));
const ReportsCertificates = lazy(() => import("./pages/student/ReportsCertificates"));
const SkillCourses = lazy(() => import("./pages/student/SkillCourses"));
const StudentFeedback = lazy(() => import("./pages/student/Feedback"));

// College routes
const Students = lazy(() => import("./pages/college/Students"));
const Companies = lazy(() => import("./pages/college/Companies"));
const Reports = lazy(() => import("./pages/college/Reports"));
const Certificates = lazy(() => import("./pages/college/Certificates"));

// Company routes
const ManageApplications = lazy(() => import("./pages/company/ManageApplications"));
const Candidates = lazy(() => import("./pages/company/Candidates"));
const MyInterns = lazy(() => import("./pages/company/MyInterns"));
const CompanyFeedback = lazy(() => import("./pages/company/Feedback"));
const CompanySettings = lazy(() => import("./pages/company/Settings"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Student Dashboard Routes */}
              <Route path="/dashboard/student/find-internships" element={<FindInternships />} />
              <Route path="/dashboard/student/my-applications" element={<MyApplications />} />
              <Route path="/dashboard/student/my-logbook" element={<MyLogbook />} />
              <Route path="/dashboard/student/reports-certificates" element={<ReportsCertificates />} />
              <Route path="/dashboard/student/skill-courses" element={<SkillCourses />} />
              <Route path="/dashboard/student/feedback" element={<StudentFeedback />} />
              
              {/* College Dashboard Routes */}
              <Route path="/dashboard/college/students" element={<Students />} />
              <Route path="/dashboard/college/companies" element={<Companies />} />
              <Route path="/dashboard/college/reports" element={<Reports />} />
              <Route path="/dashboard/college/certificates" element={<Certificates />} />
              
              {/* Company Dashboard Routes */}
              <Route path="/dashboard/company/manage-applications" element={<ManageApplications />} />
              <Route path="/dashboard/company/candidates" element={<Candidates />} />
              <Route path="/dashboard/company/my-interns" element={<MyInterns />} />
              <Route path="/dashboard/company/feedback" element={<CompanyFeedback />} />
              <Route path="/dashboard/company/settings" element={<CompanySettings />} />
              
              {/* Legacy routes for backwards compatibility */}
              <Route path="/student-dashboard" element={<Dashboard />} />
              <Route path="/faculty-dashboard" element={<Dashboard />} />
              <Route path="/industry-dashboard" element={<Dashboard />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ChatbotWidget />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

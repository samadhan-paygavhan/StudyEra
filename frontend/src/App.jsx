import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CoursesPage from "./pages/courses/CoursesPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import MyBatchPage from "./pages/my-batch/MyBatchPage";
import InstructorPage from "./pages/instructor/InstructorPage";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import Verify from "./pages/verify";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyOTP from "./pages/VerifyOTP";
import ChangePassword from "./pages/ChangePassword";
import CourseDetailPage from "./pages/course-detail/CourseDetailPage";
import AuthSuccess from "./pages/AuthSuccess";
import Order from "./pages/Order";
import WatchVideo from "./pages/my-batch/WatchVideo";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api/courses" element={<CoursesPage />} />
          <Route
            path="/api/mybatch"
            element={
              <ProtectedRoute>
                <MyBatchPage />
              </ProtectedRoute>
            }
          />
          <Route path="/api/instructor" element={<InstructorPage />} />
          <Route path="/api/about" element={<AboutPage />} />
          <Route path="/api/login" element={<LoginPage />} />
          <Route path="/api/signup" element={<SignupPage />} />
          <Route path="/api/verify" element={<VerifyEmail />} />
          <Route path="/api/verify/:token" element={<Verify />} />
          <Route path="/api/verify-otp/:email" element={<VerifyOTP />} />
          <Route
            path="/api/change-password/:email"
            element={<ChangePassword />}
          />
          <Route path="/api/forgot-password" element={<ForgotPassword />} />
          <Route path="/api/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/auth-success" element={<AuthSuccess />} />
          <Route
            path="/api/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/api/mybatch/watch/:courseId"
            element={
              <ProtectedRoute>
                <WatchVideo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/api/order/:courseId"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

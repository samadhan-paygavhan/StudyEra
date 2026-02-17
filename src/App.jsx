import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CoursesPage from "./pages/courses/CoursesPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import MyBatchPage from "./pages/my-batch/MyBatchPage";
import InstructorPage from "./pages/instructor/InstructorPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import ExploreAndFooter from "./components/common/ExploreAndFooter";
import NotFound from "./pages/NotFound";
import VerifyEmail from "./pages/VerifyEmail";
import Verify from "./pages/verify";
import ForgotPassword from "./pages/ForgotPassword";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyOTP from "./pages/VerifyOTP";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/batch" element={<MyBatchPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/verify-otp/:email" element={<VerifyOTP />} />
          <Route path="/change-password/:email" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

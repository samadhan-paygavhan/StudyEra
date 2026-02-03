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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/batch" element={<MyBatchPage />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ExploreAndFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

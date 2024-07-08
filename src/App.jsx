import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import { Navigate } from "react-router-dom";
import NewProject from "./pages/new-project";
import Projects from "./pages/projects";
import Auth from "./pages/auth";
import { useEffect } from "react";
import { auth } from "./config/firebase";
import { Toaster } from "sonner";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        console.log(userCredentials?.providerData[0]);
      } else {
        navigate("/auth", { replace: true });
      }
    });
  }, []);

  return (
    <div className="bg-white dark:bg-[#141417] min-h-screen text-white">
      <Toaster richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<NewProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/auth" element={<Auth />} />

        {/* default direct to home page  */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

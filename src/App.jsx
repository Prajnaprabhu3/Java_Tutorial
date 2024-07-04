import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Navigate } from "react-router-dom";
import NewProject from "./pages/new-project";
import Projects from "./pages/projects";
import Auth from "./pages/auth";

function App() {
  return (
    <div className="bg-white dark:bg-[#141417] min-h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth" element={<Auth />} />

          {/* default direct to home page  */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

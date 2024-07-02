import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<Home />}></Route>

        {/* default direct to home page  */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

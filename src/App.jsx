import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import { Navigate } from "react-router-dom";
import NewProject from "./pages/new-project";
import Projects from "./pages/projects";
import Auth from "./pages/auth";
import { useEffect } from "react";
import { auth, db } from "./config/firebase";
import { Toaster } from "sonner";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Loading from "./components/ui/loading";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/user-actions";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        console.log(userCredentials?.providerData[0]);
        setDoc(
          doc(db, "users", userCredentials?.uid),
          userCredentials?.providerData[0]
        ).then(() => {
          // dispatch the action to redux store
          dispatch(SET_USER(userCredentials?.providerData[0]));
          navigate("/", { replace: true });
        });
      } else {
        navigate("/auth", { replace: true });
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-white dark:bg-[#141417] min-h-screen text-white">
      <Toaster richColors />

      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/auth" element={<Auth />} />

          {/* default direct to home page  */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

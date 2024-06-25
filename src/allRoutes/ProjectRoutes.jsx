import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/index.js";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading.jsx";
import InnerGenericPage from "../pages/InnerGenericPage.jsx";
const ProjectRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<InnerGenericPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default ProjectRoutes;

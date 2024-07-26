import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/index.js";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading.jsx";
import InnerGenericPage from "../pages/InnerGenericPage.jsx";
import Books from "../pages/Books.jsx";
const ProjectRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

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
            <Route path="/book" element={<Books/>}/>
            <Route path="/:section/:item" element={<InnerGenericPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default ProjectRoutes;

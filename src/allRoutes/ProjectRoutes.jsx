import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Books from "../pages/Books.jsx";
import { Home } from "../pages/index.js";
import InnerGenericPage from "../pages/InnerGenericPage.jsx";
import Loading from "../components/loading/Loading.jsx";

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

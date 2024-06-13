import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "../pages/index.js";
const ProjectRoutes = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path = "/" element={<Home/>} />
            </Routes>
        </Router>
        </>
    )
}


export default ProjectRoutes
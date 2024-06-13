import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";


const Layout = ({children}) => {

    return (
        <>
        <Navbar/>
            <div>
            {children}
            </div>
            <Footer/>
        </>
    )
}

Layout.propTypes = {
    children : PropTypes.node.isRequired
}

export default Layout;

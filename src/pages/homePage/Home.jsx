import Layout from "../../components/layout/Layout.jsx";
import Banner from "../../components/banner/Banner.jsx";
import {About} from "./About.jsx";
import Post from "./Post.jsx";
import Gallery from "./Gallery.jsx";
import Brands from "./Brands.jsx";
import ContactMe from "./ContactMe.jsx";


const Home = () => {
    return (
        <>
        <Layout>
            <Banner/>
            <About/>
            <Post/>
            <Brands/>
            <Gallery/>
            <ContactMe/>
        </Layout>
        </>
    )
}


export  { Home };





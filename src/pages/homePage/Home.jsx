import Layout from "../../components/layout/Layout.jsx";
import Banner from "../../components/banner/Banner.jsx";
import {About} from "./About.jsx";
import Post from "./Post.jsx";
import Gallery from "./Gallery.jsx";


const Home = () => {
    return (
        <>
        <Layout>
            <Banner/>
            <About/>
            <Post/>
            <Gallery/>
        </Layout>
        </>
    )
}


export  { Home };





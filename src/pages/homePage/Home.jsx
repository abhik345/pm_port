import Layout from "../../components/layout/Layout.jsx";
import Banner from "../../components/banner/Banner.jsx";
import { About } from "./About.jsx";
import Post from "./Post.jsx";
import Brands from "./Brands.jsx";
import ContactMe from "./ContactMe.jsx";
import Projects from "./Projects.jsx";


const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Projects/>
        <Post />
        <Brands />
        {/* <Gallery /> */}
        <ContactMe />
      </Layout>
    </>
  );
};

export { Home };

import { About } from "./About.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Brands from "./Brands.jsx";
import ContactMe from "./ContactMe.jsx";
import Layout from "../../components/layout/Layout.jsx";
import Post from "./Post.jsx";
import Projects from "./Projects.jsx";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Projects/>
        <Brands />
        <Post />
        {/* <Gallery /> */}
        <ContactMe />
      </Layout>
    </>
  );
};

export { Home };

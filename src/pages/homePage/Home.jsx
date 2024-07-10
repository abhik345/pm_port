import Layout from "../../components/layout/Layout.jsx";
import Banner from "../../components/banner/Banner.jsx";
import { About } from "./About.jsx";
import Post from "./Post.jsx";
import Gallery from "./Gallery.jsx";
import Brands from "./Brands.jsx";
import ContactMe from "./ContactMe.jsx";
import Projects from "./Projects.jsx";

const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/(^-|-$)/g, "");
};

const sectionsData = [
  {
    id: 1,
    title: "Section I",
    subtitle: "Crossing The Digital Frontier",
    link : createSlug("Crossing The Digital Frontier"),
    colSpan: 2,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "AN OVERVIEW OF THE LANDSCAPE",
        link: createSlug("AN OVERVIEW OF THE LANDSCAPE"),
        description: "Absorb the view first",
      },
    ],
  },
  {
    id: 2,
    title: "Section II",
    subtitle: "Shifting The Paradigm",
    link : createSlug("Shifting The Paradigm"),
    colSpan: 3,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "EMBRACE THE DIGITAL MINDSET",
        link: createSlug("EMBRACE THE DIGITAL MINDSET"),
        description: "Get ready for the Game",
      },
      {
        id: 2,
        subtitle: "CREATE YOUR BRAND STRATEGY",
        link: createSlug("CREATE YOUR BRAND STRATEGY"),
        description: "Lay the Foundation",
      },
      {
        id: 3,
        subtitle: "STAY CUSTOMER CENTRIC",
        link: createSlug("STAY CUSTOMER CENTRIC"),
        description: "The reason why your business exists",
      },
    ],
  },
  {
    id: 3,
    title: "Section III",
    subtitle: "Build A Strong Online Presence",
    link : createSlug("Build A Strong Online Presence"),
    colSpan: 1,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "WEBSITE AND BEYOND",
        link: createSlug("WEBSITE AND BEYOND"),
        description: "Your Virtual Showroom",
      },
      {
        id: 2,
        subtitle: "BE PRESENT ON SOCIAL MEDIA",
        link: createSlug("BE PRESENT ON SOCIAL MEDIA"),
        description: "Your window to the world of customers",
      },
    ],
  },
  {
    id: 4,
    title: "Section IV",
    subtitle: "Connect With Your Target Audience",
    link: createSlug("Connect With Your Target Audience"),
    colSpan: 2,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "CREATE ATTRACTIVE CONTENT",
        link: createSlug("CREATE ATTRACTIVE CONTENT"),
        description: "Capture Mind space and Engage Your Audience",
      },
      {
        id: 2,
        subtitle: "LEVERAGE SOCIAL MEDIA",
        link: createSlug("LEVERAGE SOCIAL MEDIA"),
        description: "Connect & Convert",
      },
      {
        id: 3,
        subtitle: "OPTIMIZE SEARCH ENGINE",
        link: createSlug("OPTIMIZE SEARCH ENGINE"),
        description: "Show up when customer looks for your offerings",
      },
      {
        id: 4,
        subtitle: "SUPERCHARGE YOUR MARKETING",
        link: createSlug("SUPERCHARGE YOUR MARKETING"),
        description: "Maximize Returns by paying for Performance",
      },
    ],
  },
  {
    id: 5,
    title: "Section V",
    subtitle: "Get On To The Online Market",
    link : createSlug("Get On To The Online Market"),
    colSpan: 1,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "STARTING E-COMMERCE",
        link: createSlug("E-COMMERCE MARKETPLACES AGGREGATORS"),
        description: "What it entails",
      },
      {
        id: 2,
        subtitle: "FIND YOUR NICHE IN THE ONLINE MARKETPLACES",
        link: createSlug("E-COMMERCE MARKETPLACES AGGREGATORS"),
        description: "The platforms with universal reach",
      },
      {
        id: 3,
        subtitle: "LEVERAGING OTHER AGGREGATORS",
        link: createSlug("E-COMMERCE MARKETPLACES AGGREGATORS"),
        description: "It pays to be the Critic’s choice",
      },
    ],
  },
  {
    id: 6,
    title: "Section VI",
    subtitle: "Adapt To Emerging Trends",
    link: createSlug("Adapt To Emerging Trends"),
    colSpan: 1,
    rowSpan: 1,
    items: [
      {
        id: 1,
        subtitle: "ANALYSE & EVALUATE",
        link: createSlug("ANALYSE & EVALUATE"),
        description: "Time to take some important Calls",
      },
      {
        id: 2,
        subtitle: "ADAPT TO EMERGING TRENDS",
        link: createSlug("ADAPT TO EMERGING TRENDS"),
        description: "Stay Ahead in the Digital Landscape",
      },
      {
        id: 3,
        subtitle: "PICTURE ABHI BAKI HAI MERE DOST",
        link: createSlug("PICTURE ABHI BAKI HAI MERE DOST"),
        description: "",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Projects sections={sectionsData} />
        <Post />
        <Brands />
        <Gallery />
        <ContactMe />
      </Layout>
    </>
  );
};

export { Home };

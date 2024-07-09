import Layout from "../components/layout/Layout";
import { useParams, useLocation } from "react-router-dom";

const InnerGenericPage = () => {
  const { section, item } = useParams();
  const location = useLocation();
  const { id } = location.state || {};

  return (
    <Layout>
      <h1>{decodeURIComponent(section)}</h1>
      <h2>{decodeURIComponent(item)}</h2>
      {id && <p>Section ID: {id}</p>}
    </Layout>
  );
};

export default InnerGenericPage;

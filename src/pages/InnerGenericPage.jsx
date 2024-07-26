import Layout from "../components/layout/Layout";
import { useParams, useLocation } from "react-router-dom";

const InnerGenericPage = () => {
  const { section, item } = useParams();
  const location = useLocation();
  const { id } = location.state || {};

  return (
    <Layout>
      {/* <h1>{decodeURIComponent(section)}</h1>
      <h2>{decodeURIComponent(item)}</h2>
      {id && <p>Section ID: {id}</p>} */}

      <div className="main_banner relative">
        <div className="container w-auto m-auto">
          <img src="./assets/"/>
          <div className="inner_text absolute bottom-5 left-5">
            <h3 className="text-2xl font-semibold text-yellow-400">Ghapter III</h3>
            <p className="text-white text-xl font-medium">WEBSITE AND BEYOND</p>
          </div>
       
        </div>
      </div>
      <div className="video_section">
        <div className="inner_video">

        </div>
      </div>
      <div className="text_section">
      <h4>Pramods Take</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed exercitationem 
        iusto numquam consequatur magni quas! Natus, quae ipsam, voluptates facilis dolores eaque,
         quia impedit doloribus quis magni hic! Ad animi maiores a odit nesciunt porro aut unde magni. 
        Libero dignissimos tempore dicta laboriosam autem non culpa eveniet in explicabo!</p>
      </div>
    </Layout>
  );
};

export default InnerGenericPage;
import { useQuery } from "@tanstack/react-query";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import api from "../lib/api";

const InnerGenericPage = () => {
  const { item } = useParams();

  const { data: innerDetails } = useQuery({
    queryKey: ["getInnerDetails", item],
    queryFn: () => api.getInnerDetails(item),
    select: (response) => response.data,
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Layout>
      <div className="main_banner relative">
        <div className="w-auto m-auto p-0">
          <img
            className="w-full h-64 object-cover"
            src={innerDetails?.inner_banner_image || "/assets/inner_banner.jpg"}
            alt="Banner"
          />
          <div className="inner_text absolute bottom-28 left-20">
            <p className="text-black text-4xl font-semibold">
              {innerDetails?.section_title || "WEBSITE AND BEYOND"}
            </p>
          </div>
        </div>
      </div>
      <div className="container m-auto w-auto design_section py-10">
        <div className="images_line relative">
          <img
            className="w-6 h-6 overflow-hidden flex m-auto"
            src="/assets/Yellow_Circle.png"
            alt="Design"
          />
        </div>
      </div>

      <div className="container w-4/5 m-auto rounded-2xl overflow-hidden video_section">
        <iframe
          width="100%"
          height="450px"
          src={`https://www.youtube.com/embed/${innerDetails?.video_url.split("v=")[1]}`}
          frameBorder="0"
          allowFullScreen
          title="Video"
        ></iframe>
      </div>

      <div className="text_section container w-auto m-auto p-20">
        <div className="border_text border-4 border-yellow-500 p-10 m-auto justify-center relative">
          <h4 className="absolute -top-6 bg-white py-1 px-5 text-3xl font-semibold">
            { "Pramod's Take"}
          </h4>
          <p className="leading-7 font-normal text-sm py-4 tracking-wide">
            {innerDetails?.content ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed exercitationem iusto numquam consequatur magni quas! Natus, quae ipsam, voluptates facilis dolores eaque, quia impedit doloribus quis magni hic! Ad animi maiores a odit nesciunt porro aut unde magni. Libero dignissimos tempore dicta laboriosam autem non culpa eveniet in explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio, aperiam quaerat ipsam perferendis impedit animi et sit quia porro, velit culpa voluptatem laborum hic atque. Modi asperiores distinctio suscipit maxime atque vitae. Cumque molestias nemo alias in quae nam explicabo, itaque numquam quibusdam reiciendis, veritatis deserunt quidem suscipit officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias saepe ipsam atque repellendus rerum."}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default InnerGenericPage;

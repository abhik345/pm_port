  /* eslint-disable no-useless-escape */

import { useEffect, useRef } from "react";

import Layout from "../components/layout/Layout";
import ReactPlayer from "react-player";
import api from "../lib/api";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const InnerGenericPage = () => {
    const { item } = useParams();
    const iframeRef = useRef(null);

    const { data: innerDetails } = useQuery({
      queryKey: ["getInnerDetails", item],
      queryFn: () => api.getInnerDetails(item),
      select: (response) => response.data,
      onError: (err) => {
        console.log(err);
      },
    });

    useEffect(() => {
      if (iframeRef.current) {
        iframeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [innerDetails]);

    const getYouTubeID = (url) => {
      if (typeof url !== "string") return null;
      const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    };

    const videoID = getYouTubeID(innerDetails?.video_url);
    const videoUrl = videoID ? `https://www.youtube.com/watch?v=${videoID}` : null;

    console.log(videoUrl)

    return (
      <Layout>
        <div className="main_banner relative" ref={iframeRef}>
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
          {videoUrl && (
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="450px"
              controls={true}
              
            />
          )}
        </div>

        <div className="text_section container w-auto m-auto p-20">
          <div className="border_text border-4 border-yellow-500 p-10 m-auto justify-center relative">
            <h4 className="absolute -top-6 bg-white py-1 px-5 text-3xl font-semibold">
              {"Pramod's Take"}
            </h4>
            <p
              className="leading-7 font-normal text-sm py-4 tracking-wide"
              dangerouslySetInnerHTML={{ __html: innerDetails?.content }}
            />
          </div>
        </div>
      </Layout>
    );
  };

  export default InnerGenericPage;

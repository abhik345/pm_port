import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../lib/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useQuery } from "@tanstack/react-query";

const Post = () => {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(headRef1.current, {
      scrollTrigger: {
        trigger: headRef1.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      x: -1000,
      opacity: 1,
      duration: 3,
    });

    gsap.from(headRef2.current, {
      scrollTrigger: {
        trigger: headRef2.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
      },
      x: -100,
      opacity: 1,
      duration: 2,
    });
  });

  const { data: postsectionHeading } = useQuery({
    queryKey: ["getpstsectionheading"],
    queryFn: api.getpstsectionheading,
    select: (response) => response?.data?.acf,
    onError: (err) => {
      console.log(err);
    },
  });

  const { data: postData } = useQuery({
    queryKey: ["getpost"],
    queryFn: api.getpost,
    select: (response) => response?.data,
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <>
      <section>
        <div className="container mx-auto px-2 py-6">
          <h3
            ref={headRef1}
            className="heading-with-line text-[20px] font-medium"
          >
            {postsectionHeading?.posts_options?.heading}
          </h3>
          <h2
            ref={headRef2}
            className="main-heading text-[56px] font-bold mb-4"
          >
            <span className="text-[#959595]">
              {postsectionHeading?.posts_options?.title_section?.title}
            </span>
            {postsectionHeading?.posts_options?.title_section?.sub_title}
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {postData &&
            postData?.map((postData, index) => (
              <SwiperSlide key={index}>
                <HoverCard
                  image={postData.thumbnail}
                  text={postData.content}
                  index={index}
                  icon={postData.social_icon}
                  link={postData.url}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

function HoverCard({ image, text, index, icon, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={link}
      target="_blank"
    >
      <img
        className="w-full h-[400px] object-cover transition-opacity duration-300"
        src={image}
        alt={`Post ${index + 1}`}
        style={{ opacity: isHovered ? 0.5 : 1 }}
      />
      {isHovered && (
        <div className="relative">
          <div className="absolute bottom-20 bg-black bg-opacity-40 p-4 flex items-center justify-center text-center flex-col text-white text-lg">
            <img className="h-8 w-8" src={icon} alt="Icon" />
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      )}
    </Link>
  );
}

HoverCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Post;

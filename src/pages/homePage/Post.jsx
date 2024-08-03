/* eslint-disable no-unused-vars */

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../lib/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

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

  const { data: linkedinposts } = useQuery({
    queryKey: ["getlinkedInPosts"],
    queryFn: api.getlinkedInPosts,
    select: (response) => response?.data,
    onError: (err) => {
      console.log(err);
    },
  });

  console.log(linkedinposts);

  return (
    <>
      <section>
        <div className="container mx-auto px-2 py-6 text-left ">
          <h3
            ref={headRef1}
            className="heading-with-line text-[20px] font-medium text-left"
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
        <div className="swiper_section flex gap-4 items-center">
          <div className="left_text_Linkedin flex justify-end w-[10%]">
            <img src="assets/Linkedin_text.png" />
          </div>
          <div className="swiper_part m-auto w-[90%]">
            <Swiper
              // slidesPerView={4}
              // spaceBetween={30}
              breakpoints={{
                580: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1920: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500 }}
              loop={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {linkedinposts &&
                linkedinposts?.map((postData, index) => (
                  <SwiperSlide key={index}>
                    <LinkedInHoverCard
                      image={postData.thumbnail}
                      text={postData.excerpt}
                      index={index}
                      icon={postData.social_icon}
                      link={postData.url}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="instagram_swiper  mt-16">
          <div className="swiper_section flex flex-row-reverse gap-4 items-center">
            <div className="left_text_Linkedin flex justify-start w-[10%]">
              <img src="assets/Instagram_text.png" />
            </div>
            <div className="swiper_part m-auto w-[90%]">
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 105000 }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {postData &&
                  postData?.map((postData, index) => (
                    <SwiperSlide key={index}>
                      <InstagramHoverCard
                        image={postData.thumbnail}
                        text={postData.excerpt}
                        index={index}
                        icon={postData.social_icon}
                        link={postData.url}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const LinkedInHoverCard = ({ image, text, icon, link }) => {
  return (
    <Link className="overflow-hidden" to={link} target="_blank">
      <div className="main_box">
        <div className="post_img_box relative ">
          <img
            className="post_img w-screen object-cover h-[400px]"
            src={image}
          />
          <div className="hover_text bg-gray-950 bg-opacity-90 w-full h-full absolute contents-[*] bottom-0 left-0 right-0 items-center  cursor-pointer py-10 px-6 ">
            <div className="icon flex m-auto items-center w-12 h-12 overflow-hidden  ">
              <img src="/assets/linkedin.png" />
            </div>
            <p className="text-white font-normal text-base text-center my-8 px-5 line-clamp-[8] tracking-wide ">
              {text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

LinkedInHoverCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
};

const InstagramHoverCard = ({ image, text, icon, link }) => {
  return (
    <Link className="overflow-hidden" to={link} target="_blank">
      <div className="main_box">
        <div className="post_img_box relative ">
          <img
            className="post_img w-screen object-cover h-[400px]"
            src={image}
          />
          <div className="hover_text bg-gray-950 bg-opacity-90 w-full h-full absolute contents-[*] bottom-0 left-0 right-0 items-center  cursor-pointer py-10 px-6 ">
            <div className="icon flex m-auto items-center w-12 h-12 overflow-hidden  ">
              <img src="/assets/instagram.png" />
            </div>
            <p className="text-white font-normal text-base text-center my-8 px-5 line-clamp-[8] tracking-wide ">
              {text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

InstagramHoverCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Post;

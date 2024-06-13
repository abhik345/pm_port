import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import post1 from "/assets/post1.jpg";
import post2 from "/assets/post2.jpg";
import post3 from "/assets/post3.jpg";
import post4 from "/assets/post4.jpg";
import post5 from "/assets/post5.jpg";

const Post = () => {
  const headRef1 = useRef();
  const headRef2 = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(headRef1.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      delay: 1,
    });
    gsap.from(headRef2.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      delay: 1,
    });
  });
  return (
    <>
      <section>
        <div className="container mx-auto px-2 py-6">
          <h3
            ref={headRef1}
            className="heading-with-line text-[20px] font-medium"
          >
            Posts
          </h3>
          <h2
            ref={headRef2}
            className="main-heading text-[56px] font-bold mb-4"
          >
            <span className="text-[#959595]">See M</span>
            <span>y Posts</span>
          </h2>
        </div>
        <Swiper
          slidesPerView={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post2}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post3}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post4}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post5}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  overflow-hidden ">
              <img
                className="w-full h-[400px]"
                src={post1}
                alt="Sunset in the mountains"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Post;

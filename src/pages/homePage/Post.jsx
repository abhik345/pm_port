import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import post1 from "/assets/post1.jpg";
import post2 from "/assets/post2.jpg";
import post3 from "/assets/post3.jpg";
import post4 from "/assets/post4.jpg";
import post5 from "/assets/post5.jpg";
import post6 from "/assets/post6.png";
import post7 from "/assets/post7.png";
import { useGSAP } from "@gsap/react";

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
          className="mySwiper"
        >
          {[post1, post2, post3, post4, post5, post6, post7].map(
            (post, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-[400px] object-cover"
                    src={post}
                    alt={`Post ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>
    </>
  );
};

export default Post;

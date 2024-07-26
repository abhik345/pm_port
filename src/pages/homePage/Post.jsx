import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import linkedinIcon from "/assets/linkedin.svg";
import facebookIcon from "/assets/fb.svg";
import instagramIcon from "/assets/insta.svg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";

const postsData = [
  {
    image: "/assets/post1.jpg",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
  {
    image: "/assets/post2.jpg",
    text: "Thanks Pramod bhai n Ravi for all the lovely words but we only stand as Prudent with all of us together n no individual is bigger than Prudent....Love u...",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
  {
    image: "/assets/post3.jpg",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
    icon: facebookIcon,
  },
  {
    image: "/assets/post4.jpg",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    icon: instagramIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
  {
    image: "/assets/post5.jpg",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    icon: instagramIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
  {
    image: "/assets/post6.png",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    icon: instagramIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
  {
    image: "/assets/post7.png",
    text: "At Kreative Machinez we work with a simple philosophy - Team goals are bigger than one’s individual aspirations. When 'I' becomes 'we', illness transforms into wellness. We believe in the power of collaboration to elevate every project, every client, and every brand.",
    icon: instagramIcon,
    link: "https://www.linkedin.com/posts/pramodmaloo_kreativemachinez-dreamteam-teamwork-activity-7163908193109094401-YUrQ?utm_source=share&utm_medium=member_android",
  },
];

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
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {postsData.map((postData, index) => (
            <SwiperSlide key={index}>
              <HoverCard
                image={postData.image}
                text={postData.text}
                index={index}
                icon={postData.icon}
                link={postData.link}
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
            <p>{text}</p>
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

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../lib/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const Brands = () => {
  const { data: brandData } = useQuery({
    queryKey: ["getbrands"],
    queryFn: api.getbrands,
    select: (response) => response?.data?.acf?.our_brand_options,
    onError: (err) => {
      console.log(err);
    },
  });

  const headRef1 = useRef();
  const headRef2 = useRef();

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
    <div className="bg-black text-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-white">
            <div className="text-left">
              <h3
                ref={headRef1}
                className="cite-with-line text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium"
              >
                {brandData?.heading}
              </h3>
              <h2
                ref={headRef2}
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                <span className="text-[#959595]">
                  {brandData?.title_section?.title}{" "}
                </span>
                <span>{brandData?.title_section?.sub_title}</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.15rem] md:max-w-2xl">
                {brandData?.text}
              </p>
            </div>
          </div>
          {brandData?.brand_options &&
            brandData?.brand_options?.map((item, index) => (
              <Link
                to={item.brand_url}
                target="_blank"
                className="bg-inherit flex flex-col items-center justify-between border border-opacity-20 border-white rounded-xl p-4 hover:bg-gray-800 transition duration-300"
                key={index}
              >
                <div className="flex flex-col items-start">
                  <div className="h-24 w-24 md:h-32 md:w-32 lg:h-32 lg:w-32">
                    <img
                      src={item.brand_logo}
                      alt={item.brand_name}
                      className="w-full h-auto"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[1.1rem] font-semibold text-center">
                    {item.brand_name}
                  </h2>
                  <TruncatedText text={item.brand_text} maxLength={70} />
                  {/* <p>{item.brand_text}</p> */}
                </div>
                <div className="flex justify-end w-full">
                  <button className="bg-white text-black rounded-full hover:bg-gray-200 p-3 chevron-button">
                    <ChevronRight />
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

const TruncatedText = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <p className="text-white mt-2 text-sm sm:text-base md:text-lg lg:text-[0.875rem]">
      {truncatedText}
    </p>
  );
};

TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

TruncatedText.defaultProps = {
  maxLength: 70,
};

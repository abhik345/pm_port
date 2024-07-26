import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

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
    <div className=" bg-black text-white py-16">
      <div className="container mx-auto p-24">
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-2 text-white">
            <div className="text-left">
              <h3
                ref={headRef1}
                className="cite-with-line text-[20px] font-medium"
              >
                {brandData?.heading}
              </h3>
              <h2 ref={headRef2} className="text-3xl md:text-5xl font-bold">
                <span className="text-[#959595]">
                  {brandData?.title_section?.title}{" "}
                </span>
                <span>{brandData?.title_section?.sub_title}</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[16px]">{brandData?.text}</p>
            </div>
          </div>
          {brandData?.brand_options &&
            brandData?.brand_options?.map((item, index) => (
              <Link
                to={item.brand_url}
                target="_blank"
                className="bg-inherit flex items-center justify-center border-[0.5px] border-opacity-20 border-white rounded-xl"
                key={index}
              >
                <div className="h-72 w-80 rounded-lg p-4 flex flex-col justify-between cursor-pointer darksoul-card3">
                  <div>
                    <div className="h-22 w-24">
                      <img src={item.brand_logo} alt={item.brand_name} />
                    </div>
                    <h2 className="text-white text-[20px] font-semibold mt-4">
                      {item.brand_name}
                    </h2>
                    <p className="text-white mt-2">{item.brand_text}</p>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-white text-black rounded-full hover:bg-gray-200 p-3 chevron-button">
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

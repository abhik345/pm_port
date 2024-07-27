import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../lib/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const About = () => {
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

  const { data: aboutData } = useQuery({
    queryKey: ["getabout"],
    queryFn: api.getabout,
    select: (response) => response?.data?.acf?.about_section_options,
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <section>
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <h3
          ref={headRef1}
          className="heading-with-line text-[20px] font-medium md:text-[24px]"
        >
          About me
        </h3>
        <h2
          ref={headRef2}
          className="main-heading text-[36px] font-bold mb-4 md:text-[48px] lg:text-[56px]"
        >
          <span className="text-[#959595]">{aboutData?.title_section?.title}</span>
          <span>{aboutData?.title_section?.sub_title}</span>
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
          <div className="w-full relative p-4">
            <img
              src={aboutData?.image_section?.image}
              alt="Award"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-12 lg:left-28 bg-white rounded-md shadow-lg p-4 w-4/5 md:w-3/5 lg:w-4/5">
              <blockquote className="mt-4 text-lg italic">
                <svg
                  className="absolute -top-6 -left-3 md:-left-6 lg:-left-8 w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14 text-[#DCA514] dark:text-neutral-700"
                  viewBox="0 0 16 16"
                  fill="#DCA514"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="#DCA514"
                  ></path>
                </svg>
                {aboutData?.image_section?.about_text}
              </blockquote>
              <p className="mt-2 text-right text-[#DCA514]">
                {aboutData?.image_section?.name}
              </p>
            </div>
          </div>
          <div className="w-full p-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {aboutData?.about_options?.map((option, index) => (
              <div key={index} className="bg-gray-100 p-6 md:p-8 flex rounded-lg shadow">
                <div className="mr-3 h-8 w-8 md:h-12 md:w-12">
                  <img src={option.image_logo} alt="Logo" className="w-full h-auto" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.date_text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };

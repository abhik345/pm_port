import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);
  const navigate = useNavigate();

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

  // const handleClick = (sectionSubtitle, itemSubtitle, sectionId) => {
  //   const url = `/${encodeURIComponent(sectionSubtitle)}/${encodeURIComponent(
  //     itemSubtitle
  //   )}`;
  //   navigate(url, {
  //     state: {
  //       id: sectionId,
  //     },
  //   });
  // };



  const { data: bookData } = useQuery({
    queryKey: ["getproject"],
    queryFn: api.getproject,
    select: (response) => response?.data,
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(bookData)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:last-child)", {
        clipPath: function () {
          return "inset(0px 0px 0px 0px)";
        },
      });

      const animation = gsap.to(".photo:not(:last-child)", {
        clipPath: function () {
          return "inset(0px 0px 100% 0px)";
        },
        stagger: 0.5,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".left",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  
  return (
    <>
      <div className="main_project p-10">
        <div className="text_heading text-center m-auto">
          <h3 ref={headRef1} className="font-bold text-center m-0 text-[20px] text-[#FFFFFF]">
            Project
          </h3>
          <h2 ref={headRef2} className="main-heading text-[56px] font-bold mb-4">
            <span className="text-[#959595]">Lets Empo</span>
            <span className="text-[#FFFFFF]">wer Business Growth</span>
          </h2>
        </div>
        <div className="img_section flex justify-center">
          <div className="row_section container w-full m-0 pl-10 pr-10 flex gap-4 overflow-hidden items-center">
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_box_hover hover: delay-1000 ease-in-out ">
              <div
                className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
              >
                <img
                  className=" object-cover relative z-0 "
                  src="./assets/section vi.jpg"
                />
                <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                  <h3 className="  absolute  flex text-center font-bold text-3xl">
                    SECTIONI
                  </h3>
                  <div className="para_part absolute bottom-10  z-1 w-max">
                    <h4 className="text-4xl font-semibold text-white relative ">
                      Section I
                    </h4>
                    <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <div className="line_para justify-start pb-2 ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                    <div className="line_para justify-start  ">
                      <p className=" text-sm font-normal text-white ">
                        Website and Beyond
                      </p>
                      <p className="text-sm font-normal text-white">
                        Website and Beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Projects.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      colSpan: PropTypes.number.isRequired,
      rowSpan: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          description: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Projects;

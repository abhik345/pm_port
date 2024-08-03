import { useEffect, useRef } from "react";

import PropTypes from "prop-types";
import ScrollTrigger from "gsap/ScrollTrigger";
import api from "../../lib/api";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleClick = (sectionSubtitle, itemSubtitle, sectionId) => {
    const sectionSlug = createSlug(sectionSubtitle);
    const itemSlug = createSlug(itemSubtitle);
    const url = `/${sectionSlug}/${itemSlug}`;
    navigate(url, {
      state: {
        id: sectionId,
      },
    });
  };

  const { data: bookData } = useQuery({
    queryKey: ["getproject"],
    queryFn: api.getproject,
    select: (response) => response?.data,
    onError: (error) => {
      console.log(error);
    },
  });

  const { data: bookheading } = useQuery({
    queryKey: ["getbookheading"],
    queryFn: api.getbookheading,
    select: (response) => response.data?.acf,
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(bookheading);

  useEffect(() => {
    const animateOddLines = () => {
      gsap.to(".line_para li:nth-child(odd)", {
        x: 20,
        y: 0,
        repeat: 5,
        yoyo: true,
        duration: 0.15,
        ease: "sine.in",
        onComplete: function () {
          gsap.to(this.targets(), {
            x: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
            onComplete: animateOddLines,
          });
        },
      });
    };

    const animateEvenLines = () => {
      gsap.to(".line_para li:nth-child(even)", {
        x: -20,
        y: 0,
        repeat: 5,
        yoyo: true,
        duration: 0.15,
        ease: "sine.in",
        onComplete: function () {
          gsap.to(this.targets(), {
            x: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.3)",
            onComplete: animateEvenLines,
          });
        },
      });
    };

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

      animateOddLines(); // Initial call to start the odd line animation
      animateEvenLines(); // Initial call to start the even line animation
    });

    return () => ctx.revert(); // Cleanup function
  }, []);
  return (
    <>
      <div className="main_project p-10">
        <div className="text_heading text-center m-auto">
          <h3
            ref={headRef1}
            className="font-bold text-center m-0 text-[20px] text-[#FFFFFF]"
          >
            {bookheading?.chapter_options?.heading}
          </h3>
          <h2
            ref={headRef2}
            className="main-heading text-[56px] font-bold mb-4"
          >
            <span className="text-[#959595]">
              {bookheading?.chapter_options?.title_section?.title}
            </span>{" "}
            <span className="text-[#FFFFFF]">
              {bookheading?.chapter_options?.title_section?.sub_title}
            </span>
          </h2>
        </div>
        <div className="img_section flex justify-center">
          <div className=" lg:p-0  row_section container w-full m-0 pl-10 pr-10 flex gap-4 overflow-hidden items-center">
            {bookData &&
              bookData?.map((book) => (
                <div
                  className="img_box_hover hover: delay-1000 ease-in-out "
                  key={book.id}
                >
                  <div
                    className="img_box text-white transition transform  
              relative  rounded-xl overflow-hidden "
                  >
                    <img
                      className=" object-cover relative z-0 "
                      src={book?.section_image}
                    />
                    <div className="absolute inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:z-10"></div>
                    <div className="category_heading  absolute inset-y-0  w-auto z-10 left-6 right-6">
                      <h3 className="  absolute  flex text-center font-bold text-[1.15rem]">
                        {book?.title}
                      </h3>
                      <div className="para_part absolute bottom-10  z-1 w-max">
                        <h4 className="text-3xl font-semibold text-white relative ">
                          {book?.title}
                        </h4>
                        <h5 className="text-2xl font-medium text-white mt-3 mb-3 w-11/12  ">
                          {book?.subtitle}
                        </h5>
                        <ol className="line_para list-disc justify-start m-3 pb-2 text-sm font-normal text-white">
                          {book?.items.map((item) => (
                            <li
                              key={item.id}
                              className="content_text v8 cursor-pointer mb-1"
                              onClick={() =>
                                handleClick(book.subtitle, item.title, book.id)
                              }
                            >
                              {item?.title}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

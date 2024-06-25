import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);
  const navigate = useNavigate();

  const images = [
    "http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg",
    "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
    "http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg",
  ];

  const detailsData = [
    {
      title: "Crossing The Digital Frontier",
      section: "Section I of XVI",
      color: "#DCA514",
      subTitle: "Crossing The Digital Frontier",
      overview: "1. AN OVERVIEW OF THE LANDSCAPE",
      points: [
        "Surveying the scenario",
        "The Strategic Road Map",
        "Understanding the Strategic Road Map",
      ],
    },
    {
      title: "ShiftingThe Paradigm",
      section: "Section II of XVI",
      color: "#BADA55",
      subTitle: "EMBRACE THE DIGITAL MINDSET: ",
      overview: "2. THE TECHNOLOGICAL LANDSCAPE",
      points: [
        "Emerging Technologies",
        "Adoption Strategies",
        "Future Trends",
      ],
    },
    {
      title: "Digital Transformation",
      section: "Section III of XVI",
      color: "#FF6347",
      subTitle: "Embracing Change",
      overview: "3. TRANSFORMATION STRATEGIES",
      points: [
        "Change Management",
        "Digital Infrastructure",
        "Employee Training",
      ],
    },
    // Add more objects for additional sections
  ];

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
    <section className="bg-black">
      {/* <div className="gallery container mx-auto flex">
        <div className="left w-1/3 ml-auto">
          <div className="bg-black mt-10 px-2 py-6">
            <h3
              ref={headRef1}
              className="cite-with-line text-[20px] text-white font-medium"
            >
              Projects
            </h3>
            <h2
              ref={headRef2}
              className="main-heading text-[50px] font-bold mb-4"
            >
              <span className="text-[#959595]">Lets</span>
              <span className="text-white"> Empower Business Growth</span>
            </h2>
          </div>
          {detailsData.map((detail, index) => (
            <div
              key={index}
              className="details mt-40 h-[60vh] flex flex-col justify-center w-full ml-auto text-white text-3xl font-extrabold"
            >
              <p className="mt-4 text-xl font-semibold underline underline-offset-8">
                {detail.title}
              </p>
              <div className="flex items-center justify-between">
                <p className="mt-6" style={{ color: detail.color }}>
                  {detail.section}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right"
                  onClick={() => navigate(`/${detail.title}`)}
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
              </div>
              <div className="mt-2 font-semibold">
                <span>{detail.subTitle}</span>
              </div>
              <div className="mt-2 text-[16px] font-normal">
                <div>{detail.overview}</div>
                <ul className="list-disc list-inside">
                  {detail.points.map((point, index) => (
                    <li key={index} className="ml-5">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="rightblock w-2/3 h-screen flex flex-col justify-center">
          <div className="relative w-[600px] h-[600px] left-56">
            {images.map((image, index) => (
              <div
                key={index}
                className={`photo absolute w-full h-full flex flex-row gap-6`}
                style={{
                  zIndex: 100 - index,
                }}
              >
                <img
                  src={image}
                  alt={`img-${index}`}
                  className="w-full h-full rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="grid h-80 grid-cols-5 gap-2  grid-rows-3">
      <div className=" col-span-2 row-span-2 bg-blue-500"/>
      <div className="col-span-3 row-span-1 bg-red-500"/>
      <div className="col-span-1 row-span-2 bg-yellow-500"/>
      <div className="col-span-2 row-span-2 bg-green-500"/>
      <div className="col-span-1 row-span-1 bg-cyan-500"/>
      <div className="col-span-1 row-span-1 bg-purple-500"/>
    </div>



    </section>
  );
}

export default Projects;

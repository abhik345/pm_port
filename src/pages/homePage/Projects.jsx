import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

function Projects({ sections }) {
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

  const handleClick = (sectionSubtitle, itemSubtitle, sectionId) => {
    const url = `/${encodeURIComponent(sectionSubtitle)}/${encodeURIComponent(itemSubtitle)}`;
    navigate(url, {
      state: {
        id: sectionId,
      },
    });
  };

  console.log(sections);

  return (
    <section className="bg-black text-white p-4">
      <div className="grid h-auto grid-cols-4 gap-4 grid-rows-2">
        {sections?.map((section, index) => (
          <div key={index} className={`col-span-${section.colSpan} row-span-${section.rowSpan} bg-gray-800 p-4 rounded-lg shadow-lg`}>
            <div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <h4 className="text-lg">{section.subtitle}</h4>
              <ol className="list-decimal ml-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2 cursor-pointer" onClick={() => handleClick(section.link, item.link, section.id)}>
                    <h4 className="text-lg font-bold text-blue-400 hover:text-blue-600">{item.subtitle}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
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

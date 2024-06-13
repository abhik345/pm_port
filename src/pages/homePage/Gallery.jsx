import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import sirImage1 from "/assets/sir1.jpg";
import sirImage2 from "/assets/sir2.jpg";
import sirImage3 from "/assets/sir3.jpg";
import sirImage4 from "/assets/sir4.jpg";
import sirImage5 from "/assets/sir1.jpg";
import sirImage6 from "/assets/sir2.jpg";
import sirImage7 from "/assets/sir3.jpg";
import sirImage8 from "/assets/sir4.jpg";

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section>
      <div className="container ml-[156px]" ref={component}>
        <div className="">
          <h3 className="heading-with-line text-2xl font-medium mb-2">
            Gallery
          </h3>
          <h2 className="text-6xl font-bold mb-4">
            <span className="text-gray-600">Explore </span>
            <span className="text-black">My Gallery</span>
          </h2>
        </div>
        <div ref={slider} className="">
          <div className="flex gap-6">
            {[
              { src: sirImage1, alt: "Image 1" },
              { src: sirImage2, alt: "Image 2" },
              { src: sirImage3, alt: "Image 3" },
              { src: sirImage4, alt: "Image 4" },
              { src: sirImage5, alt: "Image 5" },
              { src: sirImage6, alt: "Image 6" },
              { src: sirImage7, alt: "Image 7" },
              { src: sirImage8, alt: "Image 8" },
            ].map((image, index) => (
              <div key={index} className="relative w-[375px] panel group">
                <img className=" rounded" src={image.src} alt={image.alt} />
                <div className="glass-button hidden group-hover:flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

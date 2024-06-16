import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery bg-black flex">
      <div className="left w-1/2 ml-auto">
        <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-white text-3xl font-extrabold">
          <div>Lets Empower Business Growth</div>
          <div className="mt-4 text-xl">Ride the Digital Wave</div>
          <div className="mt-4 text-yellow-500">Section I of XVI</div>
          <div className="mt-2">Crossing The Digital Frontier</div>
          <div className="mt-2 text-lg">
            <div>1. AN OVERVIEW OF THE LANDSCAPE</div>
            <ul className="list-disc list-inside">
              <li>Surveying the scenario</li>
              <li>The Strategic Road Map</li>
              <li>Understanding the Strategic Road Map</li>
            </ul>
          </div>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded">
            Download PDF
          </button>
        </div>
        <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-white text-3xl font-extrabold">
          <div>Lets Empower Business Growth</div>
          <div className="mt-4 text-xl">Ride the Digital Wave</div>
          <div className="mt-4 text-yellow-500">Section I of XVI</div>
          <div className="mt-2">Crossing The Digital Frontier</div>
          <div className="mt-2 text-lg">
            <div>1. AN OVERVIEW OF THE LANDSCAPE</div>
            <ul className="list-disc list-inside">
              <li>Surveying the scenario</li>
              <li>The Strategic Road Map</li>
              <li>Understanding the Strategic Road Map</li>
            </ul>
          </div>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded">
            Download PDF
          </button>
        </div>
        <div className="details h-screen flex flex-col justify-center w-[40vw] ml-auto text-white text-3xl font-extrabold">
          <div>Lets Empower Business Growth</div>
          <div className="mt-4 text-xl">Ride the Digital Wave</div>
          <div className="mt-4 text-yellow-500">Section I of XVI</div>
          <div className="mt-2">Crossing The Digital Frontier</div>
          <div className="mt-2 text-lg">
            <div>1. AN OVERVIEW OF THE LANDSCAPE</div>
            <ul className="list-disc list-inside">
              <li>Surveying the scenario</li>
              <li>The Strategic Road Map</li>
              <li>Understanding the Strategic Road Map</li>
            </ul>
          </div>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded">
            Download PDF
          </button>
        </div>
      </div>
      <div className="rightblock w-1/2 h-screen flex flex-col justify-center">
        <div className="relative w-[40vw] h-[40vw]">
          <div className="photo absolute w-full h-full">
            <img
              src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
              alt="img-1"
              className="w-full h-full"
            />
          </div>
          <div className="photo absolute w-full h-full">
            <img
              src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
              alt="img-2"
              className="w-full h-full"
            />
          </div>
          <div className="photo absolute w-full h-full">
            <img
              src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
              alt="img-3"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Kreative Machinez",
    logo: "/assets/kreative.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Pramotivation",
    logo: "/assets/pmotivation.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sahi Hai Bazaar",
    logo: "/assets/sahihaibazar.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Track Your Ads",
    logo: "/assets/track.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Pukaar",
    logo: "/assets/pukar.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Republic Of Influencers",
    logo: "/assets/roi.png",
    description: "Lorem ipsum dolor sit amet",
  },
];

const Brands = () => {
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
    <section className=" bg-black text-white py-16">
      <div className="container mx-auto p-24">
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-2 text-white">
            <div className="text-left">
              <h3
                ref={headRef1}
                className="cite-with-line text-[20px] font-medium"
              >
                Our Brands
              </h3>
              <h2 ref={headRef2} className="text-3xl md:text-5xl font-bold">
                <span className="text-[#959595]">Together we </span>
                <span>are achieving great things</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          {brands?.map((item, index) => (
            <div
              className="bg-inherit flex items-center justify-center border-[0.5px] border-opacity-20 border-white rounded-xl"
              key={index}
            >
              <div className=" h-72 w-80 rounded-lg p-4 flex flex-col justify-between  cursor-pointer">
                <div>
                  <div className="h-22 w-24">
                    <img src={item.logo} alt={item.name} />
                  </div>
                  <h2 className="text-white text-[20px] font-semibold mt-4">
                    {item.name}
                  </h2>
                  <p className="text-white mt-2">{item.description}</p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-white text-black rounded-full hover:bg-gray-200 p-3">
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

import { useGSAP } from "@gsap/react";
import bannerImage from "../../../public/assets/banner1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const About = () => {
    const headRef1 = useRef();
    const headRef2 = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(headRef1.current, {
            x: -100,
            opacity: 0,
            duration: 2,
            delay: 1,
        }); 
        gsap.from(headRef2.current, {
            x: -100,
            opacity: 0,
            duration: 2,
            delay: 1,
        }); 
    });

    const awards = [
        { title: '9th International Biennial Sweden', date: 'August 2020' },
        { title: 'Neque porro quisquam est', date: 'August 2020' },
        { title: 'Consectetur adipisci velit', date: 'August 2020' },
        { title: 'Contrary to popular belief', date: 'August 2020' },
        { title: 'The standard chunk of Lorem', date: 'August 2020' },
        { title: 'Passages of Lorem Ipsum.', date: 'August 2020' },
    ];

    return (
      <section>
        <div className="container mx-auto px-2 py-6">
        <h3 ref={headRef1} className="heading-with-line text-[20px] font-medium">
          About me
        </h3>
        <h2 ref={headRef2} className="main-heading text-[56px] font-bold mb-4">
          <span className="text-[#959595]">Awar</span>
          <span>ds & Achievement</span>
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={bannerImage}
              alt="Award"
              className="w-full h-auto rounded-lg"
            />
            <blockquote className="mt-4 text-lg italic">
              “Life is a journey, where there are potholes and speed-breakers,
              and beautiful sceneries too!”
            </blockquote>
            <p className="mt-2 text-right">— Pramod K Maloo</p>
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-row flex-wrap space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{award.title}</h3>
                <p className="text-gray-600">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    );
};

export { About };

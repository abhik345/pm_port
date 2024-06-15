import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const headRef1 = useRef(null);
  const headRef2 = useRef(null);

  useEffect(() => {
    const animation1 = gsap.fromTo(
      headRef1.current,
      { x: -1000, opacity: 0 },
      {
        scrollTrigger: {
          trigger: headRef1.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        duration: 3,
      }
    );

    const animation2 = gsap.fromTo(
      headRef2.current,
      { x: -100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: headRef2.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        duration: 2,
      }
    );

    // Cleanup animations on component unmount
    return () => {
      animation1.kill();
      animation2.kill();
    };
  }, []);

  return (
    <div className="relative mt-24 sm:mt-32 md:mt-48 lg:mt-64 xl:mt-72 2xl:mt-96 bg-[#272727] text-white">
      <div className="grid grid-cols-2 h-full">
        <div className="p-8">
          <div>
            <h3
              ref={headRef1}
              className="cite-with-line text-2xl font-medium mb-2"
            >
              Gallery
            </h3>
            <h2 ref={headRef2} className="text-5xl font-bold mb-4">
              <span className="text-gray-600">Lets</span>
              <span className="text-white text-center">
                {" "}
                start
                <span className="m-2">
                  <img
                    className="inline-block size-[62px] rounded-full"
                    src="/assets/sirround.png"
                    alt="Image Description"
                  />
                </span>
                the conversation
              </span>
            </h2>
          </div>
          <div className="bg-[#363636] h-[200px] rounded-xl p-4">
            <div className="grid grid-cols-2 h-full">
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  SUPPORT EMAIL
                </h2>
                <p className="text-white">example@gmail.com</p>
              </div>
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  WORK EMAIL
                </h2>
                <p className="text-white">email1@example.com</p>
              </div>
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  PHONE
                </h2>
                <p className="text-white">+1234567890</p>
              </div>
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  FAX
                </h2>
                <p className="text-white">+1234567890</p>
              </div>
            </div>
          </div>

          <div className="bg-[#363636] h-[450px] mt-2 rounded-xl p-8">
            <h5 className="text-[#B6B6B6] mb-3">DROP US A LINE</h5>
            <h4 className="font-medium mb-3 text-[20px]">Lets Get Started!</h4>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even
              slightly believable.
            </p>
            <form action="">
              <input
                className="px-4 py-2 w-full rounded-lg mb-2 bg-slate-100"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="px-4 py-2 w-full rounded-lg mb-2 bg-slate-100"
                type="email"
                placeholder="Email"
              />
              <input
                className="px-4 py-2 w-full rounded-lg mb-4 bg-slate-100"
                type="text"
                placeholder="How Can We Help You?"
              />

              <button className="bg-[#DCA514] px-6 py-2 rounded-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="h-full p-8">
          <img
            className="w-full h-full rounded-xl object-cover"
            src="/assets/contactsir.jpg"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

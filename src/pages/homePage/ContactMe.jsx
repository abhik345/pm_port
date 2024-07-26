import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";

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
    return () => {
      animation1.kill();
      animation2.kill();
    };
  }, []);

  const {data : contactDeatils} = useQuery({
    queryKey: ["getContacts"],
    queryFn: api.getContacts,
    select: (response) => response?.data?.acf?.contact_options,
    onError: (error) => {
      console.log(error);
    },
  })

  console.log(contactDeatils)

  return (
    <div className="relative bg-[#272727] text-white contact-me">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="p-8">
          <div>
            <h3
              ref={headRef1}
              className="cite-with-line text-2xl font-medium mb-2"
            >
              {contactDeatils?.heading}
            </h3>
            <h2 ref={headRef2} className="text-5xl font-bold mb-4">
              <span className="text-gray-600">{contactDeatils?.title_section?.title}</span>
              <span className="text-white text-center">
                {" "}
                {contactDeatils?.title_section?.sub_title}
                <span className="m-2">
                  <img
                    className="inline-block size-[62px] rounded-full"
                    src={contactDeatils?.title_section?.image}
                    alt="Image Description"
                  />
                </span>
                {contactDeatils?.title_section?.span_title}
              </span>
            </h2>
          </div>
          <div className="bg-[#363636] h-[200px] rounded-xl p-4">
            <div className="grid grid-cols-2 h-full">
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  {contactDeatils?.contacts?.support_email?.title}
                </h2>
                <p className="text-white">{contactDeatils?.contacts?.support_email?.email}</p>
              </div>
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  {
                    contactDeatils?.contacts?.work_email?.title
                  }
                </h2>
                <p className="text-white">{contactDeatils?.contacts?.work_email?.email}</p>
              </div>
              <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  {contactDeatils?.contacts?.phone_number?.title}
                </h2>
                <p className="text-white">{contactDeatils?.contacts?.phone_number?.phone_number}</p>
              </div>
              {/* <div className="p-2 rounded-lg flex flex-col justify-start items-start">
                <h2 className="text-[#B6B6B6] text-[12px] font-bold mb-2">
                  FAX
                </h2>
                <p className="text-white">+1234567890</p>
              </div> */}
            </div>
          </div>

          <div className="bg-[#363636] h-[450px] mt-2 rounded-xl p-8">
            <h5 className="text-[#B6B6B6] mb-3">{contactDeatils?.contact_form_section?.heading}</h5>
            <h4 className="font-medium mb-3 text-[20px]">{contactDeatils?.contact_form_section?.title}</h4>
            <p className="mb-4">
              {contactDeatils?.contact_form_section?.texts}
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
            src={contactDeatils?.image?.image}
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import api from "../../lib/api";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const bookRef = useRef(null);

  const { data: headerData } = useQuery({
    queryKey: ["getheaders"],
    queryFn: api.getheaders,
    select: (response) => response.data.header,
    onError: (err) => {
      console.log(err);
    },
  });

  console.log(headerData)

  useEffect(() => {
    if (bookRef.current) {
      gsap.fromTo(
        bookRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        }
      );
    }
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-50">
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
          <span className="text-[35px] font-normal italic text-white">
            {headerData?.header_logo?.logo_texts?.text}
          </span>
          <span className="mx-1"></span>
          <span className="text-[35px] font-normal italic text-yellow-400">
            {headerData?.header_logo?.logo_texts?.sub_text}
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <div className="flex flex-row items-center gap-3">
            <h5 ref={bookRef} className="font-medium text-[24px] mr-6 cursor-pointer" onClick={() => navigate("/book")}>
              Book
            </h5>
            {headerData?.social_media_sections &&
              headerData?.social_media_sections?.map((icon, index) => (
                <div key={index} className="bg-[#111827] p-2 rounded-full">
                  <a href={icon.link}>
                    <img
                      className="inline-block !h-5 !w-5"
                      src={icon.social_media_icon}
                      alt={icon.social_media_name}
                    />
                  </a>
                </div>
              ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

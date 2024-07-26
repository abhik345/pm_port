
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const { data: headerData } = useQuery({
    queryKey: ["getheaders"],
    queryFn: api.getheaders,
    select: (response) => response.data.header,
    onError: (err) => {
      console.log(err);
    },
  });

  const { data: socialIconsData } = useQuery({
    queryKey: ["getsocialicon"],
    queryFn: api.getsocialicon,
    select: (response) => response.data,
    onError: (error) => {
      console.log(error);
    },
  });

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-50">
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
          <span className="text-[35px] font-normal italic text-white">
            {headerData?.logo_texts?.text}
          </span>
          <span className="mx-1"></span>
          <span className="text-[35px] font-normal italic text-yellow-400">
            {headerData?.logo_texts?.sub_text}
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <div className="flex flex-row gap-3">
            {socialIconsData?.social_media &&
              socialIconsData?.social_media?.map((icon, index) => (
                <div key={index} className="bg-[#D9D9D9] p-4 rounded-full">
                  <a href={icon.link}>
                    <img
                      className="inline-block h-6 w-6"
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

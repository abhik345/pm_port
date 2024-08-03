import api from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const {data : footerDetails} = useQuery({
    queryKey: ["getfooter"],
    queryFn: api.getfooter,
    select: (response) => response?.data?.footer,
    onError: (error) => {
      console.log(error);
    },
  })

  const {data : socialIconsData} = useQuery({
    queryKey : ["getsocialicon"],
    queryFn : api.getsocialicon,
    select : (response) => response.data,
    onError: (error) => {
      console.log(error)
    }
  })
    return (
      <>
        <footer className="bg-[#272727] h-full">
          <div className="container mx-auto px-6 h-full">
            <div className="flex flex-row items-center justify-between py-4 md:mx-8">
              <div>
                <img
                  src={footerDetails?.signature_image?.signature}
                  alt="Signature"
                  className="h-[50%] w-[50%]"
                />
              </div>
              <div className="flex flex-row gap-3">
                {socialIconsData?.social_media && socialIconsData?.social_media?.map((icon, index) => (
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
            </div>
            <div className="py-6 px-6">
              <hr className="border-gray-400" />
              <p className="text-center text-gray-400 mt-4">
                {footerDetails?.footer_text}
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer

import linkedinIcon from "/assets/linkedin.svg"
import facebookIcon from "/assets/fb.svg";
import instagramIcon from "/assets/insta.svg"



const Footer = () => {
    return (
      <>
        <footer className="bg-[#272727] h-full">
          <div className="container mx-auto h-full">
            <div className="flex flex-row items-center justify-between py-4">
              <div>
                <img src="/assets/signature.png" alt="Signature" />
              </div>
              <div className="flex flex-row gap-3">
                <div className="bg-[#D9D9D9] p-4 rounded-full">
                  <img
                    className="inline-block h-6 w-6"
                    src={facebookIcon}
                    alt="Facebook"
                  />
                </div>
                <div className="bg-[#D9D9D9] p-4 rounded-full">
                  <img
                    className="inline-block h-6 w-6"
                    src={linkedinIcon}
                    alt="LinkedIn"
                  />
                </div>
                <div className="bg-[#D9D9D9] p-4 rounded-full">
                  <img
                    className="inline-block h-6 w-6"
                    src={instagramIcon}
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
            <div className="py-6 px-6">
              <hr className="border-gray-400" />
              <p className="text-center text-gray-400 mt-4">
                &copy; 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer

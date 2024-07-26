import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/api";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    { name: "LinkedIn", to: "bookSection" },
    { name: "Facebook", to: "brandsSection" },
    { name: "Instagram", to: "aboutSection" },
    { name: "Youtube", to: "contactSection" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, color: "#FBBF24" },
  };

  const { data: headerData } = useQuery({
    queryKey: ["getheaders"],
    queryFn: api.getheaders,
    select: (response) => response.data.header,
    onError: (err) => {
      console.log(err);
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
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={linkVariants}
              transition={{ duration: 0.3 }}
            >
              <ScrollLink
                to={link.to}
                className="text-[22px] font-medium cursor-pointer"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-yellow-400"
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    const navLinks = [
        { name: "Books", to: "bookSection" },
        { name: "Brands", to: "brandsSection" },
        { name: "About", to: "aboutSection" },
        { name: "Contact", to: "contactSection" },
    ];

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.1, color: "#FBBF24" },
    };

    return (
        <>
            <header className="flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-50">
                <div className="flex items-center">
                    <span className="text-[35px] font-normal italic text-white">Pramod</span>
                    <span className="mx-1"></span>
                    <span className="text-[35px] font-normal italic text-yellow-400">Maloo</span>
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

import { RiSearch2Line } from "react-icons/ri";
import SwitchDarkMode from "../../components/SwitchDarkMode";
import { navbarLinks } from "./navbarLinks";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="flex justify-between gap-4 px-[129px] py-[46px] items-center max-lg:px-10">
      <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark uppercase">
        shahada
      </h1>
      <ul className="flex gap-[60px] max-md:hidden">
        {navbarLinks.map((navLink) => (
          <li
            key={navLink.link}
            className="text-sm font-bold cursor-pointer text-primary-light dark:text-primary-dark uppercase"
          >
            {navLink.label}
          </li>
        ))}
      </ul>
      <div className="flex gap-10 items-center ">
        <RiSearch2Line
          size={24}
          className="cursor-pointer dark:text-primary-dark text-primary-light max-sm:hidden"
        />
        <SwitchDarkMode />
        <div className="relative md:hidden">
          <MdOutlineMenu
            size={24}
            className="cursor-pointer dark:text-primary-dark text-primary-light"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute top-[120%] -left-[200%] bg-primary-dark dark:bg-primary-light">
              <ul className="flex flex-col">
                {navbarLinks.map((navLink) => (
                  <li
                    key={navLink.link}
                    className="text-sm cursor-pointer text-nowrap p-4 font-bold text-primary-light dark:text-primary-dark uppercase hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light transition-all duration-300"
                  >
                    {navLink.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

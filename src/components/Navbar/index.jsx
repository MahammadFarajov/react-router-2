import { useEffect, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Add-Product",
    href: "/add-product",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];
function Navbar() {
  let location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
      });
    }
  }, [location.pathname]);
  return (
    <header className="bg-white border-b border-b-slate-200 py-4">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold text-2xl text-blue-400">
          re:<span className="text-black">commerce</span>
        </div>
        <ul
          className={`fixed top-0 z-[5] transition-all duration-500  p-12 bg-white/50 backdrop-blur-md w-1/2 h-full md:static flex flex-col md:flex-row md:p-0  md:justify-end md:items-center gap-4 text-lg ${
            isNavOpen ? "right-0" : "-right-full"
          }`}
        >
          {links.map((link) => (
            <li key={link.href} className="relative py-1">
              <Link
                className={`${
                  location.pathname === link.href ? "opacity-100" : "opacity-40"
                } transition-all relative  duration-500`}
                to={link.href}
              >
                {link.title}
              </Link>
              <div
                className={`${
                  location.pathname === link.href ? "opacity-100" : "opacity-0"
                }
                absolute hidden md:block h-0.5 w-full transition-opacity duration-300  bottom-0 bg-black`}
              ></div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleNavToggle}
          className="bg-black z-10 right-4 fixed flex md:hidden py-3 px-4 rounded-md text-sm cursor-pointer hover:bg-black/70  transition-all duration-300 ease-in-out text-white"
        >
          {isNavOpen ? <FaX /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

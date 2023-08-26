import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active }) => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="w-400 mx-auto p-3 bg-white dark:bg-black shadow-lg rounded-2xl flex items-center justify-items-center sm:w-80">
          <ul className="flex justify-between w-full mt-3 mx-7">
            <NavLink to="/" active={active === "home"}>
              Home
            </NavLink>
            <NavLink to="/about" active={active === "about"}>
              About
            </NavLink>
            <NavLink to="/projects" active={active === "projects"}>
              Projects
            </NavLink>
            <NavLink to="/contact" active={active === "contact"}>
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ to, active, children }) => (
  <Link
    to={to}
    className={`${
      active ? "text-indigo-600" : "text-gray-500 hover:text-gray-700"
    } text-sm font-bold flex-grow`}
  >
    {children}
  </Link>
);

export default Header;

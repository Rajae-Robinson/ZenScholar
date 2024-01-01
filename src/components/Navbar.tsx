import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="relative flex justify-between py-4"
      aria-label="Primary Navigation"
    >
      <ul
        className={`md:flex text-body space-x-2 cursor-pointer ${
          showMenu
            ? "absolute right-0 top-10 z-10 bg-white flex flex-col space-x-0 p-4 space-y-2 rounded-md shadow-md"
            : "hidden"
        }`}
      >
        <NavItem href="/" text="Home" />
        <NavItem href="/resources" text="Resources" />
        <NavItem href="/about" text="About" />
      </ul>
      <NavLink to="/">
        <img src={logo} alt="Go to Home" />
      </NavLink>
      <div className="hidden md:block space-x-2">
        {location.pathname !== "/screening" ? (
          <Link to="/screening">
            <button className="text-white bg-primary py-2 px-4 hover:bg-accent">
              Take Depression Test
            </button>
          </Link>
        ) : null}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <li className="hover:text-blue-950  hover:font-medium">
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? "text-blue-950 font-bold" : ""
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

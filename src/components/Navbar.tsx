import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4" aria-label="Primary Navigation">
      <ul className="group flex text-body space-x-2 cursor-pointer">
        <NavItem href="/" text="Home" />
        <NavItem href="/resources" text="Resources" />
        <NavItem href="/community" text="Community" />
        <NavItem href="/about" text="About" />
      </ul>
      <NavLink to="/">
        <img src={logo} alt="Go to Home" />
      </NavLink>
      <div className="flex items-center space-x-2 text-navItem cursor-pointer">
        <Link to="/screening">
          <button className="text-white bg-primary py-2 px-4 hover:bg-accent">
            Take Depression Test
          </button>
        </Link>
        <p className="text-body">Sign-in</p>
      </div>
    </nav>
  );
}

function NavItem({ href, text }: { href: string; text: string }) {
  return (
    <li className="hover:text-blue-950">
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

import NavMobile from "./navbar-mobile";
import { RiMenu3Fill } from "react-icons/ri";
import * as React from "react";
import LogButton from "../buttons/log-button";

export default function Navbar() {
  const [navActive, setNavActive] = React.useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
  ];
  return (
    <div className="h-[70px] fixed z-[99] flex justify-start items-center w-full p-[15px] shadow-navbar lg:px-[100px] bg-primary">
      <a href="#home">
        <h1 className="text-lg font-bold text-white">Refactory</h1>
      </a>
      <nav className="hidden ml-auto md:block">
        <ul className="flex items-center gap-3 text-center lg:gap-8">
          {navItems.map((nav, index) => (
            <li
              key={`nav-item-${index + 1}`}
              className="text-white hover:underline decoration-darkGreen decoration-2 underline-offset-2">
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="items-center hidden gap-3 ml-12 md:flex">
        <LogButton isOutline={false} text="Log In" />
        <LogButton isOutline={true} text="Sign Up" />
      </div>
      <button
        type="button"
        className="h-[44px] w-[44px] flex items-center justify-center text-2xl text-white border border-slate-300 rounded-md md:hidden ml-auto"
        onClick={() => setNavActive(true)}>
        <RiMenu3Fill />
      </button>
      <NavMobile
        isActive={navActive}
        setIsActive={setNavActive}
        navItems={navItems}
      />
    </div>
  );
}

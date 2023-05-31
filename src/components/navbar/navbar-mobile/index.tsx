import { IoCloseSharp } from "react-icons/io5";
import LogButton from "../../buttons/log-button";

interface NavLinkProps {
  isActive: boolean;
  setIsActive: (params: boolean) => void;
  navItems: { name: string; href: string }[];
}

export default function NavMobile({
  isActive,
  setIsActive,
  navItems,
}: NavLinkProps) {
  return (
    <nav
      className={`fixed h-full flex flex-col w-full bg-primary top-0 right-0 ${
        isActive ? "translate-x-0" : "translate-x-full"
      } z-[99] transition-all ease-in-out duration-300 md:hidden`}>
      <div className="flex items-center h-[70px] justify-end px-[15px]">
        <button
          type="button"
          className="h-[44px] w-[44px] flex items-center justify-center text-2xl border border-slate-300 text-white rounded-md md:hidden"
          onClick={() => setIsActive(false)}>
          <IoCloseSharp />
        </button>
      </div>
      <ul className="text-center text-[26px] flex flex-col text-white items-center gap-6 pt-[5px]">
        {navItems.map((nav, index) => (
          <li
            key={`nav-item-${index + 1}`}
            className="hover:underline decoration-slate-300 decoration-2 underline-offset-2">
            <a onClick={() => setIsActive(false)} href={nav.href}>
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-8 py-10 mt-auto">
        <LogButton isOutline={false} text="Log In" />
        <LogButton isOutline={true} text="Sign Up" />
      </div>
    </nav>
  );
}

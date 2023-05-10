// react
import { NavLink } from "react-router-dom";

// library
import {
  SunIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="top-0 sticky shadow-lg bg-weather-primary">
      <div className="container flex flex-col sm:flex-row items-center gap-4 text-white py-6 ">
        <NavLink
          to={"/"}
          aria-label="HomePage"
          className="flex items-center gap-2"
        >
          <SunIcon width={20} />
          <p className="text-xl font-semibold">Local Weather</p>
        </NavLink>
        <div className="flex gap-2 flex-1 justify-end">
          <InformationCircleIcon
            width={20}
            className="hover:text-weather-secondary duration-150 cursor-pointer"
          />
          <PlusIcon
            width={20}
            className="hover:text-weather-secondary duration-150 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}

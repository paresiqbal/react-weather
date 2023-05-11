// react
import { NavLink } from "react-router-dom";
import { useState } from "react";

// library
import {
  SunIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

// components
import BaseModal from "./BaseModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <nav className="top-0 sticky shadow-lg bg-weather-primary z-50">
      <div className="container flex flex-col sm:flex-row items-center gap-4 text-white py-4 md:py-6">
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
            onClick={toggleModal}
          />
          <PlusIcon
            width={20}
            className="hover:text-weather-secondary duration-150 cursor-pointer"
          />
        </div>
      </div>
      {isModalOpen && <BaseModal toggleModal={toggleModal} />}
    </nav>
  );
}

import React from "react";

export default function BaseModal({ header }) {
  return (
    <div className="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
      <div className="p-4 bg-white self-start my-32 max-w-screen-md text-black">
        {header}
        <button className="text-white mt-8 bg-weather-primary py-2 px-6">
          Close
        </button>
      </div>
    </div>
  );
}

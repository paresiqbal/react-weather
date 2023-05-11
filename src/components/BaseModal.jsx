import React from "react";

export default function BaseModal({ header }) {
  return (
    <div className="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
      <div className="p-4 bg-white self-start my-32 max-w-screen-md text-black rounded-md">
        <div class="text-black">
          <h1 class="text-2xl mb-1 font-semibold">About:</h1>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather
            of cities of your choosing.
          </p>
          <h2 class="text-2xl font-semibold">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking on the "+" icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>

          <h2 class="text-2xl font-semibold">Removing a city</h2>
          <p>
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be am option to
            delete the city.
          </p>
        </div>
        <button className="text-white mt-8 bg-weather-primary py-2 px-6 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

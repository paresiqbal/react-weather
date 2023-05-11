// react
import { useEffect, useState } from "react";

// library
import axios from "axios";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryTimeout, setQueryTimeout] = useState(null);

  const [mapboxSearchResults, setMapboxSearchResults] = useState(null);
  const mapboxAPIKey =
    "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";

  const getSearchResults = () => {
    clearTimeout(queryTimeout);
    setQueryTimeout(
      setTimeout(async () => {
        if (searchQuery !== "") {
          const result = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxAPIKey}&types=place`
          );
          setMapboxSearchResults(result.data.features);
          return;
        }
        setMapboxSearchResults(null);
      }, 300)
    );
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  return (
    <main className="container text-white">
      <div className="pt-4 mb-8 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a city or state"
          className="py-2 px-1 w-full bg-weather-secondary border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />
        {mapboxSearchResults && (
          <ul className="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
            {mapboxSearchResults.map((searchResult) => (
              <li
                key={searchResult.id}
                className="py-2 cursor-pointer"
                onClick={() => previewCity(searchResult)}
              >
                {searchResult.place_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

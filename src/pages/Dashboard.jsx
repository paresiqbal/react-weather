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
          placeholder="Search For A City"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-2 px-1 w-full bg-weather-tertiary border-b focus:border-purple-500 focus:outline-none focus:shadow-md"
        />
      </div>
      {mapboxSearchResults &&
        mapboxSearchResults.map((result, index) => (
          <div key={index}>{result.place_name}</div>
        ))}
    </main>
  );
}

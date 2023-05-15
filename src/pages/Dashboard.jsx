// react
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const API_KEY = "b1fe8bb6a22e846d16d17e5c31fe22c5";

  const [searchQuery, setSearchQuery] = useState("");
  const [weatherSearchResults, setWeatherSearchResults] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [queryTimeout, setQueryTimeout] = useState(null);

  const getSearchResults = () => {
    clearTimeout(queryTimeout);
    setQueryTimeout(
      setTimeout(async () => {
        if (searchQuery !== "") {
          try {
            const result = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
            );
            setWeatherSearchResults(result.data);
            setSearchError(false);
          } catch {
            setSearchError(true);
          }
        } else {
          setWeatherSearchResults(null);
        }
      }, 300)
    );
  };

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  // Dates function
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <main className="container text-white ">
      <div className="pt-4 mb-8 relative">
        <input
          type="text"
          placeholder="Search for a city"
          className="py-2 px-1 w-full bg-weather-secondary border-b rounded-sm focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 py-4">
          <h1 className="text-4xl font-bold">New York City, US</h1>
          <h2 className="text-2xl">{dateBuilder(new Date())}</h2>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <div className="text-8xl font-bold p-5 rounded-md bg-weather-secondary">
            15°C
          </div>
        </div>
        <h1 className="text-5xl font-bold pt-4">Sunny</h1>
        {weatherSearchResults && (
          <div>
            <h2>{weatherSearchResults.name}</h2>
            <p>{weatherSearchResults.weather[0].description}</p>
            <p>Temperature: {weatherSearchResults.main.temp} K</p>
            <p>Humidity: {weatherSearchResults.main.humidity} %</p>
          </div>
        )}
      </div>
    </main>
  );
}

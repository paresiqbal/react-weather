// library
import axios from "axios";

export default function AsyncCityView() {
  const getWeatherData = async () => {
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=b1fe8bb6a22e846d16d17e5c31fe22c5&units=imperial`
      );

      // cal current date & time
      const localOffset = new Date().getTimezoneOffset() * 60000;
      const utc = weatherData.data.current.dt * 1000 + localOffset;
      weatherData.data.currentTime =
        utc + 1000 * weatherData.data.timezone_offset;

      // cal hourly weather offset
      weatherData.data.hourly.forEach((hour) => {
        const utc = hour.dt * 1000 + localOffset;
        hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
      });

      return weatherData.data;
    } catch (error) {
      console.log(error);
    }

    const weatherData = await getWeatherData();

    console.log(weatherData);
  };

  return <div>AsyncCityView</div>;
}

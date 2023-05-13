export default function Dashboard() {
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
    <main className="container text-white">
      <div className="pt-4 mb-8 relative">
        <input
          type="text"
          placeholder="Search for a city"
          className="py-2 px-1 w-full bg-weather-secondary border-b rounded-sm focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />
      </div>
      <div>
        <div>New York City, US</div>
        <div>{dateBuilder(new Date())}</div>
      </div>
    </main>
  );
}

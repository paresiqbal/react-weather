export default function Dashboard() {
  return (
    <main className="container text-white">
      <div className="pt-4 mb-8 relative">
        <input
          type="text"
          placeholder="Search for a city"
          className="py-2 px-1 w-full bg-weather-secondary border-b rounded-sm focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />
      </div>
    </main>
  );
}

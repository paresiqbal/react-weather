export default function Dashboard() {
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
      </div>
    </main>
  );
}

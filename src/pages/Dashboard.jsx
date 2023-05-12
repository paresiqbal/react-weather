// components
import Search from "../components/Search";

export default function Dashboard() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <main className="container text-white">
      <div className="pt-4 mb-8 relative">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </main>
  );
}

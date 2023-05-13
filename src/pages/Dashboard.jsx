<<<<<<< HEAD
export default function Dashboard() {
  return (
    <main className="container text-white">
      <div className="pt-4 mb-8 relative"></div>
=======
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
>>>>>>> 7a31a283906de0556607811a00a0df71acf6d299
    </main>
  );
}

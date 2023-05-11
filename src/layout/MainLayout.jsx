import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="bg-weather-primary h-screen text-white">
        <Outlet />
      </main>
    </div>
  );
}

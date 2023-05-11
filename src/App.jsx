// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// route
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import CityView from "./pages/CityView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: "/weather/:state/:city",
        element: <CityView />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// react
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// route

const router = createBrowserRouter([
  {
    path: "/",
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

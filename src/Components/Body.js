import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchLater from "./WatchLater";

const Body = () => {
  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watchlater",
    element: <WatchLater />,
  },
]);

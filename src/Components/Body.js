import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchLater from "./WatchLater";
import Play from "./Play";

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
  {
    path: "/watch",
    element: <Play />,
  },
]);

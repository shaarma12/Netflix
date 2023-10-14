import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { signin, signout } from "../Utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, displayName, photoURL } = user;
        dispatch(
          signin({ email: email, displayName: displayName, photoURL: photoURL })
        );
      } else {
        // User is signed out
        dispatch(signout());
      }
    });
  }, []);
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
]);

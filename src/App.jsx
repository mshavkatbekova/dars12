import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext();
  const roots = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "/signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "IS_AUTH_CHANGE", payload: true });
      dispatch({ type: "LOGIN", payload: user });
    });
  }, []);

  return <>{isAuthChange && <RouterProvider router={roots} />}</>;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/user/login/Login";
import SignUp from "../pages/user/signUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user/login",
        element: <SignIn />,
      },
      {
        path: "/user/signup",
        element: <SignUp />,
      },
    ],
  },
]);

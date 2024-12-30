import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@pages/user/login/Login";
import Ranking from "@pages/rank/Ranking";
import SignUp from "@pages/user/signUp/SignUp";
import GameRoomList from "@pages/game/gameRoomList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/signup",
        element: <SignUp />,
      },
      {
        path: "/rank",
        element: <Ranking />,
      },
      {
        path: "/game/list",
        element: <GameRoomList />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Login from "@pages/user/login/Login";
import Ranking from "@pages/rank/Ranking";
import SignUp from "@pages/user/signUp/SignUp";
import Layout from "@components/layout/layout/Layout";
import GameRoomList from "@pages/game/gameRoomList";
import CheckPassword from "@pages/mypage/checkPassword/CheckPassword";
import UpdateMyPage from "@pages/mypage/updateMypage/UpdateMyPage";
import GameRoom from "@pages/game/GameRoom";
import Game from "@pages/game/Game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/game",
        element: <Game />,
        children: [
          {
            index: true,
            element: <GameRoomList />,
          },
          {
            path: "room/1",
            element: <GameRoom />,
          },
        ],
      },
      {
        path: "/user/mypage/checkPassword",
        element: <CheckPassword />,
      },
      {
        path: "/user/mypage/updateMyPage",
        element: <UpdateMyPage />,
      },
    ],
  },
]);

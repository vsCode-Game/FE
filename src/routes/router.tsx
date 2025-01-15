import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@pages/user/login/Login";
import Ranking from "@pages/rank/Ranking";
import SignUp from "@pages/user/signUp/SignUp";
import Layout from "@components/layout/layout/Layout";
import GameRoomList from "@pages/game/gameRoomList";
import CheckPassword from "@pages/mypage/checkPassword/CheckPassword";
import UpdateMyPage from "@pages/mypage/updateMypage/UpdateMyPage";
import GameRoom from "@pages/game/GameRoom";
import Game from "@pages/game/Game";
import Home from "@pages/home/Home";
import { TestInput } from "../pages/testInput/TestInput";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
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
            path: "room/:id",
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
      {
        path: "/test",
        element: <TestInput />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Login from "@pages/user/login/Login";
import Ranking from "@pages/rank/Ranking";
import SignUp from "@pages/user/signUp/SignUp";
import Layout from "../components/layout/layout/Layout";
import GameRoomList from "@pages/game/gameRoomList";
import CheckPassword from "../pages/mypage/checkPassword/CheckPassword";
import UpdateMyPage from "../pages/mypage/updateMypage/UpdateMyPage";

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
        path: "/game/list",
        element: <GameRoomList />,
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

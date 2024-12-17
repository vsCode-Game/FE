import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page1 from "../pages/Page1/Page1";
import Page2 from "../pages/Page2/Page2";
import Page3 from "../pages/Page3/Page3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
    ],
  },
]);

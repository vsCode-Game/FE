import "@styles/font.css";
import GlobalStyles from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const OuterStyle = styled(Outlet)`
  padding: 200px 0 100px 0;
  height: 100vh;
`;

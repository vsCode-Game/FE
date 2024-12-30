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

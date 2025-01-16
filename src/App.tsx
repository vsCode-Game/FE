import "@styles/font.css";
import GlobalStyles from "./styles/GlobalStyle";
import Loading from "./components/ui/loading/Loading";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Suspense } from "react";

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loading overlay={true} />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

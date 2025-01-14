import "@styles/font.css";
import GlobalStyles from "./styles/GlobalStyle";
import ModalFrame from "./components/ui/modal/ModalFrame";
import useModalStore from "./store/useModalStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  const { showModal } = useModalStore();

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      {showModal && <ModalFrame />}
    </>
  );
}

export default App;

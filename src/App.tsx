import "@styles/font.css";
import GlobalStyles from "./styles/GlobalStyle";
import ModalFrame from "./components/ui/modal/ModalFrame";
import useModalStore from "./store/useModalStore";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import Toast from "./components/ui/toast/Toast";

function App() {
  const { showModal } = useModalStore();

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toast />
      {showModal && <ModalFrame />}
    </>
  );
}

export default App;

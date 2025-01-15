import "@styles/font.css";
import GlobalStyles from "./styles/GlobalStyle";
import Modal from "./components/ui/modal/Modal";
import Toast from "./components/ui/toast/Toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useModalStore } from "./store/useModalStore";

function App() {
  const { showModal } = useModalStore();

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toast />
      {showModal && <Modal />}
    </>
  );
}

export default App;

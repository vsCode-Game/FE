import { Outlet } from "react-router-dom";
import Header from "@components/layout/header/Header";
import Footer from "@components/layout/footer/Footer";
import GlobalStyles from "./styles/GlobalStyle";
import "@styles/font.css";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <OuterStyle />
      <Footer />
    </>
  );
}

export default App;

const OuterStyle = styled(Outlet)`
  padding: 200px 0 100px 0;
`;

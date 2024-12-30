import Header from "@components/layout/header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Wrapper, Container } from "./LayoutStyle";

export default function Layout() {
  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

import logo from "@assets/images/logo.svg";
import Button from "@components/ui/button/Button.tsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledHeader, NavList, Logo } from "./HeaderStyle.ts";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 임시 login 상태
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const onClickMove = () => {
    navigate("./user/signup");
  };

  const onClickLogout = () => {};

  return (
    <>
      <StyledHeader>
        <Logo>
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
        </Logo>
        <NavList>
          <li>
            <NavLink to="/rank">랭킹</NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/user/mypage">마이페이지</NavLink>
              </li>
              <li>
                <Button
                  size="sm"
                  width="100px"
                  bgcolor="black"
                  textcolor="white"
                  onClick={onClickLogout}
                >
                  로그아웃
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/user/login">로그인</NavLink>
              </li>
              <li>
                <Button
                  size="sm"
                  width="100px"
                  bgcolor="black"
                  textcolor="white"
                  onClick={onClickMove}
                >
                  회원가입
                </Button>
              </li>
            </>
          )}
        </NavList>
      </StyledHeader>
    </>
  );
}

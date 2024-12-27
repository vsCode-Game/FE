import logo from "@assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { StyledHeader, NavList, Logo } from "./HeaderStyle.ts";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 임시 login 상태

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
                <button type="button">로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/user/login">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/user/signup">회원가입</NavLink>
              </li>
            </>
          )}
        </NavList>
      </StyledHeader>
    </>
  );
}

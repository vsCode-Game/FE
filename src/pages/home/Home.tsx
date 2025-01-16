import CircleBackground from "../../components/ui/circleBackground/CircleBackground";
import Button from "../../components/ui/button/Button";
import largeLogo from "@assets/images/logo_large.svg";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HomeContainer,
  NavWrapper,
  NavList,
  StartButton,
  Main,
  Messages,
} from "./homeStyle";

export default function Home() {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate("/user/signup");
  };

  const onClickStart = () => {
    navigate("/game");
  };

  return (
    <>
      <CircleBackground />
      <HomeContainer>
        <NavWrapper>
          <NavList>
            <li>
              <NavLink to="/user/login">로그인</NavLink>
            </li>
            <li>
              <Button
                type="button"
                size="md"
                width="100px"
                textcolor="white"
                bgcolor="black"
                onClick={onClickSignUp}
              >
                회원가입
              </Button>
            </li>
          </NavList>
        </NavWrapper>
        <Main>
          <h1>
            <img src={largeLogo} alt="코드네임 다빈치 로고" />
          </h1>
          <Messages>
            <li>⚡️ 게임을 플레이하려면 로그인이 필요합니다.</li>
            <li>⚡️ 총 플레이 인원은 2명입니다.</li>
            <li>
              ⚡️ 방에 입장한 모두가 [레디] 상태가 되면 게임이 시작됩니다.
            </li>
          </Messages>
          <StartButton
            type="button"
            size="xl"
            width="500px"
            textcolor="black"
            bgcolor="green"
            onClick={onClickStart}
          >
            Let's Get Started !
          </StartButton>
        </Main>
      </HomeContainer>
    </>
  );
}

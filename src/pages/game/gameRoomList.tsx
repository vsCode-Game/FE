import Button from "../../components/ui/button/Button";
import CardList from "../../components/ui/card/cardList/CardList";
import * as S from "./gameRoomListStyle";

export default function GameRoomList() {
  return (
    <S.container>
      <S.buttonContainer>
        <Button
          type="button"
          size="l"
          bgcolor="green"
          textcolor="black"
          width="180px"
        >
          + 방만들기
        </Button>
      </S.buttonContainer>
      <S.gameroomListContainer>
        <CardList />
      </S.gameroomListContainer>
    </S.container>
  );
}

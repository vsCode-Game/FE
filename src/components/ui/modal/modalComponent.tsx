import FirstSelect from "../modalContents/FirstSelect";
import MakeRoom from "../modalContents/MakeRoom";
import BigDeck from "../bigDeck/BigDeck";
import TurnWaiting from "../modalContents/TurnWaiting";
import GameWaiting from "../modalContents/GameWaiting";
import Alert from "../modalContents/Alert";
import GuessNumber from "../selectionNumber/GuessNumber";
import SelectTurn from "../modalContents/SelectTurn";

export const modalComponents: Record<string, React.ReactNode> = {
  firstSelect: <FirstSelect />,
  makeRoom: <MakeRoom />,
  selectWhiteBlack: <BigDeck />,
  turnWaiting: <TurnWaiting />,
  gameWaiting: <GameWaiting />,
  selectTurn: <SelectTurn />,
  gameRoomJoinConfirm: (
    <Alert message="개임 방 만들기는 로그인 후 가능합니다." />
  ),
  guessNumber: <GuessNumber />,
  myTurn: <BigDeck />,
};

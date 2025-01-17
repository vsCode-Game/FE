import FirstSelect from "../modalContents/FirstSelect";
import MakeRoom from "../modalContents/MakeRoom";
import BigDeck from "../bigDeck/BigDeck";
import TurnWaiting from "../modalContents/TurnWaiting";
import GameWaiting from "../modalContents/GameWaiting";
import Alert from "../modalContents/Alert";

export const modalComponents: Record<string, React.ReactNode> = {
  firstSelect: <FirstSelect />,
  makeRoom: <MakeRoom />,
  selectWhiteBlack: <BigDeck />,
  turnWaiting: <TurnWaiting />,
  gameWaiting: <GameWaiting />,
  GamrRoomJoinConfirm: (
    <Alert message="개임 방 만들기는 로그인 후 가능합니다." />
  ),
};

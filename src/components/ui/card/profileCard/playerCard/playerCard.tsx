import { Fragment } from "react/jsx-runtime";
import Button from "../../../button/Button";
import Profile from "../../../profile/Profile";
import { useSocketStore } from "../../../../../store/useSocketStore";
import { useEffect } from "react";

interface IPlayerCard {
  nickname?: string;
  roomId: number;
  handleMyReady: () => void;
  myReady: boolean;
}

export default function PlayerCard({
  nickname,
  roomId,
  myReady,
  handleMyReady,
}: IPlayerCard) {
  const { socket } = useSocketStore();

  const onClickReady = () => {
    if (!socket) {
      return;
    }
    handleMyReady();
  };

  useEffect(() => {
    if (!socket) {
      return;
    }
    if (myReady) {
      console.log(myReady, "마이래디");
      socket?.emit("setReady", { roomId });
    } else {
      socket?.emit("unReady", { roomId });
    }
  }, [myReady]);

  return (
    <Fragment>
      <Profile nickname={nickname} />
      <Button
        type="button"
        bgcolor={!myReady ? "blue" : "red"}
        textcolor="black"
        size="sm"
        onClick={onClickReady}
      >
        {myReady ? "UnReady" : "Ready"}
      </Button>
    </Fragment>
  );
}

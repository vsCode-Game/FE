import { ReactNode } from "react";
import PlayerCard from "./playerCard/playerCard";
import * as S from "./ProfileCardStyle";

interface IMyProfileCard {
  nickname?: string;
  children: ReactNode;
  roomId: number;
  myReady: boolean;
  handleMyReady: () => void;
}

export default function MyProfileCard({
  nickname,
  children,
  roomId,
  myReady,
  handleMyReady,
}: IMyProfileCard) {
  return (
    <div>
      <S.CardIndex>{children}</S.CardIndex>
      <S.PlayerCardContainer>
        <PlayerCard
          myReady={myReady}
          handleMyReady={handleMyReady}
          roomId={roomId}
          nickname={nickname}
        />
      </S.PlayerCardContainer>
    </div>
  );
}

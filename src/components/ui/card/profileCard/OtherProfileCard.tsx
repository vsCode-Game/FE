import { ReactNode } from "react";
import * as S from "./ProfileCardStyle";
import { IUser } from "../../../../pages/game/GameRoom";
import WaitingCard from "../waitingCard/WaitingCard";
import OtherPlayerCard from "./playerCard/OtherPlayerCard";

interface IOtherProfileCard {
  nickname?: string;
  children: ReactNode;
  roomId: number;
  otherInfo?: IUser[];
  otherReady: boolean;
}

export default function OtherProfileCard({
  nickname,
  children,
  roomId,
  otherInfo = [],
  otherReady,
}: IOtherProfileCard) {
  console.log(otherReady, "아더레디 확인");
  return (
    <div>
      <S.CardIndex>{children}</S.CardIndex>
      <S.PlayerCardContainer>
        {otherInfo?.length > 0 ? (
          <OtherPlayerCard nickname={nickname} otherReady={otherReady} />
        ) : (
          <WaitingCard />
        )}
      </S.PlayerCardContainer>
    </div>
  );
}

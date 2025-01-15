import { ReactNode } from "react";
import PlayerCard from "./playerCard/playerCard";
import * as S from "./ProfileCardStyle";

interface IProfileCard {
  nickname: string | undefined;
  children: ReactNode;
}

export default function ProfileCard({ nickname, children }: IProfileCard) {
  return (
    <div>
      <S.CardIndex>{children}</S.CardIndex>
      <S.PlayerCardContainer>
        <PlayerCard nickname={nickname} />
      </S.PlayerCardContainer>
    </div>
  );
}

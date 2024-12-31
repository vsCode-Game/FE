import * as S from "./profileStyle";

export default function Profile({ nickname, rank, avatar }: IprofileProps) {
  return (
    <S.container>
      <S.avatar>{avatar}</S.avatar>
      <S.nameBox>
        <S.nickname>{nickname}</S.nickname>
        <S.rankBox>
          <S.trophyImg src="/trophy.png" alt="trophy"></S.trophyImg>
          <S.rank>{rank}</S.rank>
        </S.rankBox>
      </S.nameBox>
    </S.container>
  );
}

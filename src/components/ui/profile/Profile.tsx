import * as S from "./profileStyle";

export default function Profile({ nickname }: IprofileProps) {
  return (
    <S.container>
      <S.avatar></S.avatar>
      <S.nameBox>
        <S.nickname>{nickname}</S.nickname>
      </S.nameBox>
    </S.container>
  );
}

import * as S from "./profileStyle";
import myProfileImage from "@assets/images/image_profile_01.svg";

export default function Profile({ nickname }: IprofileProps) {
  return (
    <S.container>
      <S.avatar src={myProfileImage} alt="내 프로필 이미지" />
      <S.nameBox>
        <S.nickname>{nickname}</S.nickname>
      </S.nameBox>
    </S.container>
  );
}

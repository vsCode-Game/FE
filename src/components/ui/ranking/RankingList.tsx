import gold from "../../../assets/images/icon_gold.svg";
import silver from "../../../assets/images/icon_silver.svg";
import bronze from "../../../assets/images/icon_bronze.svg";
import {
  BronzeImage,
  GoldImage,
  Hr,
  NickNameBox,
  NicknameImage,
  NickNameText,
  RankingBox,
  RankingNumber,
  SilverImage,
} from "./rankingListStyle";
import profile from "../../../assets/images/image_profile_01.svg";

interface IRankingList {
  nickname: string;
  index: number;
}

export default function RankingList({ nickname, index }: IRankingList) {
  return (
    <div>
      <RankingBox>
        <NickNameBox>
          <p>
            {index === 0 ? (
              <GoldImage src={gold} alt="금메달" />
            ) : index === 1 ? (
              <SilverImage src={silver} alt="은메달" />
            ) : index === 2 ? (
              <BronzeImage src={bronze} alt="동메달" />
            ) : (
              ""
            )}
          </p>
          <NicknameImage src={profile} alt="닉네임 프로필" />
          <NickNameText>{nickname}</NickNameText>
        </NickNameBox>
        <RankingNumber>{index + 1}</RankingNumber>
      </RankingBox>
      <Hr></Hr>
    </div>
  );
}

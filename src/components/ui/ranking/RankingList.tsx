import gold from "../../../assets/images/icon_gold.svg";
import silver from "../../../assets/images/icon_silver.svg";
import bronze from "../../../assets/images/icon_bronze.svg";
import { BronzeImage, GoldImage, SilverImage } from "./rankingListStyle";

interface IRankingList {
  nickname: string;
  index: number;
}

export default function RankingList({ nickname, index }: IRankingList) {
  return (
    <div>
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
      <p>{nickname}</p>
      <p>{index + 1}</p>
    </div>
  );
}

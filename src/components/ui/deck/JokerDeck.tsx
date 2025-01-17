import * as S from "./JokerDeckStyle";

interface IJockerDeck {
  pos: number;
  onClick: (pos: number) => void;
}

export default function JokerDeck({ pos, onClick }: IJockerDeck) {
  return <S.JockerDeck onClick={() => onClick(pos)}>선택</S.JockerDeck>;
}

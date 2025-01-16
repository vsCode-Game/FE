import * as S from "./JokerDeckStyle";

export default function JokerDeck({ pos, onClick }) {
  return <S.JockerDeck onClick={() => onClick(pos)}>선택</S.JockerDeck>;
}

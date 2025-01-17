import { io } from "socket.io-client";
import ChattingBox from "../../components/ui/card/chatting/Chatting";
import { useSocketStore } from "../../store/useSocketStore";
import * as S from "./gameRoomStyle";
import React, { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useGetGameRoomInfo } from "../../hooks/useQuery";
import { useParams } from "react-router-dom";
import MyProfileCard from "../../components/ui/card/profileCard/ProfileCard";
import OtherProfileCard from "../../components/ui/card/profileCard/OtherProfileCard";
import { useModal } from "../../hooks/useModal";
import { useUserMyIdStore } from "../../store/useUserMyIdStore";
import FrontDeck from "../../components/ui/deck/FrontDeck";
import JokerDeck from "../../components/ui/deck/JokerDeck";
import BackDeck from "../../components/ui/deck/BackDeck";

export interface IUser {
  id: number;
  roomId: number;
  userId: number;
  joinedAt: string;
  userNickname: string;
  ready: boolean;
}

interface IJoinRoomResponse {
  sender: string;
  userNickname: string;
  message: string;
}

interface IJwtDecode {
  exp: number;
  iat: number;
  userEmail: string;
  userId: number;
}

interface IReadyData {
  userId: number;
  ready: boolean;
}

interface IJoinData {
  sender: string;
  userNickname: string;
  message: string;
}

interface ILeaveData {
  sender: string;
  userNickname: string;
  message: string;
}

interface IGameStartData {
  starterUserId: number;
  message: string;
}

interface IFinalHand {
  num: number;
  color: string;
  isFlipped: boolean;
}

interface IOpponentColor {
  color: string;
  isFlipped: boolean;
}

interface IFieldDeck {
  blackCount: number;
  whiteCount: number;
}

interface IHandDeck {
  finalHand: IFinalHand[];
  message: string;
}

interface IArrangeCard {
  arrangeCard: boolean;
  finalHand: IFinalHand[];
  jokerCard: IFinalHand;
  message: string;
  possiblePositions: number[];
}

interface IOpponentColorArrayRevealed {
  message: string;
  opponentColorArray: IOpponentColor[];
}

interface INowTurn {
  fieldBlack: number;
  fieldWhite: number;
  message: string;
  turnUserId: number;
}

interface IDrawCard {
  arrangeCard: boolean;
  finalHand: IFinalHand[];
  message: string;
  newPosition: number;
  newlyDrawn: IFinalHand;
}

interface IOponnentCard {
  color: string;
  index: number;
  message: string;
  opponentCard: IOpponentColor[];
  userId: number;
}

interface IWrongGuess {
  cardIndex: number;
  cardNumber: number;
  finalHand: IFinalHand[];
  message: string;
  userId: number;
}
export default function GameRoom() {
  const { socket, setSocket } = useSocketStore();
  const params = useParams();
  const roomId = Number(params.id);
  const { userMyId, setUserMyId } = useUserMyIdStore();
  const [myInfo, setMyInfo] = useState<IUser | undefined>(undefined);
  const [otherInfo, setOtherInfo] = useState<IUser[] | undefined>(undefined);
  const [myReady, setMyReady] = useState(false);
  const [otherReady, setOtherReady] = useState(false);
  const { data, refetch } = useGetGameRoomInfo(roomId);
  const userMyIdRef = useRef<number | undefined>(undefined);

  const [finalHand, setFinalHand] = useState<IFinalHand[]>([]);
  const [possiblePositions, setPossiblePositions] = useState<number[]>([]);
  const [joker, setJoker] = useState<IFinalHand | null>(null);
  const [opponentColor, setOpponentColor] = useState<IOpponentColor[] | null>(
    null,
  );
  const [arrangeCard, setArrangeCard] = useState(false);
  const [fieldDeck, setFieldDeck] = useState<IFieldDeck>();
  const [turnId, setTurnId] = useState<number>();
  const [newPosition, setNewPosition] = useState<number>();
  const [opponent, setOpponentCard] = useState<IOpponentColor[]>();
  const [newlyDrawn, setNewlyDrawn] = useState<IFinalHand>();
  const [opponentIndex, setOpponentIndex] = useState<number>();
  const [message, setMessage] = useState<string>();
  const [wrongIndex, setWrongIndex] = useState<number>();

  console.log(
    "타입에러방지",
    arrangeCard,
    fieldDeck,
    opponent,
    newlyDrawn,
    message,
  );
  const { openModal } = useModal();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("Access token is missing.");
      //오류 표시하거나 로그인창으로 리다이렉션 하기
      return;
    }

    const decoded = jwtDecode<IJwtDecode>(accessToken);
    setUserMyId(decoded.userId);
    userMyIdRef.current = decoded.userId;

    if (socket) {
      socket.on("connect", () => {
        console.log(`Socket connected: ${socket.id}`);
      });
    }

    const newSocket = io(`wss://api.davincicodegame.store/game`, {
      extraHeaders: { Authorization: accessToken },
      auth: { token: accessToken },
    });

    setSocket(newSocket);
    console.log("룸아이디", roomId);
    newSocket.emit("joinRoom", { roomId }, (response: IJoinRoomResponse) => {
      console.log(`Join room response: ${JSON.stringify(response)}`);
    });
  }, []);

  useEffect(() => {
    const myProfile = data?.users.find(
      (user: IUser) => user.userId == userMyId,
    );

    setMyInfo(myProfile);

    const otherProfile = data?.users.filter(
      (user: IUser) => user.userId !== userMyId,
    );

    setOtherInfo(otherProfile);
  }, [data]);

  useEffect(() => {
    if (!socket) return;

    const handleJoin = async (data: IJoinData) => {
      console.log(`${JSON.stringify(data)}`);
      const refetchInfo = await refetch();
      console.log(refetchInfo, "Refetch Info");
    };

    const handleLeave = async (data: ILeaveData) => {
      console.log(`${JSON.stringify(data)}`);
    };

    const handleReady = async (data: IReadyData) => {
      console.log(`${JSON.stringify(data)}`);
      const { userId, ready } = data;

      if (userId !== userMyIdRef.current) {
        setOtherReady(ready);
      }
    };

    const handleGameStart = async (data: IGameStartData) => {
      console.log(`${JSON.stringify(data)}`);
      openModal("firstSelect", "white");
    };

    const handleHandDeck = async (data: IHandDeck) => {
      console.log(`${JSON.stringify(data)}`);
      const { finalHand, message } = data;
      setMessage(message);
      setFinalHand(finalHand);
    };

    const handleArrangeCard = async (data: IArrangeCard) => {
      console.log(`${JSON.stringify(data)}`);
      const { finalHand, possiblePositions, jokerCard, arrangeCard, message } =
        data;
      console.log("핸들어렌지 카드에서 데이터보기", data);
      setFinalHand(finalHand);
      setPossiblePositions(possiblePositions);
      setJoker(jokerCard);
      setArrangeCard(arrangeCard);
      setMessage(message);
    };

    const handleOpponentColor = async (data: IOpponentColorArrayRevealed) => {
      console.log(`${JSON.stringify(data)}`);
      console.log("핸들 오포넌트칼라 데이터", data);
      const { opponentColorArray } = data;
      console.log(opponentColorArray, "상대 칼라 확인하기");
      setOpponentColor(opponentColorArray);
    };

    const handleNowTurn = async (data: INowTurn) => {
      console.log(`${JSON.stringify(data)}`);
      const { fieldBlack, fieldWhite, message, turnUserId } = data;
      setFieldDeck({
        blackCount: fieldBlack,
        whiteCount: fieldWhite,
      });
      setTurnId(turnUserId);
      setMessage(message);
    };

    const handleDrawCard = async (data: IDrawCard) => {
      console.log(`${JSON.stringify(data)}`);
      const { finalHand, message, newPosition, newlyDrawn, arrangeCard } = data;
      setMessage(message);
      setFinalHand(finalHand);
      setNewlyDrawn(newlyDrawn);
      setArrangeCard(arrangeCard);
      setNewPosition(newPosition);
    };

    const handleOpponentCard = async (data: IOponnentCard) => {
      console.log(`${JSON.stringify(data)}`);
      const { opponentCard, message, index } = data;
      setMessage(message);
      setOpponentCard(opponentCard);
      setOpponentColor(opponentCard);
      setOpponentIndex(index);
    };

    const handleWrongGuess = async (data: IWrongGuess) => {
      const { cardIndex, finalHand, message } = data;
      setMessage(message);
      setFinalHand(finalHand);
      setWrongIndex(cardIndex);
    };

    socket.on("join", handleJoin);
    socket.on("leave", handleLeave);
    socket.on("ready", handleReady);
    socket.on("gameStart", handleGameStart);
    socket.on("handDeck", handleHandDeck);
    socket.on("arrangeCard", handleArrangeCard);
    socket.on("opponentColorArrayRevealed", handleOpponentColor);
    socket.on("nowTurn", handleNowTurn);
    socket.on("drawCard", handleDrawCard);
    socket.on("opponentCard", handleOpponentCard);
    socket.on("wrongGuess", handleWrongGuess);

    return () => {
      socket.disconnect();
    };
  }, [socket, refetch]);

  useEffect(() => {
    if (turnId === userMyIdRef.current) {
      openModal("myTurn", "white");
    }
  }, [turnId]);

  const handleMyReady = () => {
    setMyReady((prev) => !prev);
  };

  const onClickJoker = (pos: number) => {
    if (!joker) return;
    if (!socket) return;

    const newHand = [...finalHand];
    console.log("joker카드확인", joker);
    newHand.splice(pos, 0, joker);
    console.log(newHand, "뉴핸드 확인");
    setFinalHand(newHand);
    setPossiblePositions([]);

    socket.emit("arrangeDeck", { roomId, newOrder: newHand });
  };

  return (
    <S.container>
      <S.leftContainer>
        <OtherProfileCard
          roomId={roomId}
          otherInfo={otherInfo || []}
          nickname={otherInfo ? otherInfo[0]?.userNickname : ""}
          otherReady={otherReady}
        >
          상대 플레이어
        </OtherProfileCard>
        <ChattingBox />
      </S.leftContainer>
      <S.centerContainer>
        <S.guideBox></S.guideBox>
        <S.otherPlayerDeck>
          {opponentColor?.map((deck, index) => (
            <BackDeck
              key={"backdeck-" + index}
              isFlipped={deck.isFlipped}
              color={deck.color}
              cardIndex={index}
              myHighlight={index === opponentIndex}
              disabled={userMyId !== turnId}
            />
          ))}
        </S.otherPlayerDeck>
        <S.selectNumberBox></S.selectNumberBox>
      </S.centerContainer>
      <S.rightContainer>
        <S.myDeckBox>
          {finalHand?.map((deck, index) => (
            <React.Fragment key={index}>
              {possiblePositions.includes(index) && (
                <JokerDeck pos={index} onClick={onClickJoker} />
              )}
              <FrontDeck
                key={"frontdeck-" + index}
                value={deck.num}
                color={deck.color}
                myHighlight={index === newPosition}
                // opponentHighlight ={index ===}
              />
              {index === finalHand.length - 1 &&
                possiblePositions.includes(finalHand.length) && (
                  <JokerDeck pos={finalHand.length} onClick={onClickJoker} />
                )}
            </React.Fragment>
          ))}
        </S.myDeckBox>
        <MyProfileCard
          nickname={myInfo?.userNickname}
          roomId={roomId}
          myReady={myReady}
          handleMyReady={handleMyReady}
        >
          나
        </MyProfileCard>
      </S.rightContainer>
    </S.container>
  );
}

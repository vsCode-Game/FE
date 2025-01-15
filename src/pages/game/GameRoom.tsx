import { io } from "socket.io-client";
import ChattingBox from "../../components/ui/card/chatting/Chatting";
import { useSocketStore } from "../../store/useSocketStore";
import * as S from "./gameRoomStyle";
import { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useGetGameRoomInfo } from "../../hooks/useQuery";
import { useParams } from "react-router-dom";
import MyProfileCard from "../../components/ui/card/profileCard/ProfileCard";
import OtherProfileCard from "../../components/ui/card/profileCard/OtherProfileCard";

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

export default function GameRoom() {
  const { socket, setSocket } = useSocketStore();
  const params = useParams();
  const roomId = Number(params.id);
  const [userMyId, setUserMyId] = useState<number | undefined>(undefined);
  const [myInfo, setMyInfo] = useState<IUser | undefined>(undefined);
  const [otherInfo, setOtherInfo] = useState<IUser[] | undefined>(undefined);
  // const { setReady } = useReadyStore();
  const [myReady, setMyReady] = useState(false);
  const [otherReady, setOtherReady] = useState(false);
  const { data, refetch } = useGetGameRoomInfo(roomId);
  const userMyIdRef = useRef<number | undefined>(undefined);

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

    const handleJoin = async (data) => {
      console.log(`${JSON.stringify(data)}`);
      const refetchInfo = await refetch();
      console.log(refetchInfo, "Refetch Info");
    };

    const handleLeave = async (data) => {
      console.log(`${JSON.stringify(data)}`);
    };

    const handleReady = async (data: IReadyData) => {
      console.log(`${JSON.stringify(data)}`);
      const { userId, ready } = data;

      if (userId !== userMyIdRef.current) {
        setOtherReady(ready);
      }
    };

    const handleGameStart = async (data) => {
      console.log(`${JSON.stringify(data)}`);
    };

    socket.on("join", handleJoin);
    socket.on("leave", handleLeave);
    socket.on("ready", handleReady);
    socket.on("gameStart", handleGameStart);

    return () => {
      socket.disconnect();
    };
  }, [socket, refetch]);

  const handleMyReady = () => {
    setMyReady((prev) => !prev);
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
        <S.otherPlayerDeck></S.otherPlayerDeck>
        <S.selectNumberBox></S.selectNumberBox>
      </S.centerContainer>
      <S.rightContainer>
        <S.myDeckBox />
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

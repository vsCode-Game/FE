import { io } from "socket.io-client";
import ChattingBox from "../../components/ui/card/chatting/Chatting";
import { useSocketStore } from "../../store/useSocketStore";
import ProfileCard from "../../components/ui/card/profileCard/ProfileCard";
import * as S from "./gameRoomStyle";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useGetGameRoomInfo } from "../../hooks/useQuery";
import { useParams } from "react-router-dom";

interface IUser {
  id: number;
  roomId: number;
  userId: number;
  joinedAt: string;
  userNickname: string;
}

interface IRoomName {
  id: number;
  roomName: string;
  maxPlayers: number;
  currentCount: number;
  createdAt: string;
}

interface IGameRoomInfo {
  roomName: IRoomName;
  users: IUser[];
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

interface IMyInfo {
  id: number;
  roomId: number;
}

export default function GameRoom() {
  const { socket, setSocket } = useSocketStore();
  const params = useParams();
  const roomId = Number(params.id);
  const [userMyId, setUserMyId] = useState<number | undefined>(undefined);
  const [myInfo, setMyInfo] = useState<IUser | undefined>(undefined);
  const [otherInfo, setOtherInfo] = useState<IUser[] | undefined>(undefined);
  const accessToken = localStorage.getItem("accessToken");
  const { data, refetch } = useGetGameRoomInfo(roomId);

  useEffect(() => {
    if (!accessToken) {
      console.error("Access token is missing.");
      //오류 표시하거나 로그인창으로 리다이렉션 하기
      return;
    }

    const decoded = jwtDecode<IJwtDecode>(accessToken);
    setUserMyId(decoded.userId);

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
    socket.on("join", async (data) => {
      console.log(`${JSON.stringify(data)}`);
      const refetchInfo = await refetch();
      console.log(refetchInfo, "리페치정보");
    });
  }, [socket]);

  return (
    <S.container>
      <S.leftContainer>
        <ProfileCard nickname={otherInfo ? otherInfo[0]?.userNickname : ""}>
          상대 플레이어
        </ProfileCard>
        <ChattingBox />
      </S.leftContainer>
      <S.centerContainer>
        <S.guideBox></S.guideBox>
        <S.otherPlayerDeck></S.otherPlayerDeck>
        <S.selectNumberBox></S.selectNumberBox>
      </S.centerContainer>
      <S.rightContainer>
        <S.myDeckBox />
        <ProfileCard nickname={myInfo?.userNickname}>나</ProfileCard>
      </S.rightContainer>
    </S.container>
  );
}

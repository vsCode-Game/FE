import { useQuery } from "@tanstack/react-query";
import { getGameRoomInfo, getGameRoomsList } from "../api/gameRoomApi";

export const useGetGameRoomList = () => {
  return useQuery({
    queryKey: ["gameRoomsList"],
    queryFn: getGameRoomsList,
  });
};

export const useGetGameRoomInfo = (roomId: number) => {
  return useQuery({
    queryKey: ["gameRoomInfo", roomId],
    queryFn: () => getGameRoomInfo(roomId),
  });
};

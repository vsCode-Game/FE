import { useQuery } from "@tanstack/react-query";
import { getGameRoomsList } from "../api/gameRoomApi";

export const useGetGameRoomList = () => {
  return useQuery({
    queryKey: ["gameRoomsList"],
    queryFn: getGameRoomsList,
  });
};

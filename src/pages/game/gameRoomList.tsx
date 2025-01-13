import { useInfiniteQuery } from "@tanstack/react-query";
import Button from "../../components/ui/button/Button";
import * as S from "./gameRoomListStyle";
import GameRoomCard from "../../components/ui/card/cardList/GameRoomCard";
import { useCallback, useEffect, useRef } from "react";

const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  roomName: `테스트방${index + 1}`,
  maxPlayers: 2,
  currentCount: (index % 2) + 1,
  createdAt: new Date().toISOString(),
}));

// const fetchRooms = async ({ pageParam = 1 }) => {
//   const res = await fetch(`/gameRoom?page=${pageParam}&limit=12`);
//   if (!res.ok) {
//     throw new Error("failed to fetch game room");
//   }
//   const data = await res.json();
//   return {
//     rooms: data,
//     nextPage: data.length === 10 ? pageParam + 1 : undefined,
//   };
// };

const fetchMockRooms = async ({ pageParam = 1, limit = 12 }) => {
  const start = (pageParam - 1) * limit;
  const end = start + limit;
  const pageData = mockData.slice(start, end);

  return {
    rooms: pageData,
    nextPage: end < mockData.length ? pageParam + 1 : undefined,
  };
};

export default function GameRoomList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(
      ["mockGameRooms"], // Query Key
      ({ pageParam = 1 }) => fetchMockRooms({ pageParam, limit: 12 }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage, // 다음 페이지 결정
      },
    );
  // Intersection Observer를 위한 ref
  const loadMoreRef = useRef(null);

  // Intersection Observer 콜백
  const handleObserver = useCallback(
    (entries: any) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage(); // 다음 페이지 로드
      }
    },
    [fetchNextPage, hasNextPage],
  );

  // Observer 등록
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null, // 뷰포트를 기준으로
      rootMargin: "0px",
      threshold: 1.0, // 요소가 100% 보일 때 트리거
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [handleObserver]);
  if (status === "loading") return <p>Loading...</p>;

  // 모든 페이지 데이터를 평탄화
  const allRooms = data?.pages.flatMap((page) => page.rooms);

  return (
    <S.container>
      <S.buttonContainer>
        <Button
          type="button"
          size="l"
          bgcolor="green"
          textcolor="black"
          width="180px"
        >
          + 방만들기
        </Button>
      </S.buttonContainer>
      <S.gameroomListContainer>
        {allRooms.map((room) => (
          <GameRoomCard key={room.id} room={room} />
        ))}
      </S.gameroomListContainer>
      <div
        ref={loadMoreRef}
        style={{ height: "1px", background: "transparent" }}
      />
      {isFetchingNextPage && <p>Loading more...</p>}
    </S.container>
  );
}

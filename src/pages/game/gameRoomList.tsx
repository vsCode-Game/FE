// export default function Page1() {
//   return <div>Page1</div>;
// }

// import WaitingPage from "../../components/ui/page/WaitingPage";
// import CheckBox from "../../components/ui/check_box/CheckBox";
// import Nickname from "../../components/ui/card/Nickname";

// import "../../components/ui/badge/BadgeRed.css";
// export default function BadgeRed() {
//   return (
//     <div className="BadgeR">
//       <p>Not Ready</p>
//     </div>
//   );
// }

// export default function BadgeYellow() {
//   return (
//     <div
//       className="@apply w-[110px] h-[30px] shadow-[1px_1px_3px_0px_#000000e5] font-semibold text-base text-center leading-8 text-black rounded-[30px];
//   background: radial-gradient(50% 50% at 50% 50%, #fffba6, #fff);
// }"
//     >
//       <p>Waiting...</p>
//     </div>
//   );
// }

// import { IBadgeProps } from "../../components/ui/badge/badge_props";
// import * as S from "../../components/ui/badge/badgeStyle";

// export default function Badge({ status }: IBadgeProps) {
//   return <S.Badge status={status}>{status}</S.Badge>;
// }

// import Badge from "../../components/ui/badge/Badge";
// import styled from "styled-components";
// // import CardList from "../../components/ui/card/CardList";

// const BadgeBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export default function GameRoomList() {
//   return (
//     <>
//       <BadgeBox>
//         <Badge status="waiting..." children={undefined} />
//         <Badge status="playing" children={undefined} />
//         <Badge status="not Ready" children={undefined} />
//       </BadgeBox>
//       <div>{/* map으로 cardList 반복 */}</div>
//     </>
//   );
// }

// export default function GameRoomList() {
//   return <CardList />;
// }

import MyPage from "../../components/ui/page/MyPage";
export default function GameRoomList() {
  return <MyPage></MyPage>;
}

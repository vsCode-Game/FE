import styled from "styled-components";

const BadgeY = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 0px #000000e5;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  color: #000000;
  background: radial-gradient(50% 50% at 50% 50%, #fffba6, #fff);
`;
export default function BadgeYellow() {
  return (
    <BadgeY>
      <p>Waiting...</p>
    </BadgeY>
  );
}

// import "./BadgeYellow.css";

// export default function BadgeYellow() {
//   return (
//     <div className="@apply w-[110px] h-[30px] shadow-[1px_1px_3px_0px_#000000e5] font-semibold text-base text-center leading-8 text-black rounded-[30px];
//   background: radial-gradient(50% 50% at 50% 50%, #fffba6, #fff);
// }">
//       <p>Waiting...</p>
//     </div>
//   );
// }

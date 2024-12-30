import styled from "styled-components";

const BadgeG = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 0px #000000e5;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  color: #000000;
  background: radial-gradient(50% 50% at 50% 50%, #44ff92, #fff);
`;
export default function BadgeGreen() {
  return (
    <BadgeG>
      <p>Playing</p>
    </BadgeG>
  );
}

// import "./BadgeGreen.css";

// export default function BadgeGreen() {
//   return (
//     <div className="BadgeG">
//       <p>Playing</p>
//     </div>
//   );
// }

import styled from "styled-components";

const BadgeR = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 1px 1px 3px 0px #000000e5;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  color: #000000;
  background: radial-gradient(50% 50% at 50% 50%, #ff5e5e, #fff);
`;
export default function BadgeRed() {
  return (
    <BadgeR>
      <p>Not Ready</p>
    </BadgeR>
  );
}

// import "./BadgeRed.css";

// export default function BadgeRed() {
//   return (
//     <div className="BadgeR">
//       <p>Not Ready</p>
//     </div>
//   );
// }

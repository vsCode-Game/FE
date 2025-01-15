// import styled from "styled-components";

// export const NumberDetail = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 40px;
//   border: 1px solid var(--color-gray-999);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--gray-0, #fff);
//   background-color: var(--color-gray-999);
//   margin-right: 9px;
//   margin-bottom: 14px;
//   font-size: 24px;
//   font-weight: 600;
// `;

import styled from "styled-components";

export const NumberDetail = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid var(--color-gray-999);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-0, #fff);
  background-color: var(--color-gray-999);
  margin-right: 9px;
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    border-color: var(--color-primary);
    transform: scale(1.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

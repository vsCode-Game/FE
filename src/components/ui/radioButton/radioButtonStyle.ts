import styled from "styled-components";
import { ISpanProps } from "./radioButton_props";

// interface RadioProps {
//   isChecked: boolean;
// }

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Span = styled.span<ISpanProps>`
  height: 20px;
  width: 20px;
  background-color: ${(props) =>
    props.isChecked
      ? "var(--color-gray-0)"
      : "transparent"}; // 바깥 원은 선택되었을 때만 var(--color-gray-0)로
  border: 1px solid var(--color-gray-999); // 기본 테두리는 회색
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    position: absolute;
    left: 3px; // 안쪽 원 위치 조정
    top: 3px; // 안쪽 원 위치 조정
    width: 12px; // 안쪽 원의 크기
    height: 12px;
    background-color: ${(props) =>
      props.isChecked
        ? "var(--color-gray-999)"
        : "transparent"}; // 선택되면 안쪽 원이 var(--color-gray-999)
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.isChecked ? "none" : "block")};
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%; // 작은 흰색 원
  }
`;

export { Label, Input, Span };

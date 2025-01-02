import styled from "styled-components";
import { ISpanProps } from "./checkBox_props";

// interface SpanProps {
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
  height: 15px;
  width: 15px;
  background-color: ${(props) =>
    props.isChecked ? "var(--color-secondary)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.isChecked ? "var(--color-secondary)" : "var(--color-gray-999)"};
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.isChecked ? "block" : "none")};
    left: 2px;
    top: 1px;
    width: 7px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
export { Label, Input, Span };

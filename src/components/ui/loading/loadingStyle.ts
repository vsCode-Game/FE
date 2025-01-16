import styled from "styled-components";
import { LoadingProps } from "./Loading";

export const LoadingWrapper = styled.div<LoadingProps>`
  ${(props) =>
    props.overlay &&
    `
    position: fixed;
    inset: 0;
    background-color: rgba(208, 255, 207, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoadingBox = styled.div<LoadingProps>`
  ${(props) =>
    props.overlay &&
    `
        width: 250px;
        height: 250px;
        background-color: var(--color-gray-0);
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px; 
    `}
`;

export const LoadingMessage = styled.p``;

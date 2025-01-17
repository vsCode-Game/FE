import styled, { keyframes } from "styled-components";

const MovingGreen = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  65% {
    transform: translate(260%, 35%);
  }
  100% {
    transform: translate(0%, 150%);
  }
`;

const MovingBlue = keyframes`
  0% {
    transform: translate(300%, 20%);
  }
  30% {
    transform: translate(0%, 240%);
  }
  100% {
    transform: translate(-180%, -10%);
  }
`;

const MovingRose = keyframes`
  0% {
    transform: translate(-10%, 200%);
  }
  50% {
    transform: translate(140%, 80%);
  }
  100% {
    transform: translate(50%, 0%);
  }
`;

const MovingYellow = keyframes`
  0% {
    transform: translate(10%, -20%);
  }
  40% {
    transform: translate(-30%, 150%);
  }
  100% {
    transform: translate(260%, 320%);
  }
`;
export const Wrapper = styled.div`
  max-height: 600px;
  overflow: hidden;
`;

export const CircleGreen = styled.div`
  position: absolute;
  animation: ${MovingGreen} ease-in-out alternate infinite 10s both;

  > div {
    background-color: var(--color-primary);
    width: 400px;
    height: 400px;
  }
`;

export const CircleBlue = styled.div`
  position: absolute;
  animation: ${MovingBlue} ease-in-out alternate infinite 10s both;

  > div {
    background-color: var(--color-secondary);
    width: 350px;
    height: 350px;
  }
`;

export const CircleRose = styled.div`
  position: absolute;
  animation: ${MovingRose} ease-in-out alternate infinite 10s both;

  > div {
    width: 500px;
    height: 500px;
    background-color: var(--color-rose);
  }
`;

export const CircleYellow = styled.div`
  position: absolute;
  animation: ${MovingYellow} ease-in-out alternate infinite 10s both;

  > div {
    background-color: var(--color-yellow-100);
  }
`;

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(50px);
`;

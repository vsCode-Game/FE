import {
  Circle,
  CircleBlue,
  CircleGreen,
  CircleRose,
  CircleYellow,
  Wrapper,
} from "./circleBackgroundStyle";

export default function CircleBackground() {
  return (
    <Wrapper>
      <CircleGreen>
        <Circle />
      </CircleGreen>
      <CircleBlue>
        <Circle />
      </CircleBlue>
      <CircleRose>
        <Circle />
      </CircleRose>
      <CircleYellow>
        <Circle />
      </CircleYellow>
    </Wrapper>
  );
}

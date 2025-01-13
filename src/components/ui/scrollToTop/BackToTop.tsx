import { Circle, ScrollToTopBox } from "./backToTopStyle";
import arrowTop from "../../../assets/images/icon_arrow_top.svg";
export default function BackToTop() {
  return (
    <ScrollToTopBox>
      <Circle>
        <img src={arrowTop} alt="backToTop"></img>
      </Circle>
    </ScrollToTopBox>
  );
}

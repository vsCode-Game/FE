import Lottie from "lottie-react";
import animationData from "./loading.json";
import { LoadingWrapper, LoadingBox, LoadingMessage } from "./loadingStyle";

export interface LoadingProps {
  overlay?: boolean;
}

function Loading({ overlay = false }: { overlay: boolean }) {
  console.log(overlay);

  return (
    <LoadingWrapper overlay={overlay}>
      <LoadingBox overlay={overlay}>
        <Lottie
          style={{ width: "150px", height: "150px" }}
          loop={true}
          animationData={animationData}
          autoPlay={true}
        />
        {overlay && <LoadingMessage>로딩중입니다 ... 🏃🏻‍♀️</LoadingMessage>}
      </LoadingBox>
    </LoadingWrapper>
  );
}

export default Loading;

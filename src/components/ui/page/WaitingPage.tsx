import ProfileCard from "../card/profileCard/ProfileCard";
import { ReactNode } from "react";
import ChattingBox from "../card/chatting/Chatting";
import { ChattingReadyDiv, PageBox } from "./waitingPageStyle";

export default function WaitingPage({ children }: { children: ReactNode }) {
  return (
    <PageBox>
      <ProfileCard>{children}</ProfileCard>
      <ChattingReadyDiv>
        <ChattingBox></ChattingBox>
        <ProfileCard>{children}</ProfileCard>
      </ChattingReadyDiv>
    </PageBox>
  );
}

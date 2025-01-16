import { Fragment } from "react/jsx-runtime";

import Profile from "../../../profile/Profile";
import Badge from "../../../badge/Badge";

interface IPlayerCard {
  nickname?: string;
  otherReady: boolean;
}

export default function OtherPlayerCard({ nickname, otherReady }: IPlayerCard) {
  return (
    <Fragment>
      <Profile nickname={nickname} />
      <Badge status={otherReady ? "ready" : "not Ready"} />
    </Fragment>
  );
}

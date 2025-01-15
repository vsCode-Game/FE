import { Fragment } from "react/jsx-runtime";
import Button from "../../../button/Button";
import Profile from "../../../profile/Profile";

export default function PlayerCard({
  nickname,
}: {
  nickname: string | undefined;
}) {
  return (
    <Fragment>
      <Profile nickname={nickname} />
      <Button type="button" bgcolor="blue" textcolor="black" size="sm">
        Ready
      </Button>
    </Fragment>
  );
}

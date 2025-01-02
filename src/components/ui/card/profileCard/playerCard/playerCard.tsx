import Button from "../../../button/Button";
import Profile from "../../../profile/Profile";
import ProfileCard from "../ProfileCard";

export default function PlayerCard() {
  return (
    <ProfileCard>
      <Profile nickname="플레이어" rank="78위" />
      <Button type="button" bgcolor="blue" textcolor="black" size="sm">
        Ready
      </Button>
    </ProfileCard>
  );
}

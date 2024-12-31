import { ProfileBox, Profile } from "./NickNameBoxStyle";
// const ProfileBox = styled.div`
//   display: flex;
//   line-height: 30px;
//   gap: 10px;
// `;
// const Profile = styled.div`
//   width: 30px;
//   position: relative;
//   border: 2px solid #dedfe0;
//   border-radius: 50%;
//   max-width: 100%;
//   overflow: hidden;
//   height: 30px;
//   object-fit: cover;
// `;
export default function Nickname() {
  return (
    <ProfileBox>
      <Profile></Profile>
      <div>드루와이키키</div>
    </ProfileBox>
  );
}

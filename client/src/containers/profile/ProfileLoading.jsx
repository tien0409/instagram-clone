import { Profile } from "../../components";

const ProfileLoading = () => {
  return (
    <>
      <Profile.HeadingWrap>
        <Profile.Loading width={150} height={150} circle={true} />
        <Profile.HeadingInfor>
          <Profile.HeadingUsernameWrap>
            <Profile.Loading width={150} height={20} />
          </Profile.HeadingUsernameWrap>
          <Profile.HeadingStatistics>
            <Profile.Loading width={350} height={20} />
          </Profile.HeadingStatistics>
          <Profile.HeadingFullName>
            <Profile.Loading width={150} height={20} />
          </Profile.HeadingFullName>
        </Profile.HeadingInfor>
      </Profile.HeadingWrap>

      <Profile.Separate></Profile.Separate>

      <Profile.PostList>
        {new Array(3).fill(0).map((_, index) => (
          <Profile.LoadingWrap key={index}>
            <Profile.Loading width={288} height={288} />
          </Profile.LoadingWrap>
        ))}
      </Profile.PostList>
    </>
  );
};

export default ProfileLoading;

import { Profile, Spinner } from "../../components";
import { useState } from "react";
import ProfileUploadAvatar from "./ProfileUploadAvatar";
import * as ROUTES from "../../constants/routes";
import { ListUserContainer } from "../";

const ProfileHeading = ({
  user,
  userInfoDetails,
  socket,
  isLoading,
  followed,
  setFollowed,
  numFollowers,
  setNumFollowers,
  numFollowing,
  setNumFollowing,
  loadingToggleFollow,
  setLoadingToggleFollow,
}) => {
  const [modal, setModal] = useState(false);
  const [modalFollower, setModalFollower] = useState(false);
  const [modalFollowing, setModalFollowing] = useState(false);

  const handleCreateConversation = () => {
    socket.emit("client-create-conversation", {
      user: user,
      usernameReq: userInfoDetails.username,
    });
  };

  const handleToggleFollow = () => {
    setLoadingToggleFollow(true);
    socket.emit(
      "client-toggle-follow",
      { user, userReq: userInfoDetails },
      () => {
        setFollowed(!followed);
        setLoadingToggleFollow(false);
      },
    );
  };

  return (
    <Profile.HeadingWrap>
      <Profile.HeadingAvatar
        cursor={user._id === userInfoDetails._id ? 1 : undefined}
        onClick={() => {
          if (user._id === userInfoDetails._id) {
            setModal(true);
          }
        }}
        src={userInfoDetails.avatar}
      />
      <ProfileUploadAvatar modal={modal} setModal={setModal} />
      <Profile.HeadingInfor>
        <Profile.HeadingUsernameWrap>
          <Profile.HeadingUsername>
            {userInfoDetails.username}
          </Profile.HeadingUsername>

          {user._id === userInfoDetails._id ? (
            <Profile.HeadingEdit to={`${ROUTES.SETTING}/edit`}>
              Edit Profile
            </Profile.HeadingEdit>
          ) : followed ? (
            <>
              <Profile.HeadingMessage onClick={handleCreateConversation}>
                {isLoading ? <Spinner size="sm" color="white" /> : "Message"}
              </Profile.HeadingMessage>
              <Profile.HeadingFollow onClick={handleToggleFollow}>
                {loadingToggleFollow ? (
                  <Spinner size="sm" color="white" />
                ) : followed ? (
                  "Unfollow"
                ) : (
                  "Follow"
                )}
              </Profile.HeadingFollow>
            </>
          ) : (
            <Profile.HeadingFollow onClick={handleToggleFollow}>
              {loadingToggleFollow ? (
                <Spinner size="sm" color="white" />
              ) : followed ? (
                "Unfollow"
              ) : (
                "Follow"
              )}
            </Profile.HeadingFollow>
          )}
        </Profile.HeadingUsernameWrap>
        <Profile.HeadingStatistics>
          <Profile.HeadingStatisticsWrap>
            <Profile.HeadingStatisticsNumber>
              {userInfoDetails.postsCreated}
            </Profile.HeadingStatisticsNumber>
            posts
          </Profile.HeadingStatisticsWrap>
          <Profile.HeadingStatisticsWrap
            cursor={user._id === userInfoDetails._id ? 1 : undefined}
            onClick={() => setModalFollower(true)}
          >
            <Profile.HeadingStatisticsNumber>
              {numFollowers}
            </Profile.HeadingStatisticsNumber>
            followers
          </Profile.HeadingStatisticsWrap>
          <ListUserContainer
            type="followers"
            modal={modalFollower}
            setModal={setModalFollower}
            userInfoDetails={userInfoDetails}
            setNumFollowers={setNumFollowers}
            setNumFollowing={setNumFollowing}
          />
          <Profile.HeadingStatisticsWrap
            cursor={user._id === userInfoDetails._id ? 1 : undefined}
            onClick={() => setModalFollowing(true)}
          >
            <Profile.HeadingStatisticsNumber>
              {numFollowing}
            </Profile.HeadingStatisticsNumber>
            following
          </Profile.HeadingStatisticsWrap>
          <ListUserContainer
            type="following"
            modal={modalFollowing}
            setModal={setModalFollowing}
            userInfoDetails={userInfoDetails}
            setNumFollowing={setNumFollowing}
            setNumFollowers={setNumFollowers}
          />
        </Profile.HeadingStatistics>
        <Profile.HeadingFullName>
          {userInfoDetails.fullName}
        </Profile.HeadingFullName>
      </Profile.HeadingInfor>
    </Profile.HeadingWrap>
  );
};

export default ProfileHeading;

import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../../components";
import { getUserDetails } from "../../actions/userAction";
import ProfileHeading from "./ProfileHeading";
import ProfilePostList from "./ProfilePostList";
import ProfileLoading from "./ProfileLoading";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfoDetails, isLoading: isLoadingUserDetails, err } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();
  const { username } = useParams();

  const [followed, setFollowed] = useState(false);
  const [numFollowers, setNumFollowers] = useState(0);
  const [numFollowing, setNumFollowing] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [posts, setPosts] = useState(null);
  const [loadingToggleFollow, setLoadingToggleFollow] = useState(false);

  // loi dispatch 2 lan => chua sua
  useEffect(() => {
    if (!user || !posts) {
      socket.emit("client-get-user-logged-in", userInfo._id);
      socket.emit("client-get-posts-created", username);
      setUserLoading(true);
    } else if (userInfoDetails && user) {
      setFollowed(!!user.following.find((u) => u._id === userInfoDetails._id));
      setNumFollowers(userInfoDetails.followers.length);
      setNumFollowing(userInfoDetails.following.length);
    }

    // eslint-disable-next-line
  }, [dispatch, username, user, userInfoDetails]);

  useEffect(() => {
    dispatch(getUserDetails(username));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    socket.on("server-creating-conversation", () => {
      setIsLoading(true);
    });

    socket.on("server-send-user-logged-in", (user) => {
      setUser(user);
      setUserLoading(false);
    });

    socket.on("server-send-posts-created", (posts) => {
      setPosts(posts);
    });

    socket.on("server-toggle-follow", (data) => {
      // really ==> all user see
      setNumFollowers(data.numFollowers);
      setNumFollowing(data.numFollowing);
    });

    socket.on("server-create-conversation", ({ conversationId }) => {
      history.push(`/inbox/${conversationId}`);
    });

    return () => {
      socket.off("server-creating-conversation");
      socket.off("server-send-user-logged-in");
      socket.off("server-send-posts-created");
      socket.off("server-toggle-follow");
      socket.off("server-create-conversation");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Profile>
      {isLoadingUserDetails || userLoading || !posts ? (
        <ProfileLoading />
      ) : userInfoDetails && posts && user ? (
        <>
          <ProfileHeading
            user={user}
            setUser={setUser}
            userInfoDetails={userInfoDetails}
            socket={socket}
            isLoading={isLoading}
            setFollowed={setFollowed}
            followed={followed}
            numFollowers={numFollowers}
            setNumFollowers={setNumFollowers}
            numFollowing={numFollowing}
            setNumFollowing={setNumFollowing}
            loadingToggleFollow={loadingToggleFollow}
            setLoadingToggleFollow={setLoadingToggleFollow}
          />
          <Profile.Separate></Profile.Separate>

          {/* post */}
          <ProfilePostList posts={posts} />
        </>
      ) : (
        <Profile.Error>{err}</Profile.Error>
      )}
    </Profile>
  );
};

export default ProfileContainer;

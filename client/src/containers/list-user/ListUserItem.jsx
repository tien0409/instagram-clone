import { ListUser, Spinner } from "../../components";

const ListUserItem = ({
  user,
  socket,
  type,
  userInfo,
  userInfoDetails,
  isLoading,
}) => {
  const handleForcedUnfollow = (id) => {
    socket.emit("client-user-forced-unfollow", id);
  };

  const handleUnfollow = (id) => {
    socket.emit("client-user-unfollow", id);
  };

  return (
    <ListUser.User key={user._id}>
      <ListUser.Wrap>
        <ListUser.Link to={user.username}>
          <ListUser.Avatar src={user.avatar} />
        </ListUser.Link>
        <ListUser.Info>
          <ListUser.Link to={user.username}>
            <ListUser.Name>{user.username}</ListUser.Name>
          </ListUser.Link>
          <ListUser.FullName>{user.fullName}</ListUser.FullName>
        </ListUser.Info>
      </ListUser.Wrap>
      {type === "followers" ? (
        <ListUser.Remove
          hidden={userInfo._id !== userInfoDetails._id}
          onClick={() => handleForcedUnfollow(user._id)}
        >
          {isLoading ? <Spinner size="sm" color="black" /> : "Remove"}
        </ListUser.Remove>
      ) : (
        <ListUser.Remove
          hidden={userInfo._id !== userInfoDetails._id}
          onClick={() => handleUnfollow(user._id)}
        >
          {isLoading ? <Spinner size="sm" color="black" /> : "Unfollow"}
        </ListUser.Remove>
      )}
    </ListUser.User>
  );
};

export default ListUserItem;

import { ListUser } from "../../components";
import ListUserItem from "./ListUserItem";

const ListUserList = ({
  socket,
  userList,
  userInfo,
  userInfoDetails,
  type,
  isLoading,
  setIsLoading,
  userSelect,
  setUserSelect,
  userListFollowing,
}) => {
  return (
    <ListUser.List>
      {userList.map((user) => (
        <ListUserItem
          key={user._id}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          user={user}
          type={type}
          userInfo={userInfo}
          userInfoDetails={userInfoDetails}
          socket={socket}
          userSelect={userSelect}
          setUserSelect={setUserSelect}
          userList={userList}
        />
      ))}
    </ListUser.List>
  );
};

export default ListUserList;

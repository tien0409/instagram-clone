import { Modal, ListUser } from "../../components";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../actions/userAction";
import { useState } from "react";
import ListUserList from "./ListUserList";

const ListUserContainer = ({
  type,
  modal,
  setModal,
  userInfoDetails,
  setNumFollowers,
  setNumFollowing,
}) => {
  const dispatch = useDispatch();

  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { username } = useParams();

  const [userList, setUserList] = useState(userInfoDetails.followers);
  const [userListFollowing, setUserListFollowing] = useState(
    userInfoDetails.following,
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (username !== userInfoDetails.username) {
      dispatch(getUserDetails(username));
      socket.emit("client-get-user-logged-in", userInfo._id);
      socket.emit("client-get-posts-created", username);
    }
  }, [username, userInfoDetails, dispatch, socket, userInfo._id]);

  useEffect(() => {
    socket.on("server-user-forced-unfollow", (data) => {
      const userListNew = userList.filter((user) => user._id !== data._id);
      setUserList(userListNew);
      setNumFollowers(data.numFollowers);
    });

    socket.on("server-user-unfollow", (data) => {
      const userListNew = userListFollowing.filter(
        (user) => user._id !== data._id,
      );
      setUserListFollowing(userListNew);
      setNumFollowing(data.numFollowing);
    });

    return () => {
      socket.off("server-user-forced-unfollow");
      socket.off("server-user-unfollow");
      socket.off("server-sending-user-unfollow");
      socket.off("server-sending-user-forced-unfollow");
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Modal modal={modal} onClick={() => setModal(false)}></Modal>
      <Modal.Body modal={modal}>
        <ListUser>
          <ListUser.Head>
            {type === "followers" ? "Followers" : "Following"}
          </ListUser.Head>
          <ListUser.Close onClick={() => setModal(false)}>
            <AiOutlineClose />
          </ListUser.Close>
          {type === "followers" ? (
            <ListUserList
              type={type}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              socket={socket}
              userList={userList}
              setNumFollowing={setNumFollowing}
              setNumFollowers={setNumFollowers}
              userInfo={userInfo}
              userInfoDetails={userInfoDetails}
            />
          ) : (
            <ListUserList
              type={type}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              socket={socket}
              userList={userListFollowing}
              setNumFollowing={setNumFollowing}
              setNumFollowers={setNumFollowers}
              userInfo={userInfo}
              userInfoDetails={userInfoDetails}
            />
          )}
        </ListUser>
      </Modal.Body>
    </>
  );
};

export default ListUserContainer;

import { Header } from "../../components";
import {
  AiFillHome,
  AiOutlineHome,
  // AiFillCompass,
  // AiOutlineCompass,
  // AiFillHeart,
  // AiOutlineHeart,
  AiFillMessage,
  AiOutlineMessage,
} from "react-icons/ai";
import HeaderMoreMenu from "./HeaderMoreMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HeaderListNavigate = ({ home, inbox, profile, activity, explore }) => {
  const socketConnect = useSelector((state) => state.socketConnect);
  const { socket } = socketConnect;

  const [numberUnreadMessage, setNumberUnreadMessage] = useState(0);

  useEffect(() => {
    socket.emit("client-get-number-unread-message");
    socket.on("server-send-number-unread-message", (num) => {
      setNumberUnreadMessage(num);
    });

    return () => {
      socket.off("server-send-number-unread-message");
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Header.NavList>
      <Header.NavItem>
        <Header.NavLink to="/">
          <Header.NavIcon>
            {home ? <AiFillHome /> : <AiOutlineHome />}
          </Header.NavIcon>
        </Header.NavLink>
      </Header.NavItem>

      {/* Message */}
      <Header.NavItem>
        <Header.NavLink to="/inbox">
          <Header.NavIcon>
            {inbox ? <AiFillMessage /> : <AiOutlineMessage />}
          </Header.NavIcon>

          {/* Number unread message */}
          {numberUnreadMessage > 0 && (
            <Header.NavMessageUnread>
              <Header.NavNumberMessageUnread>
                {numberUnreadMessage}
              </Header.NavNumberMessageUnread>
            </Header.NavMessageUnread>
          )}
        </Header.NavLink>
      </Header.NavItem>

      {/* Explore */}
      {/* <Header.NavItem> */}
      {/*   <Header.NavLink to="/explore"> */}
      {/*     <Header.NavIcon> */}
      {/*       {explore ? <AiFillCompass /> : <AiOutlineCompass />} */}
      {/*     </Header.NavIcon> */}
      {/*   </Header.NavLink> */}
      {/* </Header.NavItem> */}

      {/* Activity */}
      {/* <Header.NavItem> */}
      {/*   <Header.NavLink to="/"> */}
      {/*     <Header.NavIcon> */}
      {/*       {activity ? <AiFillHeart /> : <AiOutlineHeart />} */}
      {/*     </Header.NavIcon> */}
      {/*   </Header.NavLink> */}
      {/* </Header.NavItem> */}

      {/* Avatar - More menu */}
      <HeaderMoreMenu />
    </Header.NavList>
  );
};

export default HeaderListNavigate;

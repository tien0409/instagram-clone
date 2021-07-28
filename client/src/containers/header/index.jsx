import { Header } from "../../components";
import { useDispatch } from "react-redux";
import * as ROUTES from "../../constants/routes";
import { getAllUserSuggestion } from "../../actions/userAction";
import { getAllPost } from "../../actions/postAction";
import HeaderInputSearch from "./HeaderInputSearch";
import HeaderListNavigate from "./HeaderMessageItem";
import { useLocation } from "react-router-dom";

const HeaderContainer = ({
  home = false,
  inbox = false,
  profile = false,
  activity = false,
  explore = false,
}) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setInterval(() => {
      if (!window.pageYOffset) {
        if (pathname === ROUTES.HOME) {
          dispatch(getAllPost());
          dispatch(getAllUserSuggestion());
        }
        clearInterval(timer);
      }
    }, 500);
  };

  return (
    <Header>
      <Header.Navbar>
        <Header.NavLink to={`${ROUTES.HOME}`}>
          <Header.NavbarLogo
            alt="Instagram logo"
            onClick={handleBrandClick}
            src="/images/logo.png"
          />
        </Header.NavLink>

        {/* input search */}
        <HeaderInputSearch />

        {/* list navigation */}
        <HeaderListNavigate
          home={home}
          inbox={inbox}
          profile={profile}
          activity={activity}
          explore={explore}
        />
      </Header.Navbar>
    </Header>
  );
};

export default HeaderContainer;

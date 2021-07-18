import { Setting } from "../../components";
import { useRouteMatch, Route } from "react-router-dom";
import SettingSidebar from "./SettingSidebar";
import SettingEdit from "./SettingEdit";
import SettingChangePassword from "./SettingChangePassword";

const SettingContainer = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Setting>
        <SettingSidebar />
        <Route path={`${path}/edit`}>
          <SettingEdit />
        </Route>
        <Route path={`${path}/password/change`}>
          <SettingChangePassword />
        </Route>
      </Setting>
    </>
  );
};

export default SettingContainer;

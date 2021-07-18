import { Setting } from "../../components";
import { useState } from "react";

const SettingSidebar = () => {
  const [edit, setEdit] = useState(true);
  const [changePassword, setChangePassword] = useState(false);

  return (
    <Setting.Sidebar>
      <Setting.SidebarList>
        <Setting.Link to="/setting/edit">
          <Setting.SidebarItem
            onClick={() => {
              setEdit(true);
              setChangePassword(false);
            }}
            active={edit}
          >
            Edit Profile
          </Setting.SidebarItem>
        </Setting.Link>
        <Setting.Link to="/setting/password/change">
          <Setting.SidebarItem
            onClick={() => {
              setChangePassword(true);
              setEdit(false);
            }}
            active={changePassword}
          >
            Change Password
          </Setting.SidebarItem>
        </Setting.Link>
      </Setting.SidebarList>
    </Setting.Sidebar>
  );
};

export default SettingSidebar;

import { Container, Link } from "./styles/setting";
import { Sidebar, SidebarList, SidebarItem } from "./styles/sidebar";
import {
  Edit,
  EditGroup,
  EditWrap,
  EditAvatarWrap,
  EditAvatar,
  EditInput,
  EditButton,
  EditText,
  EditDesc,
  EditInputWrap,
  EditPopup,
  EditHead,
  EditList,
  EditItem,
  EditLabel,
  EditNotify,
} from "./styles/edit";

const Setting = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Setting.Link = function SettingLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

// Sidebar
Setting.Sidebar = function SettingSidebar({ children, ...restProps }) {
  return <Sidebar {...restProps}>{children}</Sidebar>;
};

Setting.SidebarList = function SettingSidebarList({ children, ...restProps }) {
  return <SidebarList {...restProps}>{children}</SidebarList>;
};

Setting.SidebarItem = function SettingSidebarItem({ children, ...restProps }) {
  return <SidebarItem {...restProps}>{children}</SidebarItem>;
};

// Edit
Setting.Edit = function SettingEdit({ children, ...restProps }) {
  return <Edit {...restProps}>{children}</Edit>;
};

Setting.EditWrap = function SettingEditWrap({ children, ...restProps }) {
  return <EditWrap {...restProps}>{children}</EditWrap>;
};

Setting.EditGroup = function SettingEditGroup({ children, ...restProps }) {
  return <EditGroup {...restProps}>{children}</EditGroup>;
};

Setting.EditAvatar = function SettingEditAvatar({ src, ...restProps }) {
  return <EditAvatar src={src} {...restProps} />;
};

Setting.EditAvatarWrap = function SettingEditAvatarWrap({
  children,
  ...restProps
}) {
  return <EditAvatarWrap {...restProps}>{children}</EditAvatarWrap>;
};

Setting.EditInput = function SettingEditInput({ ...restProps }) {
  return <EditInput {...restProps} />;
};

Setting.EditText = function SettingEditText({ children, ...restProps }) {
  return <EditText {...restProps}>{children}</EditText>;
};

Setting.EditButton = function SettingEditButton({ children, ...restProps }) {
  return <EditButton {...restProps}>{children}</EditButton>;
};

Setting.EditDesc = function SettingEditDesc({ children, ...restProps }) {
  return <EditDesc {...restProps}>{children}</EditDesc>;
};

Setting.EditInputWrap = function SettingEditInputWrap({
  children,
  ...restProps
}) {
  return <EditInputWrap {...restProps}>{children}</EditInputWrap>;
};

Setting.EditPopup = function SettingEditPopup({ children, ...restProps }) {
  return <EditPopup {...restProps}>{children}</EditPopup>;
};

Setting.EditHead = function SettingEditHead({ children, ...restProps }) {
  return <EditHead {...restProps}>{children}</EditHead>;
};

Setting.EditList = function SettingEditList({ children, ...restProps }) {
  return <EditList {...restProps}>{children}</EditList>;
};

Setting.EditItem = function SettingEditItem({ children, ...restProps }) {
  return <EditItem {...restProps}>{children}</EditItem>;
};

Setting.EditLabel = function SettingEditLabel({ children, ...restProps }) {
  return <EditLabel {...restProps}>{children}</EditLabel>;
};

Setting.EditNotify = function SettingEditNotify({ children, ...restProps }) {
  return <EditNotify {...restProps}>{children}</EditNotify>;
};

export default Setting;

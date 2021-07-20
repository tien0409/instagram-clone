import { Header } from "../../components";

const HeaderSearchItem = ({
  setVisible,
  history,
  user,
  setHistory,
  setSearch,
}) => {
  const handleSaveHistory = (user) => {
    setVisible(false);
    setSearch("");
    const newHistory = [...history];

    const index = history.findIndex((u) => u.username === user.username);

    // contains user
    if (index >= 0) {
      newHistory[index] = {
        avatar: user.avatar,
        username: user.username,
        fullName: user.fullName,
        _id: user._id,
      };
    } else {
      newHistory.push({
        _id: user._id,
        avatar: user.avatar,
        username: user.username,
        fullName: user.fullName,
      });
    }

    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <Header.NavSearchItem
      onClick={() => handleSaveHistory(user)}
      to={`/${user.username}`}
    >
      <Header.NavSearchInforWrap>
        <Header.NavSearchAvatar src={user.avatar} />
        <Header.NavSearchNameWrap>
          <Header.NavSearchName>{user.username}</Header.NavSearchName>
          <Header.NavSearchFullName>{user.fullName}</Header.NavSearchFullName>
        </Header.NavSearchNameWrap>
      </Header.NavSearchInforWrap>
    </Header.NavSearchItem>
  );
};

export default HeaderSearchItem;

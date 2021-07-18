import React from "react";
import { Header, Spinner } from "../../components";
import HeaderSearchItem from "./HeaderSearchItem";

const HeaderSearchList = ({
  history,
  users,
  setVisible,
  setSearch,
  setHistory,
  isLoading,
}) => {
  return (
    <Header.NavSearchList
      noUser={(!history || history.length === 0) && users.length === 0}
    >
      {isLoading ? (
        <Spinner size="sm" color="black" />
      ) : (
        users &&
        users.map((user) => (
          <HeaderSearchItem
            key={user._id}
            user={user}
            setVisible={setVisible}
            setSearch={setSearch}
            history={history}
            setHistory={setHistory}
          />
        ))
      )}
      <Header.NavSearchNoUser
        history={
          (history && history.length > 0) || users.length > 0 || isLoading
        }
      >
        No recent searches.
      </Header.NavSearchNoUser>
    </Header.NavSearchList>
  );
};

export default HeaderSearchList;

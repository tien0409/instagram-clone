import React from "react";
import debounce from "lodash.debounce";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components";
import { findUser } from "../../actions/userAction";
import HeaderSearchList from "./HeaderSearchList";

const HeaderInputSearch = () => {
  const dispatch = useDispatch();

  const userFind = useSelector((state) => state.userFind);
  const { usersFind, isLoading } = userFind;

  const wrapRef = useRef(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState(
    localStorage.getItem("history")
      ? JSON.parse(localStorage.getItem("history"))
      : [],
  );
  const [history, setHistory] = useState(
    localStorage.getItem("history")
      ? JSON.parse(localStorage.getItem("history"))
      : [],
  );

  const debounceSearch = useRef(
    debounce((nextValue) => {
      if (nextValue !== "") {
        dispatch(findUser(nextValue));
      } else {
        setUsers(history);
      }
    }, 1000),
  ).current;

  useEffect(() => {
    if (usersFind) {
      setUsers(usersFind);
    }
  }, [usersFind]);

  useEffect(() => {
    const handleOpenSearch = (e) => {
      if (!wrapRef.current?.contains(e.target)) {
        setVisible(false);
      }
    };

    window.addEventListener("click", handleOpenSearch);

    return () => {
      window.removeEventListener("click", handleOpenSearch);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setUsers(history);
    }
    setVisible(true);
    setSearch(e.target.value);
    debounceSearch(e.target.value);
  };

  const handleClearHistory = () => {
    setHistory([]);
    setUsers([]);
    localStorage.removeItem("history");
  };

  const handleClickInput = (e) => {
    setVisible(true);
    if (e.target.value === "") {
      setUsers(history);
    }
  };

  return (
    <Header.NavInputWrap ref={wrapRef}>
      <Header.NavbarInput
        value={search}
        onClick={handleClickInput}
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
      />

      {/* search */}
      <Header.NavSearch visible={visible}>
        <Header.NavSearchHeading>
          <Header.NavSearchHeadingText>Recent</Header.NavSearchHeadingText>
          <Header.NavSearchHeadingClear
            noUser={history && history.length === 0}
            onClick={handleClearHistory}
          >
            Clear All
          </Header.NavSearchHeadingClear>
        </Header.NavSearchHeading>

        {/* list searched user */}
        <HeaderSearchList
          history={history}
          setVisible={setVisible}
          setSearch={setSearch}
          setHistory={setHistory}
          users={users}
          isLoading={isLoading}
        />
      </Header.NavSearch>
    </Header.NavInputWrap>
  );
};

export default HeaderInputSearch;

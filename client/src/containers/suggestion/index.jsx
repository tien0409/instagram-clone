import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserSuggestion } from "../../actions/userAction";
import { Suggestion } from "../../components";
import SuggestionList from "./SuggestionList";
import { USER_SUGGESTED_RESET } from "../../constants/userConstants";

const SuggestionContainer = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userSuggested = useSelector((state) => state.userSuggested);
  const { listSuggested, isLoading, err } = userSuggested;

  useEffect(() => {
    if (!listSuggested) {
      dispatch(getAllUserSuggestion());
    }
    return () => {
      dispatch({ type: USER_SUGGESTED_RESET });
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <Suggestion>
      <Suggestion.MyInfor>
        <Suggestion.Link to={userInfo.username}>
          <Suggestion.MyAvatar src={userInfo.avatar} />
        </Suggestion.Link>
        <Suggestion.MyNameWrap>
          <Suggestion.Link to={userInfo.username}>
            <Suggestion.MyName>{userInfo.username}</Suggestion.MyName>
          </Suggestion.Link>
          <Suggestion.MyFullName>{userInfo.fullName}</Suggestion.MyFullName>
        </Suggestion.MyNameWrap>
      </Suggestion.MyInfor>
      <Suggestion.Heading>
        <Suggestion.HeadingText>Suggestions For You</Suggestion.HeadingText>
        <Suggestion.Link to="/">
          <Suggestion.HeadingSeeAll>See All</Suggestion.HeadingSeeAll>
        </Suggestion.Link>
      </Suggestion.Heading>
      <SuggestionList
        listSuggested={listSuggested}
        isLoading={isLoading}
        userInfo={userInfo}
        err={err}
        dispatch={dispatch}
      />
    </Suggestion>
  );
};

export default SuggestionContainer;

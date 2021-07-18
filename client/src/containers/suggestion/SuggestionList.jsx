import { Suggestion } from "../../components";
import SuggestionItem from "./SuggestionItem";
import SuggestionLoading from "./SuggestionLoading";

const SuggestionList = ({
  userInfo,
  listSuggested,
  err,
  isLoading,
  dispatch,
}) => {
  return (
    <Suggestion.SuggestedList>
      {isLoading ? (
        new Array(4)
          .fill(0)
          .map((_, index) => <SuggestionLoading key={index} />)
      ) : err ? (
        <div>{err}</div>
      ) : listSuggested?.length > 0 ? (
        listSuggested.map(
          (user, index) =>
            index < 4 && (
              <SuggestionItem
                key={user._id}
                user={user}
                userInfo={userInfo}
                dispatch={dispatch}
                index={index}
                listSuggested={listSuggested}
              />
            ),
        )
      ) : null}
    </Suggestion.SuggestedList>
  );
};

export default SuggestionList;

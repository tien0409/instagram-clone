import { Suggestion } from "../../components";
import { followUser } from "../../actions/userAction";
import { useState } from "react";

const SuggestionItem = ({ user, userInfo, dispatch, index, listSuggested }) => {
  const [followed, setFollowed] = useState(false);

  const handleToggleFollow = (username) => {
    dispatch(followUser(username));
    setFollowed(!followed);
  };

  return (
    <Suggestion.SuggestedItem>
      <Suggestion.SuggestedWrapInfor>
        <Suggestion.Link to={`/${user.username}`}>
          <Suggestion.SuggestedAvatar src={user.avatar} />
        </Suggestion.Link>
        <Suggestion.SuggestedDetails>
          <Suggestion.Link to={`/${user.username}`}>
            <Suggestion.SuggestedName>{user.username}</Suggestion.SuggestedName>
          </Suggestion.Link>
          <Suggestion.SuggestedDesc>
            {userInfo.followers.includes(user._id)
              ? "Follows you"
              : "Suggested for  you"}
          </Suggestion.SuggestedDesc>
        </Suggestion.SuggestedDetails>
      </Suggestion.SuggestedWrapInfor>
      <Suggestion.SuggestedFollow
        onClick={() => handleToggleFollow(user.username, index)}
      >
        {followed ? "Unfollow" : "Follow"}
      </Suggestion.SuggestedFollow>
    </Suggestion.SuggestedItem>
  );
};

export default SuggestionItem;

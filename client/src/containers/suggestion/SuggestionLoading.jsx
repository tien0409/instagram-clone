import { Suggestion } from "../../components";

const SuggestionLoading = () => {
  return (
    <Suggestion.SuggestedItem>
      <Suggestion.SuggestedWrapInfor>
        <Suggestion.Loading width={34} height={34} circle={true} />
        <Suggestion.SuggestedDetails>
          <Suggestion.SuggestedName>
            <Suggestion.Loading width={200} height={8} />
          </Suggestion.SuggestedName>
          <Suggestion.SuggestedDesc>
            <Suggestion.Loading width={100} height={8} />
          </Suggestion.SuggestedDesc>
        </Suggestion.SuggestedDetails>
      </Suggestion.SuggestedWrapInfor>
    </Suggestion.SuggestedItem>
  );
};

export default SuggestionLoading;

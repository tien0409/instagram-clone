import {
  HeaderContainer,
  PostListContainer,
  CreatePostContainer,
  SuggestionContainer,
} from "../containers";
import { Container } from "../globalStyles";

const HomePage = () => {
  return (
    <>
      <HeaderContainer home="true" />
      <Container>
        <div
          style={{
            // position: "relative",
            maxWidth: "var(--home-main-width)",
            width: "100%",
          }}
        >
          {/* <StoryContainer /> */}
          <CreatePostContainer />
          <PostListContainer />
        </div>
        <SuggestionContainer />
      </Container>
    </>
  );
};

export default HomePage;

import {
  Container,
  Loading,
  MyInfor,
  MyAvatar,
  MyName,
  MyFullName,
  MyNameWrap,
  Link,
  Heading,
  HeadingText,
  HeadingSeeAll,
  SuggestedList,
  SuggestedItem,
  SuggestedWrapInfor,
  SuggestedDetails,
  SuggestedAvatar,
  SuggestedName,
  SuggestedDesc,
  SuggestedFollow,
} from "./styles/suggestion";

const Suggestion = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Suggestion.Loading = function SuggestionLoading({ children, ...restProps }) {
  return <Loading {...restProps}>{children}</Loading>;
};

Suggestion.MyInfor = function SuggestionMyInfor({ children, ...restProps }) {
  return <MyInfor {...restProps}>{children}</MyInfor>;
};

Suggestion.MyAvatar = function SuggestionMyAvatar({ src, ...restProps }) {
  return <MyAvatar src={src} {...restProps} />;
};

Suggestion.MyNameWrap = function SuggestionMyNameWrap({
  children,
  ...restProps
}) {
  return <MyNameWrap {...restProps}>{children}</MyNameWrap>;
};

Suggestion.MyName = function SuggestionMyName({ children, ...restProps }) {
  return <MyName {...restProps}>{children}</MyName>;
};

Suggestion.MyFullName = function SuggestionMyFullName({
  children,
  ...restProps
}) {
  return <MyFullName {...restProps}>{children}</MyFullName>;
};

Suggestion.Link = function SuggestionLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Suggestion.Heading = function SuggestionHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Suggestion.HeadingText = function SuggestionHeadingText({
  children,
  ...restProps
}) {
  return <HeadingText {...restProps}>{children}</HeadingText>;
};

Suggestion.HeadingSeeAll = function SuggestionHeadingSeeAll({
  children,
  ...restProps
}) {
  return <HeadingSeeAll {...restProps}>{children}</HeadingSeeAll>;
};

Suggestion.SuggestedList = function SuggestionSuggestedList({
  children,
  ...restProps
}) {
  return <SuggestedList {...restProps}>{children}</SuggestedList>;
};

Suggestion.SuggestedItem = function SuggestionSuggestedItem({
  children,
  ...restProps
}) {
  return <SuggestedItem {...restProps}>{children}</SuggestedItem>;
};

Suggestion.SuggestedWrapInfor = function SuggestionSuggestedWrapInfor({
  children,
  ...restProps
}) {
  return <SuggestedWrapInfor {...restProps}>{children}</SuggestedWrapInfor>;
};

Suggestion.SuggestedAvatar = function SuggestionSuggestedAvatar({
  src,
  ...restProps
}) {
  return <SuggestedAvatar src={src} {...restProps} />;
};

Suggestion.SuggestedDetails = function SuggestionSuggestedDetails({
  children,
  ...restProps
}) {
  return <SuggestedDetails {...restProps}>{children}</SuggestedDetails>;
};

Suggestion.SuggestedName = function SuggestionSuggestedName({
  children,
  ...restProps
}) {
  return <SuggestedName {...restProps}>{children}</SuggestedName>;
};

Suggestion.SuggestedDesc = function SuggestionSuggestedDesc({
  children,
  ...restProps
}) {
  return <SuggestedDesc {...restProps}>{children}</SuggestedDesc>;
};

Suggestion.SuggestedFollow = function SuggestionSuggestedFollow({
  children,
  ...restProps
}) {
  return <SuggestedFollow {...restProps}>{children}</SuggestedFollow>;
};

export default Suggestion;

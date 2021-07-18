import { createRef, useState } from "react";
import { Story } from "../components";

const StoryContainer = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isBetween, setIsBetween] = useState(false);

  const storyRef = createRef();

  const handleScrollLeft = () => {
    console.dir(storyRef.current);
    storyRef.current.scrollLeft += 300;
  };

  const handleScrollRight = () => {
    storyRef.current.scrollLeft -= 300;
  };

  const handleScroll = ({ target }) => {
    console.log(target.scrollLeft);
    if (target.scrollLeft === 0) {
      setIsBetween(false);
      setIsFirst(true);
      setIsLast(false);
    } else {
      // number story - 7.5 * width per story
      if (target.scrollLeft >= 3.5 * 81) {
        setIsLast(true);
        setIsFirst(false);
        setIsBetween(false);
      } else if (target.scrollLeft > 0) {
        setIsBetween(true);
        setIsFirst(false);
        setIsLast(false);
      }
    }
  };

  return (
    <Story>
      <Story.Next
        onClick={handleScrollLeft}
        next={isFirst || isBetween}
      ></Story.Next>
      <Story.Prev
        onClick={handleScrollRight}
        prev={isLast || isBetween}
      ></Story.Prev>
      <Story.PersonList onScroll={handleScroll} ref={storyRef}>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
        <Story.Person>
          <Story.AvatarWrap>
            <Story.Avatar src="/images/avatar.jpg" />
          </Story.AvatarWrap>
          <Story.Name>Stone</Story.Name>
        </Story.Person>
      </Story.PersonList>
    </Story>
  );
};

export default StoryContainer;

import { CreatePost, Modal } from "../../components";
import { ImCancelCircle } from "react-icons/im";
import { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreatePostView = lazy(() => import("./CreatePostView"));
const CreatePostBody = lazy(() => import("./CreatePostBody"));

const CreatePostContainer = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [modal, setModal] = useState(false);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const closeModel = (e) => {
      // escape
      if (e.keyCode === 27) {
        setModal(false);
      }
    };

    window.addEventListener("keydown", closeModel, { passive: true });

    return () => {
      window.removeEventListener("keydown", closeModel, { passive: true });
    };
  }, []);

  return (
    <>
      <CreatePostView
        userInfo={userInfo}
        caption={caption}
        setModal={setModal}
        setCaption={setCaption}
      />
      <Modal.Body modal={modal}>
        <CreatePost>
          <CreatePost.Head>
            <CreatePost.HeadTitle>Create Post</CreatePost.HeadTitle>
            <CreatePost.CloseButton onClick={() => setModal(false)}>
              <ImCancelCircle />
            </CreatePost.CloseButton>
          </CreatePost.Head>
          <CreatePostBody
            userInfo={userInfo}
            caption={caption}
            setCaption={setCaption}
            modal={modal}
            setModal={setModal}
          />
        </CreatePost>
      </Modal.Body>
      <Modal modal={modal} onClick={() => setModal(false)}></Modal>
    </>
  );
};

export default CreatePostContainer;

import { Modal, Setting } from "../../components";

const SettingGender = ({ gender, setGender, modal, setModal }) => {
  return (
    <>
      <Modal onClick={() => setModal(false)} modal={modal}></Modal>
      <Modal.Body modal={modal}>
        <Setting.EditPopup>
          <Setting.EditHead>Gender</Setting.EditHead>
          <Setting.EditList>
            <Setting.EditItem>
              <Setting.EditInput
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                popup
                id="male"
                type="radio"
                value="Male"
                name="gender"
              />
              <Setting.EditLabel htmlFor="male">Male</Setting.EditLabel>
            </Setting.EditItem>
            <Setting.EditItem>
              <Setting.EditInput
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                popup
                id="female"
                type="radio"
                value="Female"
                name="gender"
              />
              <Setting.EditLabel htmlFor="female">Female</Setting.EditLabel>
            </Setting.EditItem>
            <Setting.EditItem>
              <Setting.EditInput
                checked={gender === "Not"}
                onChange={(e) => setGender(e.target.value)}
                popup
                id="not"
                type="radio"
                value="Not"
                name="gender"
              />
              <Setting.EditLabel htmlFor="not">Not</Setting.EditLabel>
            </Setting.EditItem>
          </Setting.EditList>
          <Setting.EditButton onClick={() => setModal(false)}>
            DONE
          </Setting.EditButton>
        </Setting.EditPopup>
      </Modal.Body>
    </>
  );
};

export default SettingGender;

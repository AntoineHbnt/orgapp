import React, { useState } from "react";
import {
  Form,
  TextArea,
  Row,
  TextContainer,
} from "./AddCardButton.styles";
import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../features/tasks/tasksLists/tasksListsSlice";

const AddCardButton = ({ listId }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: listId, task: { label } }));
    setLabel(() => "")
  };

  return isFocus ? (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <TextContainer>
        <TextArea value={label} onChange={(e) => setLabel(e.target.value)} />
      </TextContainer>
      <Row>
        <Button label="Ajouter une carte" type={"submit"} />
        <Button
          label="Annuler"
          style="secondary"
          onClick={() => setIsFocus(() => false)}
        />
      </Row>
    </Form>
  ) : (
    <Button
      css={{ padding: "$2", width: "100%" }}
      style="secondary"
      label="Ajouter une carte"
      onClick={() => setIsFocus(() => true)}
    />
  );
};

export default AddCardButton;

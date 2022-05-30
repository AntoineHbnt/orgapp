import React, { useEffect, useState } from "react";
import {
  Form,
  TextArea,
  Row,
  TextContainer,
  Container,
} from "./AddCardButton.styles";

import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import { AddCrossIcon } from "../../atoms/icons/AddCross";

const AddCardButton = ({ listId }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();
  const list = document.getElementById(listId);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: listId, task: { label } }));
    setLabel(() => "");
  };

  const buttonStyle = {
    border: "0",
    opacity: '0',
    lineHeight: '$14',
    padding: "$4 $8",
    fontSize: "$12",
  };

  const AddButton = () => (
    <Button
      css={buttonStyle}
      label="Ajouter une carte"
      onClick={() => setIsFocus(() => true)}
      icon={<AddCrossIcon />}
    />
  );

  const FormContainer = () => (
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
  );

  return (
    <Container id={listId} className={isFocus ? "form" : "button"}>
      {isFocus ? <FormContainer /> : <AddButton />}
    </Container>
  );
};

export default AddCardButton;

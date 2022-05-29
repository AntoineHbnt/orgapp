import React, { useState } from "react";
import { Form, TextArea, Row, TextContainer } from "./AddCardButton.styles";

import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import { AddCrossIcon } from "../../atoms/icons/AddCross";

const AddCardButton = ({ listId }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: listId, task: { label } }));
    setLabel(() => "");
  };

  const AddButton = () => (
    <Button
      css={{ padding: "$4 $8", fontSize: '$12'}}
      label="Ajouter une carte"
      onClick={() => setIsFocus(() => true)}
      icon={<AddCrossIcon/>}
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

  return isFocus ? <FormContainer /> : <AddButton />;
};

export default AddCardButton;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import { ButtonRow, Container, Form, InputContainer } from "./AddListButton.styles";
import { addList } from "../../../../features/tasks/tasksLists/tasksListsSlice";

const AddListButton = () => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState("Saisissez le titre de la liste");

  const buttonStyle = {
    width: "100%",
    padding: "$8 $16",
    border: "0",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ label }));
    setLabel("Saisissez le titre de la liste");
  };

  return (
    <Container className={focus ? "form" : "button"}>
      {focus ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <InputContainer>
            <InputLabel
              value={label}
              css={{fontWeight: '700'}}
              onChange={(e) => setLabel(e.target.value)}
            />
          </InputContainer>
          <ButtonRow>
            <Button label="Ajouter une liste" type={"submit"} />
            <Button
              label="Annuler"
              onClick={() => setFocus((focus) => !focus)}
            />
          </ButtonRow>
        </Form>
      ) : (
        <Button
          icon={<AddCrossIcon />}
          label="Ajouter une autre liste"
          css={buttonStyle}
          onClick={() => setFocus((focus) => !focus)}
        />
      )}
    </Container>
  );
};

export default AddListButton;

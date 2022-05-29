import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import { ButtonRow, Container, InputContainer } from "./AddListButton.styles";
import {addTaskList} from '../../../../features/tasks/tasksLists/tasksListsSlice'

const AddListButton = () => {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState("Saisissez le titre de la liste");

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTaskList({label}));
    setLabel("Saisissez le titre de la liste");
  }

  return focus ? (
    <Container onSubmit={e => handleSubmit(e)}>
      <InputContainer>
        <InputLabel value={label} onChange={e => setLabel(e.target.value)}/>
      </InputContainer>
      <ButtonRow>
        <Button label="Ajouter une liste" type={"submit"}/>
        <Button label="Annuler"  style="secondary" onClick={() => setFocus(focus => !focus)}/>
      </ButtonRow>
    </Container>
  ) : (
    <Button
      icon={<AddCrossIcon />}
      label="Ajouter une autre liste"
      css={{ width: "240px", justifyContent: "flex-start" }}
      onClick={() => setFocus(focus => !focus)}
    />
  );
};

export default AddListButton;

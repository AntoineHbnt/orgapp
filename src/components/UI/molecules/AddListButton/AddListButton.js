import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import { ButtonRow, Container, InputContainer } from "./AddListButton.styles";

const AddListButton = () => {
  const [focus, setFocus] = useState(false);

  return focus ? (
    <Container >
      <InputContainer>
        <InputLabel value={"Saisissez le titre de la liste"} />
      </InputContainer>
      <ButtonRow>
        <Button label="Ajouter une liste" />
        <Button label="Annuler"  type="secondary" onClick={() => setFocus(focus => !focus)}/>
      </ButtonRow>
    </Container>
  ) : (
    <Button
      icon={<AddCrossIcon />}
      label="Ajouter une autre liste"
      type="secondary"
      css={{ width: "240px", justifyContent: "flex-start" }}
      onClick={() => setFocus(focus => !focus)}
    />
  );
};

export default AddListButton;

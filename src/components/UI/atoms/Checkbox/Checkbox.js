import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCheckboxLabel,
  changeCheckboxState,
  deleteCheckbox,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import Button from "../Button/Button";
import { CheckedIcon } from "../icons/Checked";
import { UncheckedIcon } from "../icons/Uncheck";
import TrashIcon from "../icons/Trash";
import InputLabel from "../InputLabel/InputLabel";
import { Container } from "./Checkbox.styles";

const Checkbox = ({ listId, taskId, checkbox }) => {
  const { id, state, label } = checkbox;
  const [title, setTitle] = useState(label);

  const dispatch = useDispatch();

  const handleStateChange = () => {
    dispatch(changeCheckboxState({ listId, taskId, checkboxId: id }));
  };

  const handleCheckboxLabelChange = (e) => {
    setTitle(e.target.value);
    dispatch(
      changeCheckboxLabel({
        listId,
        taskId,
        checkboxId: id,
        label: e.target.value,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteCheckbox({listId, taskId, checkboxId: id})
    )
  }

  return (
    <Container css={{ background: state === "done" ? "$green" : "$white" }}>
      <Button
        css={{ transform: "scale(1.5)" }}
        icon={state === "done" ? <CheckedIcon /> : <UncheckedIcon />}
        onClick={() => handleStateChange()}
      />
      <InputLabel
        css={{ fontWeight: 700, fontSize: "$14" }}
        value={title}
        onChange={(e) => handleCheckboxLabelChange(e)}
      />
      <Button
        css={{ transform: "scale(1.5)" }}
        icon={<TrashIcon />}
        onClick={() => handleDelete()}
      />
    </Container>
  );
};

export default Checkbox;

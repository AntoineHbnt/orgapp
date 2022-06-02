import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskColor, changeTaskLabel } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import ColorPicker from "../ColorPicker/ColorPicker";
import InputLabel from "../InputLabel/InputLabel";
import { Buttons, Container, Content } from "./CardHeader.styles";

const CardHeader = ({ listId, task, children, pickerActive, handlePicker }) => {
  const [cardLabel, setCardLabel] = useState(task.label);
  const [color, setColor] = useState(task.color);
  const dispatch = useDispatch();

  const handleLabelChange = (e) => {
    setCardLabel(e.target.value);
    dispatch(
      changeTaskLabel({ listId, taskId: task.id, label: e.target.value })
    );
  };

  const handleTaskColorChange = (color) => {
    setColor(color);
    dispatch(changeTaskColor({ listId, taskId: task.id, color }));
    handlePicker();
  };

  return (
    <Container>
      <Content css={{ backgroundColor: color }}>
        <InputLabel
          value={cardLabel}
          onChange={(e) => handleLabelChange(e)}
          css={{ fontWeight: "700" }}
        />
        <Buttons>{children}</Buttons>
      </Content>
      {pickerActive && (
        <ColorPicker
          css={{ marginTop: "-3px" }}
          setColor={(color) => handleTaskColorChange(color)}
        />
      )}
    </Container>
  );
};

export default CardHeader;

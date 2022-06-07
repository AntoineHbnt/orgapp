import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskColor, changeTaskLabel, changeListLabel, changeListHeaderColor } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import ColorPicker from "../ColorPicker/ColorPicker";
import InputLabel from "../InputLabel/InputLabel";
import { Children, buttonStyle, Container, Content } from "./CardHeader.styles";

const CardHeader = ({ listId, task, label, color, children, pickerActive, handlePicker, css }) => {
  const [cardLabel, setCardLabel] = useState(label);
  const [contentColor, setContentColor] = useState(color);
  const dispatch = useDispatch();

  const handleLabelChange = (e) => {
    setCardLabel(e.target.value);
    dispatch(
        task ?
      changeTaskLabel({ listId, taskId: task.id, label: e.target.value })
      : 
      changeListLabel({listId, label: e.target.value})
    );
  };

  const handleTaskColorChange = (color) => {
    setContentColor(color);
    dispatch(task ? changeTaskColor({ listId, taskId: task.id, color }) : changeListHeaderColor({listId, color}));
    handlePicker();
  };

  return (
    <Container css={css}>
      <Content css={{ backgroundColor: contentColor }}>
        <InputLabel
          value={cardLabel}
          onChange={(e) => handleLabelChange(e)}
          css={{ fontWeight: "700" }}
        />
        <Children css={buttonStyle} >{children}</Children>
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeListContentColor,
  changeListHeaderColor,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import Button from "../../atoms/Button/Button";
import ColorPicker from "../../atoms/ColorPicker/ColorPicker";
import BucketIcon from "../../atoms/icons/Bucket";
import { ColorPreview, Container, Element, Title } from "./TaskListSettings.styles";

const TaskListSettings = (props) => {
  const [headerColor, setHeaderColor] = useState(props.headerColor);
  const [contentColor, setContentColor] = useState(props.contentColor);
  const [showHeaderPicker, setShowHeaderPicker] = useState(false);
  const [showContentPicker, setShowContentPicker] = useState(false)
  const dispatch = useDispatch();

  const handleHeaderColorChange = (color) => {
    setShowHeaderPicker(false);
    setHeaderColor(color);
    dispatch(changeListHeaderColor({listId: props.listId, color}));
  };

  const handleContentColorChange = (color) => {
    setShowContentPicker(false);
    setContentColor(color);
    dispatch(changeListContentColor({listId: props.listId, color}));
  };

  return (
    <Container>
      <Element>
        <Title>Entête</Title>
        <ColorPreview css={{ backgroundColor: `${headerColor}` }}>
          <Button icon={<BucketIcon/>} css={{transform: 'scale(1.5)'}} onClick={() => setShowHeaderPicker(showHeaderPicker => !showHeaderPicker) }/>
        </ColorPreview>
        {showHeaderPicker && <ColorPicker css={{border: "3px solid #000"}} setColor={color => handleHeaderColorChange(color)}/>}
      </Element>
      <Element>
        <Title>Contenu</Title>
        <ColorPreview css={{ backgroundColor: `${contentColor}` }} >
        <Button icon={<BucketIcon/>} css={{transform: 'scale(1.5)'}} onClick={() => setShowContentPicker(showContentPicker => !showContentPicker) }/>
        </ColorPreview>
        {showContentPicker && <ColorPicker css={{border: "3px solid #000"}} setColor={color => handleContentColorChange(color)}/>}
      </Element>
    </Container>
  );
};

export default TaskListSettings;

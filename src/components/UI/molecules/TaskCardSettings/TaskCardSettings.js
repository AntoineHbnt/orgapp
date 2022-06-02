import React, { useState } from "react";
import {
  CardContent,
  Category,
  CategoryItemsList,
  Container,
  Row,
  settingsButtonStyle,
  Title,
} from "./TaskCardSettings.styles";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import {
  addTag,
  deleteTask,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import BucketIcon from "../../atoms/icons/Bucket";
import TrashIcon from "../../atoms/icons/Trash";
import TagSettings from "../../atoms/TagSettings/TagSettings";
import CardHeader from "../../atoms/CardHeader/CardHeader";

const TaskCardSettings = ({ task, listId, tags }) => {
  
  const [isPickerActive, setIsPickerActive] = useState(false);
  const taskId = task.id;
  const dispatch = useDispatch();

  const handleDeleteEvent = (e) => {
    dispatch(deleteTask({ listId, taskId }));
  };

  const handleAddTag = (e) => {
    dispatch(addTag({ listId, taskId }));
  };

  const handlePicker = (e) => {
    setIsPickerActive(isPickerActive => !isPickerActive)
  };

  const tagList =
    tags.length > 0 &&
    tags.map((tag) => (
      <TagSettings key={tag.id} listId={listId} taskId={taskId} tag={tag} />
    ));

  return (
    <Container>
      <CardHeader listId={listId} task={task} css={{ backgroundColor: task.color }} pickerActive={isPickerActive} handlePicker={() => handlePicker()}>
        <Button
          icon={<BucketIcon css={{ transform: "scale(1.5)" }} />}
          css={settingsButtonStyle}
          onClick={(e) => handlePicker(e)}
        />
        <Button
          icon={<TrashIcon css={{ transform: "scale(1.5)" }} />}
          css={settingsButtonStyle}
          onClick={(e) => handleDeleteEvent(e)}
        />
      </CardHeader>
      <CardContent>
        <Category>
          <Row>
            <Title>Étiquettes</Title>
            <Button
              icon={<AddCrossIcon />}
              css={settingsButtonStyle}
              onClick={(e) => handleAddTag(e)}
            />
          </Row>
          <CategoryItemsList>{tagList}</CategoryItemsList>
        </Category>
        <Category>
          <Row>
            <Title>CheckList</Title>
            <Button
              icon={<AddCrossIcon />}
              css={settingsButtonStyle}
              onClick={(e) => {}}
            />
          </Row>
          <CategoryItemsList></CategoryItemsList>
        </Category>
      </CardContent>
    </Container>
  );
};

export default TaskCardSettings;

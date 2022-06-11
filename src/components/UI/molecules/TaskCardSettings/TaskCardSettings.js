import React, { useState } from "react";
import {
  Background,
  CardContent,
  Category,
  CategoryItemsList,
  Container,
  Row,
  Title,
} from "./TaskCardSettings.styles";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import {
  addCheckbox,
  addTag,
  deleteTask,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import BucketIcon from "../../atoms/icons/Bucket";
import TrashIcon from "../../atoms/icons/Trash";
import TagSettings from "../../atoms/TagSettings/TagSettings";
import CardHeader from "../../atoms/CardHeader/CardHeader";
import Checkbox from "../../atoms/Checkbox/Checkbox";

const TaskCardSettings = ({ task, listId, tags, checkList }) => {
  const [isPickerActive, setIsPickerActive] = useState(false);
  const taskId = task.id;
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(deleteTask({ listId, taskId }));
  };

  const handleAddTag = () => {
    dispatch(addTag({ listId, taskId }));
  };

  const handleAddCheckbox = () => {
    dispatch(addCheckbox({ listId, taskId }));
  };

  const handlePicker = () => {
    setIsPickerActive((isPickerActive) => !isPickerActive);
  };

  const tagList =
    tags &&
    tags.map((tag) => (
      <TagSettings key={tag.id} listId={listId} taskId={taskId} tag={tag} />
    ));

  const checkboxList =
    checkList &&
    checkList.checkboxList.map((checkbox) => (
      <Checkbox
        key={checkbox.id}
        listId={listId}
        taskId={taskId}
        checkbox={checkbox}
      />
    ));

  return (
    <Container>
      <CardHeader
        listId={listId}
        task={task}
        label={task.label}
        color={task.color}
        css={{ backgroundColor: task.color }}
        pickerActive={isPickerActive}
        handlePicker={() => handlePicker()}
      >
        <Button
          icon={<BucketIcon css={{ transform: "scale(1.5)" }} />}
          onClick={(e) => handlePicker()}
        />
        <Button
          icon={<TrashIcon css={{ transform: "scale(1.5)" }} />}
          onClick={(e) => handleDeleteEvent()}
        />
      </CardHeader>
      <CardContent>
        <Category>
          <Row>
            <Title>Étiquettes</Title>
            <Button icon={<AddCrossIcon />} onClick={(e) => handleAddTag()} />
          </Row>
          <CategoryItemsList>{tagList}</CategoryItemsList>
        </Category>
        <Category>
          <Row>
            <Title>CheckList</Title>
            <Button
              icon={<AddCrossIcon />}
              onClick={(e) => handleAddCheckbox()}
            />
          </Row>
          <CategoryItemsList>{checkboxList}</CategoryItemsList>
        </Category>
      </CardContent>
    </Container>
  );
};

export default TaskCardSettings;

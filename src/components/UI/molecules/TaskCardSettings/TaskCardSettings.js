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
import { CardHeader } from "../TaskCard/TaskCard.styles";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import { useDispatch } from "react-redux";
import {
  changeTaskLabel,
  deleteTask,
} from "../../../../features/tasks/tasksLists/tasksListsSlice";
import BucketIcon from "../../atoms/icons/Bucket";
import TrashIcon from "../../atoms/icons/Trash";
import TagSettings from "../../atoms/TagSettings/TagSettings";

const TaskCardSettings = ({ label, taskId, listId, tags }) => {
  const [cardLabel, setCardLabel] = useState(label);
  const dispatch = useDispatch();

  const handleLabelChange = (e) => {
    setCardLabel(e.target.value);
    dispatch(changeTaskLabel({ listId, taskId, label: e.target.value }));
  };

  const handleDeleteEvent = (e) => {
    dispatch(deleteTask({ listId, taskId }));
  };


  const tagList =
    tags.length > 0 &&
    tags.map((tag) => (
      <TagSettings key={tag.id} listId={listId} taskId={taskId} tag={tag}/>
    ));

  return (
    <Container>
      <CardHeader>
        <InputLabel
          value={cardLabel}
          onChange={(e) => handleLabelChange(e)}
          css={{ fontWeight: "700" }}
        />
        <Row>
          <Button
            icon={<BucketIcon css={{ transform: "scale(1.5)" }} />}
            css={settingsButtonStyle}
            onClick={(e) => {}}
          />
          <Button
            icon={<TrashIcon css={{ transform: "scale(1.5)" }} />}
            css={settingsButtonStyle}
            onClick={(e) => handleDeleteEvent(e)}
          />
        </Row>
      </CardHeader>
      <CardContent>
        <Category>
          <Row>
            <Title>Étiquettes</Title>
            <Button
              icon={<AddCrossIcon />}
              css={settingsButtonStyle}
              onClick={(e) => {}}
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

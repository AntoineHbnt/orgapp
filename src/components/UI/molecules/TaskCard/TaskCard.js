import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { CheckListCount } from "../../atoms/CheckListCount/CheckListCount";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import TrashIcon from "../../atoms/icons/Trash";
import Tag from "../../atoms/Tag/Tag";
import TaskCardSettings from "../TaskCardSettings/TaskCardSettings";
import {
  Card,
  CardContent,
  CardHeader,
  cardModalStyle,
  CardOption,
  ModalBackground,
  PictureContainer,
  settingsButtonStyle,
  TagRow,
} from "./TaskCard.styles";
import { useDispatch } from "react-redux";
import { changeTaskLabel, deleteTask } from "../../../../features/tasks/tasksLists/tasksListsSlice";

const Tags = ({ tags }) => {
  return tags.map(({ label, color }, index) => {
    return <Tag key={index} label={label} color={color} />;
  });
};

const TagList = ({ tags }) => {
  return (
    <TagRow>
      <Tags tags={tags} />
    </TagRow>
  );
};


const TaskCard = ({ listId, taskId, label, tags, checkList, picture }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardLabel, setCardLabel] = useState(label);
  const [trashIsHover, setTrashIsHover] = useState(false);
  const dispatch = useDispatch();

  const handleSettingEvent = (e) => {
    setIsModalOpen(() => true);
  };

  const handleLabelChange = (e) => {
    setCardLabel(() => e.target.value);
    dispatch(changeTaskLabel({ listId, taskId, label: e.target.value }));
  };

  const handleDeleteEvent = (e) => {
    setIsModalOpen(() => false);
    dispatch(deleteTask({listId, taskId}))
  }

  return isModalOpen ? (
    <>
      <Card css={isModalOpen && cardModalStyle}>
        {picture && <PictureContainer src={picture} />}
        <CardOption>
          {tags && <TagList tags={tags} />}
          {checkList && <CheckListCount checkList={checkList} />}
        </CardOption>
        <CardHeader>
          <InputLabel
            value={cardLabel}
            onChange={(e) => handleLabelChange(e)}
            css={{ fontWeight: "700" }}
          />
          <Button
            icon={<TrashIcon />}
            css={settingsButtonStyle}
            onClick={(e) => handleDeleteEvent(e)}
          />
        </CardHeader>
        <TaskCardSettings />
      </Card>
      <ModalBackground onClick={() => setIsModalOpen(false)} />
    </>
  ) : (
    <Card>
      {picture && <PictureContainer src={picture} />}
      <CardOption>
        {tags && <TagList tags={tags} />}
        {checkList && <CheckListCount checkList={checkList} />}
      </CardOption>
      <CardHeader>
        {label}
        <Button
          icon={<DotMenuIcon />}
          css={settingsButtonStyle}
          onClick={(e) => handleSettingEvent(e)}
        />
      </CardHeader>
    </Card>
  );
};

export default TaskCard;

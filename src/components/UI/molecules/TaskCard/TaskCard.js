import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { CheckListCount } from "../../atoms/CheckListCount/CheckListCount";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import Tag from "../../atoms/Tag/Tag";
import TaskCardSettings from "../TaskCardSettings/TaskCardSettings";
import {
  Card,
  CardHeader,
  cardModalStyle,
  CardOption,
  ModalBackground,
  PictureContainer,
  settingsButtonStyle,
  TagRow,
} from "./TaskCard.styles";

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
  
  const handleSettingEvent = (e) => {
    setIsModalOpen(() => true);
  };


  return isModalOpen ? (
    <>
      <Card css={ cardModalStyle}>
        {picture && <PictureContainer src={picture} />}
        <CardOption>
          {tags && <TagList tags={tags} />}
          {checkList && <CheckListCount checkList={checkList} />}
        </CardOption>
        <TaskCardSettings label={label} taskId={taskId} listId={listId} tags={tags}/>
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

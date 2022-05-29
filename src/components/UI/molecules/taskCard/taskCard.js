import React from "react";
import { CheckListCount } from "../../atoms/CheckListCount/CheckListCount";
import Tag from "../../atoms/Tag/Tag";
import {
  Card,
  CardContent,
  CardLabel,
  CardOption,
  PictureContainer,
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

const TaskCard = ({ label, tags, checkList, picture }) => {
  return (
    <Card>
      {picture && <PictureContainer src={picture} />}
      <CardContent>
        <CardOption>
          {tags && <TagList tags={tags} />}
          {checkList && <CheckListCount checkList={checkList} />}
        </CardOption>
        <CardLabel>{label}</CardLabel>
      </CardContent>
    </Card>
  );
};

export default TaskCard;

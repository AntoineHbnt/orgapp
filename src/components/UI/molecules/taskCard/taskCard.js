import React from "react";
import { CheckListCount } from "../../atoms/CheckListCount/CheckListCount";
import Tag from "../../atoms/Tag/Tag";
import { Card, CardContent, CardLabel, PictureContainer, TagRow } from "./taskCard.styles";

const Tags = ({ tags }) => {
  return tags.map(({ label, color }) => {
    return <Tag label={label} color={color} />;
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
      {picture && <PictureContainer src={picture}/>}
      <CardContent>
        {tags && <TagList tags={tags} />}
        <CardLabel>{label}</CardLabel>
        {checkList && <CheckListCount done={0} total={10}/>}
      </CardContent>
    </Card>
  );
};

export default TaskCard;

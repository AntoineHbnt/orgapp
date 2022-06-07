import React from "react";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import { DotButton } from "./TaskSettings.styles";

const TaskSettings = () => {
  return (
    <DotButton>
      <DotMenuIcon />
    </DotButton>
  );
};

export default TaskSettings;

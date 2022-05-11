import React from "react";
import { taskLists } from "../../../../data";
import Button from "../../atoms/Button/Button";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import TaskList from "../../molecules/TaskList/TaskList";
import { AddButton, ButtonLabel, Container } from "./TaskListArray.styles";

const TaskListArray = () => {
  return (
    <Container>
      {taskLists.map((tasksList) => {
        return <TaskList key={tasksList.id} tasks={tasksList.tasks} />;
      })}
      <Button icon={<AddCrossIcon/>} label="Ajouter une liste" type="secondary"/>
    </Container>
  );
};

export default TaskListArray;

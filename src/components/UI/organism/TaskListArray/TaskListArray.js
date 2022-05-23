import React, { useState } from "react";
import { taskLists } from "../../../../data";
import AddListButton from "../../molecules/AddListButton/AddListButton";
import TaskList from "../../molecules/TaskList/TaskList";
import { Container } from "./TaskListArray.styles";

const TaskListArray = () => {
  const [isFocus, setIsFocus] = useState(false);

  const array = taskLists.map((tasksList) => (
    <TaskList key={tasksList.id} tasks={tasksList.tasks} />
  ));

  return (
    <Container>
      {array}
      <AddListButton />
    </Container>
  );
};

export default TaskListArray;

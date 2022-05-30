import React from "react";
import { useSelector } from "react-redux";
import AddListButton from "../../molecules/AddListButton/AddListButton";
import TaskList from "../../molecules/TaskList/TaskList";
import { Container } from "./TaskListArray.styles";

const TaskListArray = () => {
  const tasksLists = useSelector((state) => state.tasksLists)

  const array = tasksLists.map((tasksList) => (
    <TaskList key={tasksList.id} id={tasksList.id} label={tasksList.label} tasks={tasksList.tasks} />
  ));

  return (
    <Container>
      {array}
      <AddListButton />
    </Container>
  );
};

export default TaskListArray;

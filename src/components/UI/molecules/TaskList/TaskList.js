import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import CardHeader from "../../atoms/CardHeader/CardHeader";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import AddCardButton from "../AddCardButton/AddCardButton";
import TaskCard from "../TaskCard/TaskCard";
import { Container, Content, Footer, List } from "./TaskList.styles";
import TaskListSettings from "../TaskListSettings/TaskListSettings";

const TaskList = ({ taskList, tasks }) => {
  const [isSettingActive, setIsSettingActive] = useState(false);

  const handleSettingEvent = () => {
    setIsSettingActive((isSettingActive) => !isSettingActive);
  };

  const tasksArray = tasks.length > 0 && (
    <List>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} listId={taskList.id} />
      ))}
    </List>
  );

  return (
    <Container css={{ backgroundColor: taskList.color.content }}>
      <CardHeader
        listId={taskList.id}
        label={taskList.label}
        css={{ padding: "$4 $8", backgroundColor: taskList.color.header }}
      >
        <Button icon={<DotMenuIcon />} onClick={(e) => handleSettingEvent()} />
        {isSettingActive && <TaskListSettings listId={taskList.id} headerColor={taskList.color.header} contentColor={taskList.color.content} />}
      </CardHeader>
      <Content>{tasksArray}</Content>
      <Footer>
        <AddCardButton listId={taskList.id} />
      </Footer>
    </Container>
  );
};

export default TaskList;

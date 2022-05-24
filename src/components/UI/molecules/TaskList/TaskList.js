import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeTasksListLabel } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import { AddCrossIcon } from "../../atoms/icons/AddCross";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import TaskCard from "../TaskCard/TaskCard";
import {
  Button,
  ButtonLabel,
  Container,
  Footer,
  Header,
  List,
} from "./TaskList.styles";

const TaskList = ({ id, tasks, label }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(label ? label : "Saisissez le titre de la liste");

  const tasksArray = tasks.map(({ label, picture, tags, checkList }, index) => (
    <TaskCard
      key={index}
      label={label}
      picture={picture}
      tags={tags}
      checkList={checkList}
    />
  ));

  const handleChange = (e) => {
    setTitle(() => e.target.value);
    dispatch(changeTasksListLabel({id, label: e.target.value}));
  }

  return (
    <Container>
      <Header>
        <InputLabel value={title} onChange={e => handleChange(e)} />
        <Button
          css={{
            aspectRatio: "1/1",
            width: "32px",
            "& > svg": { transform: "scale(1.5)" },
          }}
        >
          <DotMenuIcon />
        </Button>
      </Header>
      <List>{tasksArray}</List>
      <Footer>
        <Button css={{ padding: "$1 $2 $1 $2", width: "100%" }}>
          <AddCrossIcon />
          <ButtonLabel>Ajouter une carte</ButtonLabel>
        </Button>
      </Footer>
    </Container>
  );
};

export default TaskList;

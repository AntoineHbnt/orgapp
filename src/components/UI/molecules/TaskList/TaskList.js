import React, { useState } from "react";
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

const TaskList = ({ tasks }) => {
  const [title, setTitle] = useState("Saisissez le titre de la liste");

  const tasksArray = tasks.map(({ label, picture, tags, checkList }, index) => (
    <TaskCard
      key={index}
      label={label}
      picture={picture}
      tags={tags}
      checkList={checkList}
    />
  ));

  return (
    <Container>
      <Header>
        <InputLabel value={title} setValue={setTitle} />
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

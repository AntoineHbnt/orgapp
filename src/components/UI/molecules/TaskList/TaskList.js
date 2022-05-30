import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTasksListLabel } from "../../../../features/tasks/tasksLists/tasksListsSlice";
import { DotMenuIcon } from "../../atoms/icons/DotMenu";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import AddCardButton from "../AddCardButton/AddCardButton";
import TaskCard from "../TaskCard/TaskCard.js";
import {
  Button,
  Container,
  Footer,
  Header,
  List,
} from "./TaskList.styles";

const TaskList = ({ id, tasks, label }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(label ? label : "Saisissez le titre de la liste");

  const tasksArray = tasks.length > 0 && (
    <List>
      {tasks.map(({ label, picture, tags, checkList }, index) => (
        <TaskCard
          key={index}
          label={label}
          picture={picture}
          tags={tags}
          checkList={checkList}
        />
      ))}
    </List>
  )
  

  const handleChange = (e) => {
    setTitle(() => e.target.value);
    dispatch(changeTasksListLabel({id, label: e.target.value}));
  }

  return (
    <Container>
      <Header>
        <InputLabel value={title} css={{fontWeight: '700', whiteSpace:'nowrap'}} onChange={e => handleChange(e)} />
        <Button
          css={{
            aspectRatio: "1/1",
            width: "16px",
            "& > svg": { transform: "scale(1.5)" },
          }}
        >
          <DotMenuIcon />
        </Button>
      </Header>
      {tasksArray}
      <Footer>
        <AddCardButton listId={id} />
      </Footer>
    </Container>
  );
};

export default TaskList;

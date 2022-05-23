import TaskListArray from "./components/UI/organism/TaskListArray/TaskListArray";
import { styled } from "./Themes";

const Container = styled("div", {
  fontFamily: "$glory",
  width: "100vw",
  height: "100vh",
  backgroundColor: "$secondary",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});


function App() {
  return (
    <Container>
      <Column>
        <TaskListArray/>
      </Column>
    </Container>
  );
}

export default App;

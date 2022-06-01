import TaskListArray from "./components/UI/organism/TaskListArray/TaskListArray";
import { styled } from "./Themes";

const Container = styled("div", {
  fontFamily: "$glory",
  width: "100%",
  height: "100%",
  backgroundColor: "$secondary",
  display: "flex",
  margin: '$32 0 0 $32'
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

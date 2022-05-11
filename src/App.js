import TaskCard from "./components/UI/molecules/taskCard/taskCard";
import { styled } from "./Themes";

const Container = styled("div", {
  fontFamily: "$glory",
  width: "100vw",
  height: "100vh",
  backgroundColor: "$primary",
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
        <TaskCard
          picture="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x160/acf5be3f99e4b0e667869b2f75593ab0/photo-1650892344024-fb34a919e258.jpg"
          label="Ceci est le contenue d'une tâche"
          tags={[
            { label: "Lorem", color: "#519839" },
            { label: "Lorem", color: "#519839" },
          ]}
        />
        <TaskCard
          picture="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x160/acf5be3f99e4b0e667869b2f75593ab0/photo-1650892344024-fb34a919e258.jpg"
          label="Ceci est le contenue d'une tâche"
        />
      </Column>
    </Container>
  );
}

export default App;

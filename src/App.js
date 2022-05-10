import { useState } from "react";
import InputField from "./components/UI/molecules/InputField/InputField";
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
  const [value, setValue] = useState("");

  return (
    <Container>
      <Column>
        <InputField
          placeHolder="Placeholder"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputField placeHolder="Placeholder" type="text" disabled />
        <InputField placeHolder="Placeholder" type="password" disabled />
        <InputField
          placeHolder="Placeholder"
          type="text"
          value={value}
          error={"ceci est une erreur"}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputField
          placeHolder="Placeholder"
          type="text"
          value={value}
          valid
          onChange={(e) => setValue(e.target.value)}
        />
        <InputField
          placeHolder="Placeholder"
          type="password"
          value={value}
          error={"ceci est une erreur"}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputField
          placeHolder="Placeholder"
          type="password"
          value={value}
          valid
          onChange={(e) => setValue(e.target.value)}
        />
      </Column>
    </Container>
  );
}

export default App;

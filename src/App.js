import Button from "./components/UI/atoms/Button/Button";
import { Logo } from "./components/UI/atoms/icons/Logo";
import { ShareIcon } from "./components/UI/atoms/icons/Share";
import { styled } from "./Themes";

const Container = styled("div", {
  fontFamily: "$glory",
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
});


function App() {
  return (
    <Container>
      <Button type="tertiary" label="Lorem" icon={<ShareIcon/>} />
      <Logo type="primary" />
    </Container>
  );
}

export default App;

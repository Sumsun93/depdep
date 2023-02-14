import styled from "styled-components";
import About from "./components/About";
import SignUp from "./components/SignUp";
import LastMusic from "./components/LastMusic";
function App() {
    return (
        <Container>
            <About />
            <SignUp />
            <LastMusic />
        </Container>
    )
}

export default App

const Container = styled.div`
    position: relative;
    background-color: #ffb0b0;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

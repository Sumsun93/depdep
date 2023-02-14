import styled from "styled-components";

const LastMusic = () => {
    return (
        <Container>
            <Title>
                Écoutez notre dernier single !
            </Title>
            <Video
                // large format
                width="560"
                height="315"
                src="https://www.youtube.com/embed/D80WNS0JRjc"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            />
        </Container>
    );
};

export default LastMusic;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    font-style: italic;
    margin-bottom: 3rem;
`;

const Video = styled.iframe`
`;

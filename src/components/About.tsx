import styled from "styled-components";
import car from '../assets/car.svg';

const About = () => {
    return (
        <Container>
            <Disclaimer>
                Ceci est un site RP, les informations qui y sont présentes ne sont pas réelles.
            </Disclaimer>
            <Car src={car} />
            <Content>
                <Title>Qui sommes nous ?</Title>
                <Description>
                    Les DEP DU PEDEP est une association à but non lucratif visant à promouvoir la mouvance anticonformiste.
                    <br />
                    Nous soutenons avec VIGUEUR les droits LGBTQ+ et participons activement à la lutte contre les discriminations.
                </Description>
            </Content>
        </Container>
    );
};

export default About;

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5rem;
`;

const Disclaimer = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgb(251, 237, 233);
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
`;

const Car = styled.img`
    width: 50%;
    min-width: 500px;
    height: 50%;
    padding: 5rem;
    box-sizing: border-box;
`;

const Content = styled.div`
    width: 50%;
    min-width: 500px;
    padding-right: 5rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
`;

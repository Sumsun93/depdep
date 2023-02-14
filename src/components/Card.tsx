import * as React from "react"
import styled from "styled-components"
import bgCard from '../assets/bgCard.png'
import car from '../assets/car.png'
import {forwardRef, Ref, SVGProps} from "react"

const Card = ({
    firstName,
    lastName,
    memberId,
}: any) => {
    return (
        <Container>
            <Background />
            <Content>
                <Header>
                    <Car src={car} />
                    <Title>Membre officiel des DepDep</Title>
                </Header>
                <Infos>
                    Nom : {lastName}
                    <br />
                    Prénom : {firstName}
                    <br />
                    Membre n° : {memberId}
                </Infos>
            </Content>
        </Container>
    )
}
export default Card

const Container = styled.div`
    position: relative;
    height: 346px;
    width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 3rem 5rem;
`;

const Content = styled.div`
    position: relative;
    height: 336px;
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    background-image: url(${bgCard});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    font-style: italic;
`;

const Header = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

const Infos = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow-x: hidden;
    font-size: .8em;
    padding: 2rem;
    box-sizing: border-box;
`;

const Title = styled.h1`
    position: relative;
    font-size: .9em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(130deg, #a001c0 0%, #4041fe 20%, #007a41 40%, #ff0 60%, #fb7f05 80%, #f00001 100%);
    border-radius: 23px;
`;

const Car = styled.img`
    width: 35%;
    object-fit: cover;
    border-radius: 23px;
`;


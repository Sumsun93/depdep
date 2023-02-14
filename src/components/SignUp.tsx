import styled from "styled-components";
import Card from './Card';
import {useRef, useState} from "react";
import html2canvas from 'html2canvas';

const SignUp = () => {
    const [memberId, setMemberId] = useState(Date.now());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const printRef = useRef();

    const handleDownloadImage = async () => {
        const element = printRef.current;
        // @ts-ignore
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleDownloadImage();
    }

    return (
        <Container>
            <Background />
            <Content>
                <div ref={printRef}>
                    <Card
                        style={{
                            width: '600px',
                        }}
                        firstName={firstName}
                        lastName={lastName}
                        memberId={memberId}
                    />
                </div>
                <Title>
                    Inscris-toi pour soutenir l'asso et recevoir
                    <br/>
                    ta carte de membre exclusive !
                </Title>
                <Form>
                    <Input
                        type="text"
                        placeholder="Prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>S'inscrire</Button>
                </Form>
            </Content>
        </Container>
    );
};

export default SignUp

const Container = styled.div`
    position: relative;
    background-color: #ffb0b0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(130deg, #a001c0 0%, #4041fe 20%, #007a41 40%, #ff0 60%, #fb7f05 80%, #f00001 100%);
    border-bottom-right-radius: 130px;
    border-top-left-radius: 130px;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    background-color: rgb(251, 237, 233);
    border-bottom-right-radius: 120px;
    border-top-left-radius: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    position: relative;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 1rem;
    color: #ffb0b0;
    font-style: italic;
    font-weight: 900;
`;

const Form = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const Input = styled.input`
    position: relative;
    padding: .5rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 10px;
    width: 300px;
    background-color: #ffb0b0;
    outline: none;
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
    text-align: center;
  
    &::placeholder {
        color: rgb(251, 237, 233);
        font-size: 1.5rem;
        font-weight: 900;
    }
`;

const Button = styled.button`
    position: relative;
    padding: .5rem;
    margin-bottom: 1rem;
    border: 3px solid #ffb0b0;
    background-color: transparent;
    border-radius: 10px;
    width: 300px;
    outline: none;
    font-size: 1.5rem;
    font-weight: 900;
    color: #ffb0b0;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1.5rem;
  
    &:hover {
      border: 3px solid #ffb0b0;
      background-color: #ffb0b0;
        color: white;
    }
`;

const CardContainer = styled.img`
    width: 600px;
`;

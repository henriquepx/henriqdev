import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import Form from '../components/Form';

const ContainerContact = styled.div`
    height: calc(100vh - 6.3vh);
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #2e2e2e;
    padding: 1rem;
    @media (max-width: 450px) {
        margin-left: 25px;
    }
`;
const ContactSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 
    
    overflow-y: auto; 
    &::-webkit-scrollbar {
        width: 12px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }
    scrollbar-width: thin;
    scrollbar-color: #9c9c9c #1d1d1d;

    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        padding-bottom: 2rem;
    }
`;
const ContactMolde = styled.div`
    margin-left: 45px;
`
const TitleContact = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    @media (max-width: 450px) {
        font-size: 1.3rem;
    }
`
const SubTitleContact = styled.h2`
    color: #a5a5a5;
    font-size: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    text-align: center;
    margin: 0 auto;
    max-width: 40ch;
    margin-bottom: 2rem;
    @media (max-width: 450px) {
        font-size: 1.3rem;
    }
`


const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <ContactMolde>
                    <TitleContact>Mande uma mensagem.</TitleContact>
                    <SubTitleContact>Tem uma pergunta, proposta ou quer apenas fazer um comentário? Fique a vontade</SubTitleContact>
                    <Form />
                </ContactMolde>
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

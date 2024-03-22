import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import Form from '../components/Form';

const ContainerContact = styled.div`
    height: calc(100vh - 6.3vh);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 55px;
    background-color: #2e2e2e;
    @media (max-width: 450px) {
        margin-left: 50px;
    }
`;
const ContactSize = styled.div`
    width: 100%;
    max-width: 1000px;
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
    margin-top: 8rem;
    @media (max-width: 800px) {
        margin-top: 2rem;
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
    margin-bottom: 2rem;
`


const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <ContactMolde>
                    <TitleContact>Tem uma pergunta ou proposta? Mande uma mensagem.</TitleContact>
                    <Form />
                </ContactMolde>
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

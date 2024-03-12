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
    margin-top: 10rem;
    @media (max-width: 700px) {
        margin-top: 4rem;
    }
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    color: #fff;

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
    p {
        text-align: center;
    }
`;


const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <Form />
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

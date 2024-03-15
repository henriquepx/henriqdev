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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #fff;
    margin-top: 12rem;
    overflow-y: auto; 
    padding: 1rem 0rem 3rem 0rem;
    @media (max-width: 450px) {
        margin-top: 3rem;
    }
    h1 {
        font-size: 1.5rem;
        color: #979797;
    }
`;


const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <h1>Entre em contato! ;)</h1>
                <Form />
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import Form from '../components/Form';

const showingContent = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateX(0px);
    }
`;
const ContainerContact = styled.div`
    min-height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #2e2e2e;
    padding: 1.5rem;
    overflow: hidden;
`;
const ContactSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 
    animation: ${showingContent} 1s forwards;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        padding-bottom: 2rem;
    }
`;
const ContactMolde = styled.div`
    margin-left: 45px;
`

const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <ContactMolde>
                    <Form />
                </ContactMolde>
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

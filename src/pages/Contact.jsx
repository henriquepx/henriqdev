import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import SendEmail from '../components/SendEmail';

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
    width: 100%;
    background-color: #2e2e2e;
    margin-left: 25px;
    padding: 1.5rem;
    overflow: hidden;
`;
const ContactSize = styled.div`
    animation: ${showingContent} 1s forwards;  
    max-height: 90%;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding-right: 4rem;
    @media (max-width: 800px) {
        padding-bottom: 4rem;
    }
    @media (max-width: 500px) {
        padding-bottom: 4rem;
        padding-right: 2rem;
    }
`;

const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <SendEmail />
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

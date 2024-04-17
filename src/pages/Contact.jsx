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
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    max-height: 80vh;
    height: 100%;
    margin-right: 10rem;
    @media (max-width: 800px) {
        margin-right: 5rem;
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

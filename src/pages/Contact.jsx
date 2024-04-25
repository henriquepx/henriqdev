import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import SendEmail from '../components/SendEmail';
import Henrique from '../assets/henrique.png'

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
    text-align: center;
    max-height: 100vh;
    height: 100%;
    margin-right: 5rem;
    padding-bottom: 6rem;
`;
const Emoji = styled.div`
    position: absolute;
    bottom: -1%;
    right: 20px;
    @media (max-width: 400px) {
        right: -12px;
    }
`
const ImgMine = styled.img`
    width: 140px;
`;
const SpeechBubble = styled.div`
    position: absolute;
    top: -60px;
    left: 68px;
    transform: translateX(-50%);
    background-color: #1d1d1d;
    border: 2px solid #000000;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 150px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: #1d1d1d transparent;
    }
`;

const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <SendEmail />
                
                <Emoji>
                    <ImgMine src={Henrique} alt="Eu" />
                    <SpeechBubble>
                        <p>clique no &quot;email&quot;</p>
                    </SpeechBubble>
                </Emoji>
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import Form from '../components/Form';
import { FaFile, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

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
const UlContact = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;
const ALinkContact = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: .5rem 1rem;
    width: 220px;
    background-color: #1d1d1d;
    border-radius: 10px;
    border: 2px solid #333232;
    &:hover {
        background-color: #242323;
    }
    p {
        color: #fff; 
    }
`

const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                    <nav>
                        <UlContact>
                            <ALinkContact href="#" target='_blank' rel='noreferre'>
                                <FaLinkedin size={18} color='#fff'/>
                                <p>LinkedIn</p>
                            </ALinkContact>
                            <ALinkContact href="#" target='_blank' rel='noreferre'>
                                <FaGithub size={18} color='#fff'/>
                                <p>Github</p>
                            </ALinkContact>
                            <ALinkContact href="#" target='_blank' rel='noreferre'>
                                <FaWhatsapp size={18} color='#fff'/>
                                <p>Whatsapp</p>
                            </ALinkContact>
                            <ALinkContact href="#" target='_blank' rel='noreferre'>
                                <FaFile size={18} color='#fff'/>
                                <p>Blog</p>
                            </ALinkContact>
                        </UlContact>
                    </nav>
                    <p>or</p>
                    <div>
                        <Form />
                    </div>

            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

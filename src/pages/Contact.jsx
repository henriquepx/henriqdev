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
    margin-top: 6rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    color: #fff;
    p {
        text-align: center;
    }
`;

const UlContact = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const ALinkContact = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: .5rem 1rem;
    width: 220px;
    border-radius: 10px;
    border: 3px solid #7a7a7a;
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

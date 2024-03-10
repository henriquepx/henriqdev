import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
// import Form from '../components/Form';

const ContainerContact = styled.div`
    height: calc(100vh - 6.3vh);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 55px;

    @media (max-width: 450px) {
        margin-left: 50px;
    }
`;

const ContactSize = styled.div`
    position: absolute;
    left: 75px;
    top: 60px;
    display: flex;

    @media (max-width: 450px) {
        left: 50px;
        top: 40px;
        padding: 1rem;
    }
`;

const ContactMidias = styled.div`
    h1 {
        color: #999898;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
`;

const SocialMediasContact = styled.div`
    counter-reset: line;
    line-height: 2rem;

    p {
        font-family: 'Montserrat', sans-serif;
        color: #757575;
        display: flex;
        align-items: center;    
        gap: 10px;
        font-size: 1.2rem;

        a {
            color: #d1d1d1;
            font-size: 1.2rem;

            &:hover {
                text-decoration: underline;
            }
        }

        @media (max-width: 450px) {
            font-size: .85rem;
        }
    }
`;

const SocialMediasContactLink = styled.a`
    color: #d1d1d1;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;

const Contact = () => {
    return (
        <ContainerContact>
            <TabFiles activeTab='Contact' />
            <ContactSize>
                <ContactMidias>
                    <h1>Entre em contato de duas formas:</h1>
                    <div>
                        <SocialMediasContact>
                            <p>.socialmedias {`{`}</p>
                            <p>&nbsp;&nbsp;&nbsp;github: <SocialMediasContactLink href="https://github.com/henriquepx" target='_blank'>@henriquepx;</SocialMediasContactLink></p>
                            <p>&nbsp;&nbsp;&nbsp;linkedin: <SocialMediasContactLink href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank'>Henrique Pinheiro;</SocialMediasContactLink></p>
                            <p>&nbsp;&nbsp;&nbsp;blog:  <SocialMediasContactLink href="https://dev-insights-self.vercel.app/" target='_blank'>devinsights;</SocialMediasContactLink></p>
                            <p>&nbsp;&nbsp;&nbsp;whatsapp:  <SocialMediasContactLink href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Tenho%20uma%20ideia%20de%20trabalho%20e%20voc%C3%AA%20%C3%A9%20o%20Desenvolvedor%20que%20eu%20preciso!" target='_blank'>send a message;</SocialMediasContactLink></p>
                            <p>&nbsp;&nbsp;&nbsp;instagram: <SocialMediasContactLink href="https://www.instagram.com/henriquepxx/" target='_blank'>henriquepx;</SocialMediasContactLink></p>
                            <p>{`}`}</p>
                        </SocialMediasContact>
                        <div>
                            {/* <Form /> */}
                        </div>
                    </div>
                </ContactMidias>
            </ContactSize>
        </ContainerContact>
    );
}

export default Contact;

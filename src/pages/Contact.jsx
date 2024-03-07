import './Contact.css';
import TabFiles from './Layout/TabFiles';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import Form from '../components/Form';

const Contact = () => {
    return (
        <div className='containerContact'>
            <TabFiles activeTab='Contact' />
            <div className='contactsize'>
                <div className='contactmidias'>
                    <h1>Entre em contato de duas formas:</h1>
                    <div className='contactways'>
                        <div className='socialmediascontact'>
                            <p className='opensocial'>.socialmedias {`{`}</p>
                            <p className='midiastext'>      github: @henriquepx <FaGithub /></p>
                            <p className='midiastext'>      linkedin: Henrique Pinheiro <FaLinkedin /></p>
                            <p className='midiastext'>      blog: devinsights <MdArticle /></p>
                            <p className='midiastext'>      whatsapp: send a massage <FaWhatsapp /></p>
                            <p className='midiastext'>      instagram: henriquepx <FaInstagram /></p>
                            <p className='closesocial'>{`}`}</p>
                        </div>
                        <div className="containerform">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

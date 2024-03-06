import './Contact.css';
import TabFiles from './Layout/TabFiles';

const Contact = () => {
    return (
        <div className='containerContact'>
            <TabFiles activeTab='Contact' />
            <div className='contactsize'>
                <h1>Minhas redes sociais</h1>
            </div>
        </div>
    );
}

export default Contact;

import './Contact.css';
import TabFiles from './Layout/TabFiles';
// import Form from '../components/Form';

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
                            <p className='midiastext'>&nbsp;&nbsp;&nbsp;github: <a href="https://github.com/henriquepx" target='_blank'>@henriquepx;</a></p>
                            <p className='midiastext'>&nbsp;&nbsp;&nbsp;linkedin: <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank'>Henrique Pinheiro;</a></p>
                            <p className='midiastext'>&nbsp;&nbsp;&nbsp;blog:  <a href="https://dev-insights-self.vercel.app/" target='_blank'>devinsights;</a></p>
                            <p className='midiastext'>&nbsp;&nbsp;&nbsp;whatsapp:  <a href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Tenho%20uma%20ideia%20de%20trabalho%20e%20voc%C3%AA%20%C3%A9%20o%20Desenvolvedor%20que%20eu%20preciso!" target='_blank'>send a massage;</a></p>
                            <p className='midiastext'>&nbsp;&nbsp;&nbsp;instagram: <a href="https://www.instagram.com/henriquepxx/" target='_blank'>henriquepx;</a></p>
                            <p className='closesocial'>{`}`}</p>
                        </div>
                        <div className="containerform">
                            {/* <Form /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

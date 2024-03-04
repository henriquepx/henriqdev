import './AdviceToClick.css'
import ArrowImage from '../assets/arrow.svg';

const AdviceToClick = () => {
    return (
        <div className='container-advice'>
            <img src={ArrowImage} alt="Arrow" />
            <p>Clique aqui e veja tudo que precisa sobre meu portfólio.</p>
        </div>
    )
}

export default AdviceToClick
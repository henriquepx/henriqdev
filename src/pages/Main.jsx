import AdviceToClick from '../components/AdviceToClick';
import './Main.css'
import { PiCodeLight } from "react-icons/pi";

const Main = () => {
    return (
        <main>
            <AdviceToClick />
            <PiCodeLight size={300} />
            <h1>Henrique Pinheiro</h1>
            <h2>Desenvolvedor Front-end</h2>
        </main>
    )
}

export default Main
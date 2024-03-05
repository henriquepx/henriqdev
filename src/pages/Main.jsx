import TabFiles from './Layout/TabFiles';
import './Main.css'
import { PiCodeLight } from "react-icons/pi";

const Main = () => {
    return (
        <main>
            <TabFiles />
            <PiCodeLight size={300} />
        </main>
    )
}

export default Main
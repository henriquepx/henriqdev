import TabFiles from './Layout/TabFiles';
import './Main.css'
import { PiCodeLight } from "react-icons/pi";

const Main = () => {
    const activeIndex = 0;
    return (
        <main>
            <TabFiles activeIndex={activeIndex} />
            <PiCodeLight size={300} />
        </main>
    )
}

export default Main;
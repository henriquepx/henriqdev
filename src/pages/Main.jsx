import TabFiles from './Layout/TabFiles';
import './Main.css'

const Main = () => {
    const activeIndex = 1;
    return (
        <main>
            <TabFiles activeIndex={activeIndex} />
        </main>
    )
}

export default Main;
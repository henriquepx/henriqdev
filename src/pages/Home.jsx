import './Home.css';
import TabFiles from './Layout/TabFiles';

const Home = () => {
    return (
        <div className='homecontainer'>
            <TabFiles activeTab='Home' />
            <div className='infoHome'>
                <h1>Henrique Pinheiro</h1>
                <h2>Sou Dev Front-end e faço uns softwares pra web xD</h2>
            </div>
        </div>
    );
}

export default Home;
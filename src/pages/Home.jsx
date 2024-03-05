import './Home.css';
import TabFiles from './Layout/TabFiles';

const Home = () => {
    return (
        <div className='homecontainer'>
            <TabFiles activeTab='Home' />
        </div>
    );
}

export default Home;
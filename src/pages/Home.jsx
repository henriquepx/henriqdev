import './Home.css';
import TabFiles from './Layout/TabFiles';
// import Wallpaper from '../assets/wallpaper.png'

const Home = () => {
    return (
        <div className='homecontainer'>
            <TabFiles activeTab='Home' />
            {/* <div className='infoHome'>
                <h1>Henrique Pinheiro</h1>
                <h2>Desenvolvedor Front-end</h2>
                <p>Faço umas telas interativas e animadas e construo softwares bonitos.</p>
                <div className='linkshome'>
                    <a href="#">CV</a>
                    <a href="#">Contrate-me</a>
                </div>
                <img className='wallpaperMain' src={Wallpaper} alt="Wallpaper" />
            </div> */}
        </div>
    );
}

export default Home;
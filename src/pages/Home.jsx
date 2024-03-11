import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import Wallpaper from '../assets/wallpaper.png';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    @media (max-width: 800px) {
        padding: .5rem;
    }
`;
const InfoHome = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 8rem;
    text-align: center;
    margin-left: 25px;
    h1 {
        font-size: 4rem;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        @media (max-width: 800px) {
            font-size: 1.8rem;
        }
    }

    h2 {
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        color: #b9b9b9;
        @media (max-width: 800px) {
            font-size: 1.2rem;
        }
    }

    p {
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        color: #b9b9b9;
        @media (max-width: 800px) {
            max-width: 30ch;
        }
    }
`;
const LinksHome = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 1.5rem;
`;
const CV = styled.a`
    color: #fff;
    background-color: rgb(0, 153, 180);
    padding: .5rem 2rem;
    font-weight: 600;
    border-radius: 5px;
`
const LinkToContact = styled(Link)`
    color: #fff;
    background-color: rgb(0, 153, 180);
    padding: .5rem 2rem;
    font-weight: 600;
    border-radius: 5px;
`
const DescriptionHome = styled.p`
    padding-top: 1rem;
    max-width: 50ch;
`;
const WallpaperMain = styled.img`
    position: fixed;
    right: 300px;
    bottom: -310px;
    transform: rotate(210deg);
    width: 1300px;
    z-index: 0;

    @media (max-width: 450px) {
        right: 50px;
        bottom: -300px;
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <TabFiles activeTab='Home' />
            <InfoHome>
                <h1>Henrique Pinheiro</h1>
                <h2>Desenvolvedor Front-end</h2>
                <DescriptionHome>Apaixonado por criar interfaces web robustas e escaláveis que proporcionam experiências excepcionais ao usuário.</DescriptionHome>
                <LinksHome>
                    <CV href="#">CV</CV>
                    <LinkToContact to="/contact">Contrate-me</LinkToContact>
                </LinksHome>
                <WallpaperMain src={Wallpaper} alt="Wallpaper" />
            </InfoHome>
        </HomeContainer>
    );
}

export default Home;

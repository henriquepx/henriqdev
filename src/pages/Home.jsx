import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden;
`;
const InfoHome = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 6rem;
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
const DescriptionHome = styled.p`
    padding-top: 1rem;
    max-width: 50ch;
`;
const Faixa = styled.div`
    position:fixed;
    overflow: hidden;
    right: -90px;
    bottom: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    transform: rotate(-45deg);
    background-color: #272727;
    p {
        color: #dad9d9;
    }
`
const CV = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #b9b9b9;
    background-color: #222222;
    border: 1px solid #8b8b8b;
    border-radius: 15px;
    padding: .3rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
`

const Home = () => {

    const handleDownloadCV = () => {
        const cvFileName = 'CV - Henrique.pdf';
        const cvPath = `/${cvFileName}`;
        saveAs(cvPath, cvFileName);
    };

    return (
        <HomeContainer>
            <TabFiles activeTab='Home' />
            <InfoHome>
                <h1>Henrique Pinheiro</h1>
                <h2>Desenvolvedor Front-end</h2>
                <DescriptionHome>Apaixonado por criar interfaces web robustas e escaláveis que proporcionam experiências excepcionais ao usuário.</DescriptionHome>
                <p>Disponível para trabalhos.</p>
                <CV onClick={handleDownloadCV} name="CV" download>
                    <FaFilePdf />
                    CV
                </CV>
                <Faixa>
                    <p>Disponível para trabalho.</p>
                </Faixa>
            </InfoHome>
        </HomeContainer>
    );
}

export default Home;

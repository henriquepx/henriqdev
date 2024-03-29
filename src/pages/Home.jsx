import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden;

    overflow-y: auto;
    margin: 0 auto;
    &::-webkit-scrollbar {
        width: 12px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }
    scrollbar-width: thin;
    scrollbar-color: #9c9c9c #1d1d1d;
`;
const HomeSize = styled.div`
    height: 100vh;
    width: 100%;
    margin-left: 30px;

    display: flex;
    justify-content: center;
    flex-direction: column;

`
const InfoHome = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    h1 {
        color: #fff;
        font-size: 3rem;
        font-weight: 700;
        @media (max-width: 499px) {
            font-size: 1.6rem;
        }
        @media (min-width: 500px) and (max-width: 710px) {
            font-size: 2.5rem;
        }
    }
    h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #b9b9b9;
        @media (max-width: 460px) {
            font-size: 1rem;
        }
        @media (max-width: 710px) {
            font-size: 1.2rem;
        }
    }    
`;
const DescriptionHome = styled.h3`
    max-width: 40ch;
    text-align: center;
    color: #fff;

    display: block;
`;
const Faixa = styled.div`
    z-index: 200;
    position:fixed;
    overflow: hidden;
    right: -120px;
    bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    transform: rotate(-45deg);
    background-color: #1a1818;
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
    width: 120px;
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
            <HomeSize>
                <InfoHome>
                    <h1>Henrique Pinheiro</h1>
                    <h2>Desenvolvedor Front-end</h2>
                    <DescriptionHome>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, modi.</DescriptionHome>
                     <CV onClick={handleDownloadCV} name="CV" download>
                        <FaFilePdf />
                        CV
                    </CV>
                    <Faixa>
                        <p>Disponível para trabalho.</p>
                    </Faixa>
                </InfoHome>
            </HomeSize>
        </HomeContainer>
    );
}


export default Home;

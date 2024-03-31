import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';
import Photo from '../assets/eu.jpg';
import { FaArrowLeftLong } from "react-icons/fa6";

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden;
`;
const HomeSize = styled.div`
    margin: 5rem 1.2rem 5rem 5rem;

`
const InfoHome = styled.div`
    display: flex;
    flex-direction: column;
`;
const DivInstruction = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    max-width: 300px;
    color: #fff;
`
const InstructionsSobre = styled.div`
    span {
        margin: 5px;
        font-style: italic;
        color: #fff;
    }
    color: #fff;
    max-width: 40ch;
`
const moveLeft = keyframes`
    0%, 100% {
        transform: translateX(7px);
    }
    50% {
        transform: translateX(0);
    }
`;

const ArrowLeft = styled(FaArrowLeftLong)`
    animation: ${moveLeft} .6s linear infinite;
`;
const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase; 
`;
const TitleDev = styled.h1`
    font-size: 11vw;
    text-transform: uppercase;
    color: #dadada;
    word-break: break-all;
    font-family: "Fjalla One", sans-serif;
`
const DivPhotoText = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
        align-items: normal;
    }
`
const TitleFrontend = styled.h2`
    font-size: 13vw;
    text-transform: uppercase;
    color: #dadada;
    font-family: "Fjalla One", sans-serif;
`
const ImgMe = styled.img`
    width: 260px;
    @media (max-width: 800px) {
        width: 130px;
    }
`

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
                        <DivInstruction>
                            <ArrowLeft />
                            <h2>Navegue pelo portfólio</h2>
                        </DivInstruction>
                        <InstructionsSobre><span>SOBRE</span>Me chamo Henrique Pinheiro. Sou um Desenvolvedor com foco em construções web robustas e interativas utilizando as tecnologias mais modernas do mercado.</InstructionsSobre>
                        <CV onClick={handleDownloadCV} name="CV" download>
                        <FaFilePdf />
                        CV
                    </CV>
                </InfoHome>
                <InfoTitle>
                    <TitleDev>Desenvolvedor</TitleDev>
                    <DivPhotoText>
                        <ImgMe src={Photo} alt="" />
                        <TitleFrontend>Front-end</TitleFrontend>
                    </DivPhotoText>
                    
                </InfoTitle>
                <Faixa>
                    <p>Disponível para trabalho.</p>
                </Faixa>
            </HomeSize>
        </HomeContainer>
    );
}


export default Home;

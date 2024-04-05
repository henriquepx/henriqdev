import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';
import { FaArrowLeftLong } from "react-icons/fa6";

const moveLeft = keyframes`
    0%, 100% {
        transform: translateX(7px);
    }
    50% {
        transform: translateX(0);
    }
`;
const moveTextTitle = keyframes`
    0% {
        transform: translateY(200px);
    }
    100% {
        transform: translateX(0);
    }
`;
const moveTextSubitle = keyframes`
    0% {
        transform: translateY(200px);
    }
    100% {
        transform: translateX(0);
    }
`;
const moveTexts = keyframes`
    0% {
        transform: translateY(-200px);
    }
    100% {
        transform: translateX(0);
    }
`;
const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden;
`;
const HomeSize = styled.div`
    margin: 5.7rem 1.2rem 5rem 5rem;

`
const InfoHome = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    animation: ${moveTexts} 1s forwards;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
const InfoLinks = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    a {
        font-family: "Urbanist", sans-serif;
        color: #fff;
    }
`;
const InfoAvailable = styled.div`
    text-align: right;
    @media (max-width: 937px) {
        text-align: left;
    }
    p {
        font-family: "Urbanist", sans-serif;
        color: #fff;
    }
`;
const DivInstruction = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: .5rem;
    max-width: 300px;
    color: #fff;
     h2 {
        font-family: "Urbanist", sans-serif;
     }
`
const InstructionsSobre = styled.div`
    span {
        margin: 5px;
        color: #888888;
        font-size: .8rem;
    }
    color: #fff;
    max-width: 40ch;
    font-family: "Urbanist", sans-serif;
`
const ArrowLeft = styled(FaArrowLeftLong)`
    animation: ${moveLeft} .6s linear infinite;
`;
const InfoTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    text-transform: uppercase;
    margin-top: -2rem;
`;
const TitleDev = styled.h1`
    font-size: 6vw;
    text-transform: uppercase;
    color: #979797;
    font-family: "Fjalla One", sans-serif;
    display: block;
    animation: ${moveTextSubitle} 1s forwards;
    margin-top: 7rem;
    @media (max-width: 400px) {
        margin-top: 3.5rem;
    }
    &:hover {
        color: #ffffff;
    }
    @media (max-width: 800px) {
        display: none;
        font-size: 12vw;
    }
`
const TitleDev2 = styled(TitleDev)`
    display: none;
    @media (max-width: 800px) {
        display: block;
    }

`
const TitleFrontend = styled.h2`
    font-size: 18vw;
    text-transform: uppercase;
    color: #979797;
    font-family: "Fjalla One", sans-serif;
    animation: ${moveTextTitle} 1s forwards;
    margin-top: -1.5rem;
    margin-bottom: 2rem;
    &:hover {
        color: #ffffff;
    }
    @media (max-width: 1280px) {
        font-size: 18vw;
        margin-top: 1rem;
    }
`
const CV = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #b9b9b9;
    border: 1px solid #8b8b8b;
    border-radius: 15px;
    width: 120px;
    padding: .3rem 2rem;
    margin-top: .5rem;
    cursor: pointer;
    margin-left: auto;
    @media (max-width: 937px) {
        margin-left: 0;
        margin-right: auto;
    }
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
                    <div>
                        <DivInstruction>
                            <ArrowLeft />
                            <h2>Navegue pelo portfólio</h2>
                        </DivInstruction>
                        <InstructionsSobre><span>SOBRE</span>Me chamo Henrique Pinheiro. Sou um Desenvolvedor com foco em construções web robustas e interativas utilizando as tecnologias mais modernas do mercado.</InstructionsSobre>
                    </div>
                    <InfoLinks>
                        <a href="#" target='_blank' rel='noreferrer'>henriquepinheiroxavier@gmail.com</a>
                    </InfoLinks>
                    <InfoAvailable>
                            <p>Disponível para trabalho <br />& Freelance</p>
                            <CV onClick={handleDownloadCV} name="CV" download>
                            CV
                            <FaFilePdf />
                        </CV>
                    </InfoAvailable>
                </InfoHome>
                <InfoTitle>
                    <TitleDev>Desenvolvedor</TitleDev>
                    <TitleDev2>Dev</TitleDev2>
                    <TitleFrontend>Front-end</TitleFrontend>
                </InfoTitle>
            </HomeSize>
        </HomeContainer>
    );
}


export default Home;

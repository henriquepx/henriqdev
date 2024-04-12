import styled, {keyframes} from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';
import { FaArrowLeftLong } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { useTranslation } from "react-i18next";

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
    position: relative;
    margin: 5.7rem 1.2rem 8rem 5rem;

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
        display: flex;
        align-items: center;
        gap: 5px;
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
    margin-bottom: 7rem;
    &:hover {
        color: #ffffff;
    }
    @media (max-width: 1280px) {
        font-size: 18vw;
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
    margin-top: .8rem;
    cursor: pointer;
`
const Faixa = styled.div`
    position:fixed;
    overflow: hidden;
    right: -110px;
    bottom: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    transform: rotate(-45deg);
    background-color: #181818;
    p {
        color: #dad9d9;
    }
`

const Home = () => {

    const { t } = useTranslation();

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
                            <h2>{t('home.introHome')}</h2>
                        </DivInstruction>
                        <InstructionsSobre><span>{t('home.aboutHome')}</span>{t('home.descriptionHome')}</InstructionsSobre>
                        <CV onClick={handleDownloadCV} name="CV" download>
                            CV
                            <FaFilePdf />
                            </CV>
                    </div>
                    <InfoLinks>
                        <a href="#" target='_blank' rel='noreferrer'><SiMinutemailer size={22} />henriquepinheiroxavier@gmail.com</a>
                    </InfoLinks>
                </InfoHome>
                <InfoTitle>
                    <TitleDev>{t('home.devHome')}</TitleDev>
                    <TitleDev2>Dev</TitleDev2>
                    <TitleFrontend>Front-end</TitleFrontend>
                </InfoTitle>
                <Faixa>
                    <p>{t('home.faixaHome')}</p>
                </Faixa>
            </HomeSize>
        </HomeContainer>
    );
}


export default Home;

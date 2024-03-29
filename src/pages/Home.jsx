import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';
import { FaFilePdf } from 'react-icons/fa6';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden;
`;
const HomeSize = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-left: 70px;
    padding: 1.5rem 0;
    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 20px;
        align-items: normal;
    }
`
const InfoHome = styled.div`
    margin: 2rem 0;
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
    max-width: 90ch;
    padding: 0rem 7rem 0 .5rem;
    border-left: 2px solid #a7a6a6;
    color: #fff;
    margin: 1rem 0;

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
    width: 120px;
    padding: .3rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
`
const DivIntroduction = styled.div`
`
const DivIntroductionSize = styled.div`
    position: relative;
    &::before {
        content: " ";
        width: 90px;
        height: 90px;
        background: linear-gradient(135deg, #5a5a5a 0%, #0a0a0a 50%, #494949 100%);
        opacity: 1;
        border-top-left-radius: 8px;
        transition: all .3s ease-in-out;
        position: absolute;
        top: -4px;
        bottom: 0;
        left: -4px;
    }
`
const DivNavegate = styled.div`
    z-index: 1;
    background: #2e2e2e;
    border-top-left-radius: 7px;
    flex-direction: column;
    margin-left: 0;
    padding: 1rem;
    display: flex;
    position: relative;
    color: #fff;
    a {
        display: inline-block;
        position: relative;
        margin: 5px 0;
        span {
            color: #fff;
            position: relative;
            &::before {
                content: "";
                height: 1px;
                width: 100%;
                background: linear-gradient(270deg, #5a5a5a 0%, #0a0a0a 50%, #494949 100%);
                opacity: 1;
                transition: all .3s ease-in-out;
                display: inline-block;
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
            }

        }
    }
    p {
        display: block;
        margin-bottom: 1.2rem;

        max-width: 70ch;
        color: #fff;
        padding-right: 4rem;
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
                    <h1>Henrique Pinheiro</h1>
                    <DescriptionHome>Jovem Desenvolvedor Front-end especializado na construção de experiências digitais excepcionais, trago minha paixão por criar interfaces web robustas e escaláveis. Com proficiência nos principais frameworks para a Web, meu foco reside em transformar ideias em realidade, garantindo que cada interação seja intuitiva e envolvente para o usuário.</DescriptionHome>
                     <CV onClick={handleDownloadCV} name="CV" download>
                        <FaFilePdf />
                        CV
                    </CV>
                    <Faixa>
                        <p>Disponível para trabalho.</p>
                    </Faixa>
                </InfoHome>

                <DivIntroduction>
                    <DivIntroductionSize>
                        <DivNavegate>
                            <p>Esse portfólio é uma interface inspirada no VisualStudioCode. <br />Navegue clicando nos links abaixo ou nos ícones no canto superior esquerdo.</p>
                            <Link to="/projects"><span>Projetos</span></Link>
                            <Link to="/skills"><span>Habilidades</span></Link>
                            <Link to="/contact"><span>Contato</span></Link>
                        </DivNavegate>
                    </DivIntroductionSize>
                </DivIntroduction>
            </HomeSize>
            
        </HomeContainer>
    );
}

export default Home;

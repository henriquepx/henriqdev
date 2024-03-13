import styled from 'styled-components';
import TabFiles from './Layout/TabFiles';

const HomeContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
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
    position: absolute;
    right: -90px;
    bottom: 140px;
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

const Home = () => {
    return (
        <HomeContainer>
            <TabFiles activeTab='Home' />
            <InfoHome>
                <h1>Henrique Pinheiro</h1>
                <h2>Desenvolvedor Front-end</h2>
                <DescriptionHome>Apaixonado por criar interfaces web robustas e escaláveis que proporcionam experiências excepcionais ao usuário.</DescriptionHome>
                <p>Disponível para trabalhos.</p>
                <Faixa>
                    <p>Disponível para trabalho.</p>
                </Faixa>
            </InfoHome>
        </HomeContainer>
    );
}

export default Home;

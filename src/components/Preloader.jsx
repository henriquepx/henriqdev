import styled, { keyframes } from 'styled-components';
import { VscFiles } from 'react-icons/vsc';
import { RiComputerFill } from 'react-icons/ri';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa6';
import Loader from './Loader';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PreloaderBg = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgb(31, 31, 31);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    animation: ${fadeIn} 2s forwards;
    padding: 1.5rem;
`
const PIntro = styled.p`
    color: #CCCCCC99;
    max-width: 50ch;
    text-align: center;
    font-style: italic;
    font-size: .8rem;
`
const VSCodeImgIcon = styled.div`
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 40 40'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M30.235 39.884a2.5 2.5 0 0 1-1.781-.73L12.7 24.78l-3.46 2.624-3.406 2.582a1.67 1.67 0 0 1-1.082.338 1.66 1.66 0 0 1-1.046-.431l-2.2-2a1.666 1.666 0 0 1 0-2.463L7.458 20 4.67 17.453 1.507 14.57a1.665 1.665 0 0 1 0-2.463l2.2-2q.033-.03.068-.058a1.665 1.665 0 0 1 2.062-.04l6.863 5.21L28.452.844q.14-.138.3-.254a2.5 2.5 0 0 1 1.541-.475c.351.009.699.091 1.019.245l8.236 3.961a2.5 2.5 0 0 1 1.415 2.253v.099-.045V33.37v-.045.095q0 .142-.016.282a2.5 2.5 0 0 1-1.4 1.975l-8.235 3.961a2.5 2.5 0 0 1-1.077.246m.716-28.947-11.948 9.062 11.952 9.065z' clip-rule='evenodd' opacity='.3'/%3E%3C/svg%3E");
    aspect-ratio: 1 / 1;
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-height: 18%;
    width: 18%;
    @media (max-width: 500px) {
        max-height: 20%;
        width: 20%;
    }
`
const NavegationPrealoder = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const ExplanationOfIcons = styled.div`
    display: flex;
    align-items: left;
    gap: 10px;
    width: 100%;
    p {
      color:  #CCCCCC99;
      font-weight: 500;
      font-size: .7rem;
    }
    img {
        width: 30px;
    }
`  



const Preloader = () => {
  return (
      <PreloaderBg>
        <VSCodeImgIcon />
        <PIntro>Portfólio inspirado na interface do VisualStudioCode. <br />Navegue através dos ícones no canto superior esquerdo. A página ativa estará destacada.</PIntro>
        <NavegationPrealoder>
                <ExplanationOfIcons>
                  <p>Página inicial:</p>
                  <VscFiles size={20} color='#7c7c74'/>
                </ExplanationOfIcons>
                <ExplanationOfIcons>
                  <p>Página Projetos:</p>
                  <RiComputerFill size={20} color='#7c7c74'/>
                </ExplanationOfIcons>
                <ExplanationOfIcons>
                  <p>Página Habilidades:</p>
                  <IoCodeSlashOutline size={20} color='#7c7c74'/>
                </ExplanationOfIcons>
                <ExplanationOfIcons>
                  <p>Página Contato:</p>
                  <FaEnvelope size={20} color='#7c7c74'/>
                </ExplanationOfIcons>
      </NavegationPrealoder> 
      <Loader />
    </PreloaderBg>
  )
}

export default Preloader
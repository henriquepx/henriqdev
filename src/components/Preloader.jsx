import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {  
        transform: rotate(0)
    }
    100% { 
        transform: rotate(360deg)
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
    padding: 1.5rem;
`
const Loader = styled.span`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 3rem 0;
    &::before, &::after {
        content: '';
        border-radius: 50%;
        position: absolute;
        inset: 0;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
    }
    &::after {
        box-shadow: 0 2px 0 #464646 inset;
        animation: ${rotate} 2s linear infinite;
    }
`;


const Preloader = () => {
  return (
      <PreloaderBg>
        <Loader />
    </PreloaderBg>
  )
}

export default Preloader
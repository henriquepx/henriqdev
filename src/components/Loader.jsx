import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {  transform: rotate(0)}
    100% { transform: rotate(360deg)}
`;

const Loader = styled.span`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 5rem;
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

export default Loader;
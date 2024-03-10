import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconSide = styled.a`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: grid;
    height: 50px;
    place-content: center;
    position: relative;
    width: 100%;

    span {
        background-color: ${({ active }) => (active ? '#005d6d' : '#181818')};
        height: 100%;
        left: 1px;
        position: absolute;
        width: 1.5px;
    }

    svg {
        cursor: pointer;
        color: #7e7b74;
    }

`;

const IconSide = ({ icon, active, link, onClick, ...rest }) => {
    return (
        <StyledIconSide active={active} href={link} onClick={onClick} {...rest}>
            <span></span>
            {icon}
        </StyledIconSide>
    );
};

IconSide.propTypes = {
    icon: PropTypes.element.isRequired,
    active: PropTypes.bool.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

export default IconSide;

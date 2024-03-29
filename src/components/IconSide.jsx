import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconSide = styled.div`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: grid;
    height: 47px;
    place-content: center;
    position: relative;
    width: 100%;

    span {
        background-color: ${({ active }) => (active ? '#008ba3' : '#181818')};
        height: 100%;
        left: 1px;
        position: absolute;
        width: 2px;
    }

    svg {
        cursor: pointer;
        color: #7e7b74;
        color: ${({ active }) => (active ? '#ffffff;' : '#7e7b74')};
        &:hover {
            color: #ffffff;
        }
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
    active: PropTypes.bool,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

export default IconSide;

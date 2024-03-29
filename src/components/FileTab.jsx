import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFileTab = styled.div`
    display: none;
    align-items: center;
    background-color: #2e2e2e;
    gap: 5px;
    padding: .4rem 1rem .4rem .6rem;
    border-top: 1px solid white;
    img {
        width: 17px;
    }

    ${({ active }) => active &&`
        display: flex;
        span {
            color: #fff;
        }
    `}
`;

const FileTab = ({ nameFile, imgIcon, altIcon, active }) => {
    return (
        <StyledFileTab active={active}>
            <img src={imgIcon} alt={altIcon} />
            <span>{nameFile}</span>
        </StyledFileTab>
    );
};

FileTab.propTypes = {
    nameFile: PropTypes.string.isRequired,
    imgIcon: PropTypes.string.isRequired,
    altIcon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

export default FileTab;

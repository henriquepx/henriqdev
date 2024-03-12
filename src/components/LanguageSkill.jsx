import styled from 'styled-components';
import PropTypes from 'prop-types';

const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #1d1d1d;
    padding: .5rem .4rem .5rem .6rem;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #1d1d1d;

    width: 350px;
    @media (max-width: 350px) {
        width: 300px;
    }
    &:hover {
        background-color: #242323;
        border: 1px solid #333232;
    }
    img {
        width: 30px;
    }
    div {
        h1 {
            font-family: 'Montserrat', sans-serif;
            color: #fffdfd;
        }
        p {
            font-family: 'Montserrat', sans-serif;
            color: #8a8a8a;
            font-size: .8rem;
        }
    }
`

const LanguageSkill = ({ icon, title, description }) => {
  return (
    <LanguageContainer>
        <img src={icon} alt="" />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </LanguageContainer>
  )
}

LanguageSkill.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default LanguageSkill;
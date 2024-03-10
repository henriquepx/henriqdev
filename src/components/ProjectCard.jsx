import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  img {
    width: 340px;
    @media (max-width: 320px) {
      width: 240px;
    }
    @media (min-width: 321px) and (max-width: 400px) {
      width: 270px;
    }
    @media (min-width: 401px) and (max-width: 500px) {
      width: 320px;
    }
  }
`;

const TextProject = styled.div`
  display: flex;
  justify-content: space-between;
  h1, p {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`;

const ProjectCard = ({ imgProject, altImg, titleProject, descProject }) => {
  return (
    <ProjectCardContainer>
      <img src={imgProject} alt={altImg} />
      <TextProject>
        <h1>{titleProject}</h1>
        <p>{descProject}</p>
      </TextProject>
    </ProjectCardContainer>
  );
};

ProjectCard.propTypes = {
  imgProject: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  altImg: PropTypes.string.isRequired,
  titleProject: PropTypes.string.isRequired,
  descProject: PropTypes.string,
};

export default ProjectCard;

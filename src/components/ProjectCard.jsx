import PropTypes from 'prop-types';
import styled from 'styled-components';


const BlogCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  z-index: 0;
  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 800px;
    height: 200px;
  }
`;

const MetaWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const PhotoWrapper = styled.img`
  width: 300px;
  @media (max-width: 450px) {
    width: 200px;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(31, 31, 31);
  text-align: left;
  padding: 1rem;
  h1 {
    font-size: 1.6rem;
    color: #ffffff;
    font-family: 'Monserrat', sans-serif;
  }
  h2 {
    font-size: 1rem;
    font-weight: 300;
    color: #e4e4e4;
  }
  p {
    position: relative;
    margin: .2rem 0 0;
    margin-top: 1.25rem;
    color: #ebebeb;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      background: #3b3b3b;
      width: 35px;
      top: -0.75rem;
    }
  }
`;

const ProjectCard = ({ linkProject, languagesProject, imgProject, titleProject, descProject }) => {
  return (
    <BlogCardWrapper href={linkProject} target='_blank' rel='noreferrer'>
      <MetaWrapper>
        <PhotoWrapper src={imgProject} />
      </MetaWrapper>
      <DescriptionWrapper>
        <div>
          <h1>{titleProject}</h1>
          <h2>{descProject}</h2>
        </div>
        <p>{languagesProject}</p>
      </DescriptionWrapper>
    </BlogCardWrapper>
  );
};

ProjectCard.propTypes = {
  imgProject: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  languagesProject: PropTypes.string.isRequired,
  linkProject: PropTypes.string.isRequired,
  titleProject: PropTypes.string.isRequired,
  descProject: PropTypes.string,
};

export default ProjectCard;

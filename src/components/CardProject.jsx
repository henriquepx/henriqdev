import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  background-color: #636363;
  border-radius: 8px;
  z-index: 1;
  transition: 0.5s;
`;
const Header = styled.div`
  margin: 5px;
  margin-top: 5px;
  border-radius: 5px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
const Circle = styled.div`
  padding: 0 4px;
`;
const CircleDot = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 5px;
`;
const RedDot = styled(CircleDot)`
  background-color: #ff605c;
`;
const YellowDot = styled(CircleDot)`
  background-color: #ffbd44;
`;
const GreenDot = styled(CircleDot)`
  background-color: #00ca4e;
`;
const CodeContainer = styled.div`
  text-align: center;
`;
const CodeTextarea = styled.textarea`
  width: 270px;
  height: 150px;
  resize: none;
  background-color: rgb(48, 48, 48);
  border-radius: 10px;
  border: none;
  color: white;
  padding: 10px;
  margin: 0 13px;
  &:focus {
    outline: none !important;
  }
`;
const TopSize = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ImageContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 200px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const LinksToProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 0 auto;
  margin-top: .3rem;
`;
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: .5rem 1rem;
  border-radius: 5px;
  width: 50%;
  background-color: #4e4e4e;
`;

const CardProject = ({ codeContentKey, linkDeploy, linkRepository, backgroundImage }) => {

  const { t, i18n } = useTranslation();
  const [translatedCodeContent, setTranslatedCodeContent] = useState('');

  useEffect(() => {
    setTranslatedCodeContent(t(codeContentKey));
  }, [codeContentKey, i18n.language, t]);

  return (
    <CardContainer>
      <Header>
        <TopContainer>
          <TopSize>
            <Circle>
              <RedDot />
            </Circle>
            <Circle>
              <YellowDot />
            </Circle>
            <Circle>
              <GreenDot />
            </Circle>
          </TopSize>
        </TopContainer>
      </Header>
      <ImageContainer backgroundImage={backgroundImage} />
      <CodeContainer>
        <CodeTextarea readOnly name="code" id="code" className="area" value={translatedCodeContent} />
      </CodeContainer>
      <LinksToProject>
        <Link href={linkRepository} target='_blank' rel='noreferrer'>
          <FaGithub style={{ marginRight: '5px' }} />
          Github
        </Link>
        <Link href={linkDeploy} target='_blank' rel='noreferrer'>
          <FaExternalLinkAlt style={{ marginRight: '5px' }} />
          Deploy
        </Link>
      </LinksToProject>
    </CardContainer>
  );
};

CardProject.propTypes = {
  codeContentKey: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    linkRepository: PropTypes.string.isRequired,
    linkDeploy: PropTypes.string.isRequired
  };

export default CardProject;

import ProjectCard from '../components/ProjectCard'
import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import DevInsights from '../assets/projects/devinsights.png';
import DsmBg from '../assets/projects/dsmbg.jpg';
import JapaCard from '../assets/projects/japabg.jpg';

const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    @media (max-width: 800px) {
        padding: .5rem;
    }
`
const ProjectSize = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 25px;
`



const Projects = () => {
    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <h1>Projects that I made</h1>
            <ProjectSize>
                <ProjectCard
                    imgProject={DsmBg}
                    altImg="Imagem do Projeto1"
                    titleProject="Projeto1"
                    descProject="blablablabla"
                />
                <ProjectCard
                    imgProject={JapaCard}
                    altImg="Imagem do Projeto1"
                    titleProject="Projeto1"
                    descProject="blablablabla"
                />
                <ProjectCard
                    imgProject={JapaCard}
                    altImg="Imagem do Projeto1"
                    titleProject="Projeto1"
                    descProject="blablablabla"
                />
            </ProjectSize>
        </ProjectContainer>
    )
}

export default Projects
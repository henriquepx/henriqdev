import ProjectCard from '../components/ProjectCard'
import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import DevInsights from '../assets/devphoto.jpg'
import Photographer from '../assets/photobg.jpg'

const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
`
const ProjectAdjust = styled.div`
    padding: 1rem;
    margin: 2rem 1rem 0rem 2.2rem;
`
const ProjectSize = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 35px;

    overflow-y: auto; 
    &::-webkit-scrollbar {
        width: 12px; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #505050; 
        border-radius: 6px; 
    }
    &::-webkit-scrollbar-track {
        background-color: #1d1d1d;
    }
    scrollbar-width: thin;
    scrollbar-color: #9c9c9c #1d1d1d;
`

const Projects = () => {
    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <ProjectAdjust>
                <ProjectSize>
                    <ProjectCard
                        imgProject={DevInsights}
                        titleProject="Dev Insights"
                        descProject="Blog pessoa com meus artigos de programação."
                        linkProject='https://dev-insights-self.vercel.app/'
                        languagesProject='ReactJS, Styled Components & React Router Dom'
                    />
                    <ProjectCard
                        imgProject={Photographer}
                        titleProject="Photographer Protótipo"
                        descProject="Blog pessoa com meus artigos de programação."
                        linkProject='https://dev-insights-self.vercel.app/'
                        languagesProject='ReactJS, Styled Components & React Router Dom'
                    />
                </ProjectSize>
            </ProjectAdjust>
            
        </ProjectContainer>
    )
}

export default Projects
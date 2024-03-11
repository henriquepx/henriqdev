import ProjectCard from '../components/ProjectCard'
import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import DevInsights from '../assets/devphoto.jpg'
import Photographer from '../assets/photobg.jpg'

const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
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
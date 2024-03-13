import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import DevInsights from '../assets/devphoto.jpg'
import Photographer from '../assets/photobg.jpg'
import CardProject from '../components/CardProject'

const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
`
const ProjectAdjust = styled.div`
    padding: 1rem 4rem;
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 

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
const ProjectSize = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-left: 35px;
`

const Projects = () => {
    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <ProjectAdjust>
                <ProjectSize>
                    <CardProject
                        title="Dev Insights"
                        codeContent={`project1 {
    name: 'DevInsights',
    stacks: 'ReactJS, Styled Components & React Router Dom'
}`}
                        backgroundImage={DevInsights}
                    />
                    <CardProject
                        title="Photographer Protótipo"
                        codeContent={`project2 {
    name: 'PhotographerPortfólio',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={Photographer}
                    />


                </ProjectSize>
            </ProjectAdjust>
            
        </ProjectContainer>
    )
}

export default Projects
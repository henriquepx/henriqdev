import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import Photographer from '../assets/projects/PortfolioPhotographer.png'
import DSM from '../assets/projects/DSM.png'
import Portfoliov1 from '../assets/projects/Portfoliov1.png'
import Japapou from '../assets/projects/Japapou.png'
import Rexpeita from '../assets/projects/Rexpeita.png'
import Dev from '../assets/projects/dev.png'
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
    @media (max-width: 420px) {
        margin-left: 3px;
    }
`

const Projects = () => {
    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <ProjectAdjust>
                <ProjectSize>
                    <CardProject
                        codeContent={`project1 {
    name: 'DevInsights',
    stacks: 'ReactJS, Styled Components & React Router Dom'
}`}
                        backgroundImage={Dev}
                    />
                    <CardProject
                        codeContent={`project2 {
    name: 'Portfólio v1',
    stacks: 'ReactJS, Styled Components, React Router Dom, i18next, FileSaver, React-icons'
}`}
                        backgroundImage={Portfoliov1}
                    />
                    <CardProject
                        codeContent={`project3 {
    name: 'PhotographerPortfólio',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={Photographer}
                    />
                    <CardProject
                        codeContent={`project4 {
    name: 'Japapou?',
    stacks: 'ReactJS & CSS Modules'
}`}
                        backgroundImage={Japapou}
                    />
                    <CardProject
                        codeContent={`project5 {
    name: 'DSM Consultoria',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={DSM}
                    />
                    <CardProject
                        codeContent={`project6 {
    name: 'Rexpeita',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={Rexpeita}
                    />
                </ProjectSize>
            </ProjectAdjust>
            
        </ProjectContainer>
    )
}

export default Projects
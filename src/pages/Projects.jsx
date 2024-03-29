import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'
import Photographer from '../assets/projects/PortfolioPhotographer.png'
import DSM from '../assets/projects/DSM.png'
import Portfoliov1 from '../assets/projects/Portfoliov1.png'
import Japapou from '../assets/projects/Japapou.png'
import Dev from '../assets/projects/dev.png'
import CardProject from '../components/CardProject'
import GithubProject from '../assets/projects/Gitrepositories.png'

const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
    padding: 3rem 0;
`
const ProjectAdjust = styled.div`
    padding: 1rem 4.2rem;
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 
    margin-top: 3rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 3rem;
    @media (max-width: 420px) {
        margin-left: 55px;
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
                        linkDeploy='dev-insights-self.vercel.app'
                        linkRepository='https://github.com/henriquepx/dev-insights'
                    />
                    <CardProject
                        codeContent={`project2 {
    name: 'Portfólio v1',
    stacks: 'ReactJS, Styled Components, React Router Dom, i18next, FileSaver, React-icons'
}`}
                        backgroundImage={Portfoliov1}
                        linkDeploy='portfolio-henriquepx.vercel.app/'
                        linkRepository='https://github.com/henriquepx/my_portfolio'
                    />
                    <CardProject
                        codeContent={`project3 {
    name: 'Github Repositórios',
    stacks: 'React, TypeScriot, API com Axios, Sass'
}`}
                        backgroundImage={GithubProject}
                        linkDeploy='https://githubapi-repositories.vercel.app/'
                        linkRepository='https://github.com/henriquepx/github_repositories'
                    />
                    <CardProject
                        codeContent={`project4 {
    name: 'PhotographerPortfólio',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={Photographer}
                        linkDeploy='photographerportfolio.vercel.app/'
                        linkRepository='https://github.com/henriquepx/photographer_portfolio'
                    />
                    <CardProject
                        codeContent={`project5 {
    name: 'Japapou?',
    stacks: 'ReactJS & CSS Modules'
}`}
                        backgroundImage={Japapou}
                        linkDeploy='app-order-food.vercel.app'
                        linkRepository='https://github.com/henriquepx/app-order-food'
                    />
                    <CardProject
                        codeContent={`project6 {
    name: 'DSM Consultoria',
    stacks: 'HTML, CSS & JavaScript'
}`}
                        backgroundImage={DSM}
                        linkDeploy='dsmconsultoria.vercel.app/'
                        linkRepository='https://github.com/henriquepx/dsm'
                    />
                </ProjectSize>
            </ProjectAdjust>
        </ProjectContainer>
    )
}

export default Projects
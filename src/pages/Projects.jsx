import TabFiles from './Layout/TabFiles'
import styled, { keyframes } from 'styled-components'
import Photographer from '../assets/projects/PortfolioPhotographer.png'
import DSM from '../assets/projects/DSM.png'
import Portfoliov1 from '../assets/projects/Portfoliov1.png'
import Japapou from '../assets/projects/Japapou.png'
import Dev from '../assets/projects/dev.png'
import CardProject from '../components/CardProject'
import GithubProject from '../assets/projects/Gitrepositories.png'
import QuizProject from '../assets/projects/quiz.png'

const showingContent = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;
const ProjectContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    overflow: hidden; 
`
const ProjectAdjust = styled.div`
    padding: 3rem 4.2rem 3rem 4.2rem;
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    max-height: calc(100vh - 6.3rem); 
    margin-top: 3rem;
    animation: ${showingContent} 1s forwards;
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
                        codeContentKey='project.codeContent1'
                        backgroundImage={Dev}
                        linkDeploy='dev-insights-self.vercel.app'
                        linkRepository='https://github.com/henriquepx/dev-insights'
                    />
                    <CardProject
                        codeContentKey='project.codeContent2'
                        backgroundImage={QuizProject}
                        linkDeploy='https://quizprogramation.vercel.app/'
                        linkRepository='https://github.com/henriquepx/quiz_game'
                    />
                    <CardProject
                        codeContentKey='project.codeContent3'
                        backgroundImage={Portfoliov1}
                        linkDeploy='portfolio-henriquepx.vercel.app/'
                        linkRepository='https://github.com/henriquepx/my_portfolio'
                    />
                    <CardProject
                        codeContentKey='project.codeContent4'
                        backgroundImage={GithubProject}
                        linkDeploy='https://githubapi-repositories.vercel.app/'
                        linkRepository='https://github.com/henriquepx/github_repositories'
                    />
                    <CardProject
                        codeContentKey='project.codeContent5'
                        backgroundImage={Japapou}
                        linkDeploy='app-order-food.vercel.app'
                        linkRepository='https://github.com/henriquepx/app-order-food'
                    />
                    <CardProject
                        codeContentKey='project.codeContent6'
                        backgroundImage={Photographer}
                        linkDeploy='photographerportfolio.vercel.app/'
                        linkRepository='https://github.com/henriquepx/photographer_portfolio'
                    />
                    <CardProject
                        codeContentKey='project.codeContent7'
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
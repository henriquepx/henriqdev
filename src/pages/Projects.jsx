import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'

const ProjectContainer = styled.div`

`

const Projects = () => {
    return (
        <ProjectContainer>
            <TabFiles activeTab='Projects' />
            <h1>Projects</h1>
        </ProjectContainer>
    )
}

export default Projects
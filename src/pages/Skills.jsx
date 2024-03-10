import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'

const SkillsContainer = styled.div`

`

const Skills = () => {
    return (
        <SkillsContainer>
            <TabFiles activeTab='Skills' />
            <h1>Skills</h1>
        </SkillsContainer>
    )
}

export default Skills
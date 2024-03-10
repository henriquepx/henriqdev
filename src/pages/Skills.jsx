import TabFiles from './Layout/TabFiles'
import styled from 'styled-components'

const SkillsContainer = styled.div`
    position: relative;
    height: calc(100vh - 6.3);
    width: 100%;
    @media (max-width: 800px) {
        padding: .5rem;
    }
`
const SkillsSize = styled.div`
    padding-left: 50px;
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Skills = () => {
    return (
        <SkillsContainer>
            <TabFiles activeTab='Skills' />
            <h1>Skills</h1>
            <SkillsSize>

            </SkillsSize>
        </SkillsContainer>
    )
}

export default Skills
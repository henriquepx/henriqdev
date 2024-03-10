import styled from 'styled-components'
import TabFiles from './Layout/TabFiles'

const GithubContainer = styled.div`

`

const Github = () => {
    return (
        <GithubContainer>
            <TabFiles activeTab='Github' />
            <h1>Github</h1>
        </GithubContainer>
    )
}

export default Github
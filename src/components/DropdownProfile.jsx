
import styled from 'styled-components'

const DropdownProfileContainer = styled.div`
    position: absolute;
    bottom: 110px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 230px;
    height: 65px;
    border: 1.5px solid rgb(87, 87, 87);
    border-radius: 5px;
    padding: .5rem;

    h1 {
        color: #fff;
    }
`

const DropdownProfile = () => {
    return (
        <DropdownProfileContainer>
            <h1>&quot;A determinação de hoje é o sucesso de amanhã.&quot;</h1>
        </DropdownProfileContainer>
    )
}

export default DropdownProfile
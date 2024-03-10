
import styled from 'styled-components'

const DropdownProfileContainer = styled.div`
    position: absolute;
    bottom: 120px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 230px;
    height: 40px;
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
            <h1>Olá, me chamo Henrique! xD</h1>
        </DropdownProfileContainer>
    )
}

export default DropdownProfile
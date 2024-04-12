
import styled from 'styled-components'

const DropdownProfileContainer = styled.div`
    position: absolute;
    bottom: 4px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 70px;
    height: 50px;
    border: 1.5px solid rgb(87, 87, 87);
    border-radius: 5px;
    padding: .5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    a {
        color: #fff;
    }
`

const DropdownProfile = () => {
    return (
        <DropdownProfileContainer>
            <a href="#">PT</a>
            <a href="#">EN</a>
        </DropdownProfileContainer>
    )
}

export default DropdownProfile
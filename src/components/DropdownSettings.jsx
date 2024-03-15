import styled from 'styled-components'

const DropdownSettingsContainer = styled.div`
    position: absolute;
    bottom: 8px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 130px;
    height: 30px;
    border: 1.5px solid rgb(87, 87, 87);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const ChangeLanguageA = styled.a`
    color: #fff;
`


const DropdownSettings = () => {
    return (
        <DropdownSettingsContainer>
            <ChangeLanguageA href="#">PT</ChangeLanguageA>
            <ChangeLanguageA href="#">EN</ChangeLanguageA>
        </DropdownSettingsContainer>
    )
}

export default DropdownSettings
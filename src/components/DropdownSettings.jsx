import styled from 'styled-components'

const DropdownSettingsContainer = styled.div`
    position: absolute;
    bottom: 60px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 130px;
    height: 130px;
    border: 1.5px solid rgb(87, 87, 87);
    border-radius: 5px;
`
const Settings = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem 1rem;

    a {
        color: #fff;
        font-size: .5rem;
        margin: 2px 0;
    }
`
const Settings2 = styled(Settings)`
    border-bottom: 1.5px solid rgb(87, 87, 87);
`


const DropdownSettings = () => {
    return (
        <DropdownSettingsContainer>
            <Settings className='settings1'>
                <a href="#">PT</a>
                <a href="#">EN</a>
            </Settings>

            <Settings2 className='settings2'>
                <a href="#">Light Mode</a>
                <a href="#">Dark Mode</a>
            </Settings2>
        </DropdownSettingsContainer>
    )
}

export default DropdownSettings
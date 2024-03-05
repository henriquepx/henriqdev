import './DropdownSettings.css'

const DropdownSettings = () => {
    return (
        <div className='dropdownSettingsContainer'>
            <div className='settings1'>
                <a href="#">PT</a>
                <a href="#">EN</a>
            </div>

            <div className='settings2'>
                <a href="#">Light Mode</a>
                <a href="#">Dark Mode</a>
            </div>
        </div>
    )
}

export default DropdownSettings
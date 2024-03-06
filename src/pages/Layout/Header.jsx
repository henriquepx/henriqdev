import './Header.css'
import { IoCodeSlash } from "react-icons/io5";
import { VscLayoutSidebarLeft, VscMenu, VscLayoutPanelOff, VscLayoutSidebarRightOff, VscLayout, VscChromeMinimize, VscChromeRestore, VscChromeClose } from "react-icons/vsc";

const Header = () => {
    return (
        <header className='container'>
            <div className='header1'>
                <IoCodeSlash size={20} />
                <VscMenu className='hamburger' />
                <p>File</p>
                <p>Edit</p>
                <p>Selection</p>
                <p>View</p>
                <p>Go</p>
                <p>Run</p>
                <p>Terminal</p>
                <p>Help</p>
            </div>
            <div className='header2'>
                <VscLayoutSidebarLeft />
                <VscLayoutPanelOff />
                <VscLayoutSidebarRightOff />
                <VscLayout />
                <div>
                    <VscChromeMinimize />
                    <VscChromeRestore />
                    <VscChromeClose />
                </div>
            </div>
        </header>
    )
}

export default Header
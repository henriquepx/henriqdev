import './Side.css';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAltSmall, VscExtensions, VscAccount, VscSettingsGear } from "react-icons/vsc";

const Side = () => {
    return (
        <aside>
            <div className='aside1'>
                <div className='iconaside active'>
                    <span className='sidebaractive'></span>
                    <VscFiles size={24} />
                </div>
                <div className='iconaside'>
                    <span className='sidebaractive'></span>
                    <VscSearch size={24} />
                </div>
                <div className='iconaside'>
                    <span className='sidebaractive'></span>
                    <VscSourceControl size={24} />
                </div>
                <div className='iconaside'>
                    <span className='sidebaractive'></span>
                    <VscDebugAltSmall size={24} />
                </div>
                <div className='iconaside'>
                    <span className='sidebaractive'></span>
                    <VscExtensions size={24} />
                </div>





            </div>
            <div className='aside2'>
                <div className='iconaside'>
                    <VscAccount size={24} />
                </div>
                <div className='iconaside'>
                    <VscSettingsGear size={24} />
                </div>
            </div>
        </aside>
    )
}

export default Side
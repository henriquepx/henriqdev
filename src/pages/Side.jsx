import './Side.css';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAltSmall, VscExtensions, VscAccount, VscSettingsGear } from "react-icons/vsc";

const Side = () => {
    return (
        <aside>
            <div className='aside1'>
                <VscFiles size={24} />
                <VscSearch size={24} />
                <VscSourceControl size={24} />
                <VscDebugAltSmall size={24} />
                <VscExtensions size={24} />
            </div>
            <div className='aside2'>
                <VscAccount size={24} />
                <VscSettingsGear size={24} />
            </div>
        </aside>
    )
}

export default Side
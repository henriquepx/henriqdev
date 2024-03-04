import './Footer.css'
import { VscRemote, VscSourceControl, VscSync, VscError, VscWarning, VscRadioTower, VscBell } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='footer1'>
                <div className='iconblue'>
                    <VscRemote size={14} />
                </div>
                <div className='iconbranch'>
                    <VscSourceControl size={14} />
                    <p>main*</p>
                    <VscSync size={14} className='sync' />
                </div>

                <div className='iconfooter'>
                    <VscError size={14} />
                    <p>0</p>
                    <VscWarning size={14} />
                    <p>0</p>
                </div>
                <div className='iconfooter'>
                    <VscRadioTower size={14} />
                    <p>0</p>
                </div>

            </div>
            <div className='footer2'>
                <div className='langaguefooter'>
                    <FaReact size={14} />
                    <p>powered by ReactJS</p>
                </div>
                <div className='notificationfooter'>
                    <VscBell size={14} />
                </div>

            </div>
        </footer>
    )
}

export default Footer
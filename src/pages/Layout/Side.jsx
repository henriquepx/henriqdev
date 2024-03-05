import { useState } from 'react';
import { VscFiles, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import './Side.css';
import IconSide from '../../components/IconSide';

const Side = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        if (index === activeIndex) {
            return;
        }

        setActiveIndex(index);
    };

    const iconData = [
        { icon: <VscFiles size={24} />, label: 'Files' },
        { icon: <RiComputerFill size={24} />, label: 'Projects' },
        { icon: <IoCodeSlashOutline size={24} />, label: 'Skills' },
        { icon: <FaEnvelope size={24} />, label: 'Contact' },
        { icon: <FaGithub size={24} />, label: 'Github' },
        { icon: <VscAccount size={24} />, label: 'Account' },
        { icon: <VscSettingsGear size={24} />, label: 'Settings' },
    ];

    return (
        <aside>
            <div className='aside1'>
                {iconData.slice(0, 5).map((item, index) => (
                    <IconSide
                        key={index}
                        icon={item.icon}
                        active={index === activeIndex}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            <div className='aside2'>
                {iconData.slice(5).map((item, index) => (
                    <div key={index} className='iconaside'>
                        {item.icon}
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Side;

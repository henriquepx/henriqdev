import { useState } from 'react';
import { VscFiles, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import IconSide from '../../components/IconSide';
import './Side.css';
import DropdownSettings from '../../components/DropdownSettings';
import DropdownProfile from '../../components/DropdownProfile';

const Side = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleClick = (index) => {
        if (index === activeIndex) {
            return;                 
        }
        setActiveIndex(index);
        closeDropdowns();
    };

    const toggleProfileDropdown = () => { setIsProfileDropdownOpen(!isProfileDropdownOpen); };
    const toggleSettingsDropdown = () => { setIsDropdownOpen(!isDropdownOpen); };

    const closeDropdowns = () => {
        setIsProfileDropdownOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <aside>
            <div className='aside1'>
                <IconSide
                    icon={<VscFiles size={24} />}
                    active={activeIndex === 0}
                    onClick={() => handleClick(0)}
                />
                <IconSide
                    icon={<RiComputerFill size={24} />}
                    active={activeIndex === 1}
                    onClick={() => handleClick(1)}
                />
                <IconSide
                    icon={<IoCodeSlashOutline size={24} />}
                    active={activeIndex === 2}
                    onClick={() => handleClick(2)}
                />
                <IconSide
                    icon={<FaEnvelope size={24} />}
                    active={activeIndex === 3}
                    onClick={() => handleClick(3)}
                />
                <IconSide
                    icon={<FaGithub size={24} />}
                    active={activeIndex === 4}
                    onClick={() => handleClick(4)}
                />
            </div>
            <div className='aside2'>
                <IconSide
                    icon={<VscAccount size={24} />}
                    active={activeIndex === 5}
                    onClick={toggleProfileDropdown}
                />
                {isProfileDropdownOpen && (
                    <DropdownProfile />
                )}
                <IconSide
                    icon={<VscSettingsGear size={24} />}
                    active={activeIndex === 6}
                    onClick={toggleSettingsDropdown}
                />
                {isDropdownOpen && (
                    <DropdownSettings />
                )}
            </div>
        </aside>
    );
}

export default Side;

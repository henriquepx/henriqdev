import { useState } from 'react';
import TabFiles from './Layout/TabFiles';
import Contact from './Contact';
import Github from './Github';
import Projects from './Projects';
import Skills from './Skills';
import Home from './Home';
import './Main.css';

const Side = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleClick = (index) => {
        if (index === activeTabIndex) {
            return;
        }
        setActiveTabIndex(index);
        closeDropdowns();
    };

    const closeDropdowns = () => {
        setIsProfileDropdownOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <aside>
            <div className='aside1'>
                <IconSide
                    icon={<VscFiles size={24} />}
                    active={activeTabIndex === 0}
                    onClick={() => handleClick(0)}
                />
                <IconSide
                    icon={<RiComputerFill size={24} />}
                    active={activeTabIndex === 1}
                    onClick={() => handleClick(1)}
                />
                <IconSide
                    icon={<IoCodeSlashOutline size={24} />}
                    active={activeTabIndex === 2}
                    onClick={() => handleClick(2)}
                />
                <IconSide
                    icon={<FaEnvelope size={24} />}
                    active={activeTabIndex === 3}
                    onClick={() => handleClick(3)}
                />
                <IconSide
                    icon={<FaGithub size={24} />}
                    active={activeTabIndex === 4}
                    onClick={() => handleClick(4)}
                />
            </div>
            <div className='aside2'>
                {/* ... (restante do código) */}
            </div>
        </aside>
    );
};

export default Side;

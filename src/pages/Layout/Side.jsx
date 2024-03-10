import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscFiles, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import IconSide from '../../components/IconSide';
import DropdownSettings from '../../components/DropdownSettings';
import DropdownProfile from '../../components/DropdownProfile';
import styled from 'styled-components';

const StyledAside = styled.aside`
    position: fixed;
    z-index: 100;
    left: 0;
    height: 100%;
    width: 55px;
    padding-bottom: 4rem;
    background-color: rgb(24, 24, 24);
    border-right: 2px solid rgb(43, 43, 43);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledAsideSection = styled.div`
    width: 100%;
    padding-right: 0.2rem;
`;

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
        <StyledAside>
            <StyledAsideSection>
                <Link to="/" onClick={() => handleClick(0)}>
                    <IconSide
                        icon={<VscFiles size={24} />}
                        active={activeIndex === 0}
                    />
                </Link>
                <Link to="/projects" onClick={() => handleClick(1)}>
                    <IconSide
                        icon={<RiComputerFill size={24} />}
                        active={activeIndex === 1}
                    />
                </Link>
                <Link to="/skills" onClick={() => handleClick(2)}>
                    <IconSide
                        icon={<IoCodeSlashOutline size={24} />}
                        active={activeIndex === 2}
                    />
                </Link>
                <Link to="/contact" onClick={() => handleClick(3)}>
                    <IconSide
                        icon={<FaEnvelope size={24} />}
                        active={activeIndex === 3}
                    />
                </Link>
                <Link to="/github" onClick={() => handleClick(4)}>
                    <IconSide
                        icon={<FaGithub size={24} />}
                        active={activeIndex === 4}
                    />
                </Link>
            </StyledAsideSection>
            <StyledAsideSection>
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
            </StyledAsideSection>
        </StyledAside>
    );
}

export default Side;

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VscFiles, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import IconSide from '../../components/IconSide';
import DropdownProfile from '../../components/DropdownProfile';
import styled from 'styled-components';

const StyledAside = styled.aside`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 27px; 
    bottom: 2.3vh; 
    width: 55px;
    background-color: #181818;
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
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const profileDropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleClick = (index) => {
        if (index === activeIndex) {
            return;
        }
        setActiveIndex(index);
        closeDropdowns();
    };

    const toggleProfileDropdown = () => { setIsProfileDropdownOpen(!isProfileDropdownOpen); };

    const closeDropdowns = () => {
        setIsProfileDropdownOpen(false);
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

            </StyledAsideSection>
            <StyledAsideSection>
                <a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'>
                    <IconSide
                    icon={<FaGithub size={24}/>} />
                </a>
                <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'>
                    <IconSide
                    icon={<FaLinkedin size={24} />} />
                </a>
                <a href="https://www.tiktok.com/@henriqdev?_t=8oGZNCdurJe&_r=1" target='_blank' rel='noreferrer'>
                    <IconSide
                    icon={<FaTiktok size={24}/>} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Tenho%20uma%20ideia%20de%20trabalho%20e%20voc%C3%AA%20%C3%A9%20o%20Desenvolvedor%20que%20eu%20preciso." target='_blank' rel='noreferrer'>
                    <IconSide
                    icon={<FaWhatsapp size={24}/>} />
                </a>
                <IconSide
                    icon={<VscAccount size={24} />}
                    active={activeIndex === 5}
                />
                <IconSide
                    icon={<VscSettingsGear size={24} />}
                    active={activeIndex === 6}
                    onClick={toggleProfileDropdown}
                />
                {isProfileDropdownOpen && (
                    <div ref={profileDropdownRef}>
                        <DropdownProfile />
                    </div>
                )}
            </StyledAsideSection>
        </StyledAside>
    );
}

export default Side;

import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineGlobal } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const ChangeLanguage = styled.li`
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    position: relative;
`
const LanguageToggle = styled.div`
    display: flex;
    align-items: center;
`
const Dropdown = styled.div`
    position: absolute;
    bottom: 33px; 
    left: 7px;
    transform: translateX(-30%);
    background-color: #1a1a1a;  
    border: 1px solid #5f5f5f;  
    z-index: 1;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);  
    animation: ${fadeIn} 0.3s ease-out;
`
const LanguageList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 1rem;
    li {
        font-weight: 500;
        a {
            color: #ffffff;
            cursor: pointer;
        }
    }
`

const DropdownProfileContainer = styled.div`
    position: absolute;
    bottom: 4px;
    left: 100%;
    z-index: 999;
    background: #1c1c1c;
    width: 54px;
    height: 50px;
    border: 1.5px solid rgb(87, 87, 87);
    padding: .5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    a {
        color: #fff;
    }
`

const DropdownProfile = () => {
    const { i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isArrowUp, setIsArrowUp] = useState(false);

    const languageButtonRef = useRef(null);

    const handleChangeLanguage = (newLanguage) => {
        if (newLanguage !== currentLanguage) {
            i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);
        }
    };

    const handleLanguageClick = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsArrowUp(!isArrowUp);
    };

    return (
        <DropdownProfileContainer>
            <ChangeLanguage ref={languageButtonRef}>
                <LanguageToggle onClick={handleLanguageClick}>
                <AiOutlineGlobal size={18} style={{ color: '#fff' }} />
                    {isArrowUp ? <IoIosArrowUp size={18} style={{ color: '#fff' }} /> : <IoIosArrowDown size={18} style={{ color: '#fff' }} />}
                </LanguageToggle>
                {isLanguageOpen && (
                    <Dropdown>
                        <LanguageList>
                            <li><a onClick={() => handleChangeLanguage('pt')} href="#">PT</a></li>
                            <li><a onClick={() => handleChangeLanguage('en')} href="#">EN</a></li>
                        </LanguageList>
                    </Dropdown>
                )}
            </ChangeLanguage>
        </DropdownProfileContainer>
    )
}

DropdownProfile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
    languageButtonRef: PropTypes.object.isRequired,
};

export default DropdownProfile;

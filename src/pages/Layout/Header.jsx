import styled from 'styled-components';
import { IoCodeSlash } from "react-icons/io5";
import { VscLayoutSidebarLeft, VscMenu, VscLayoutPanelOff, VscLayoutSidebarRightOff, VscLayout, VscChromeMinimize, VscChromeRestore, VscChromeClose } from "react-icons/vsc";

const HeaderContainer = styled.header`
    width: 100%;
    z-index: 200;
    height: 30px;
    display: flex;
    position: fixed;
    justify-content: space-between;
    background-color: rgb(31, 31, 31);
    align-items: center;
    border-bottom: 2px solid rgb(43, 43, 43);
`;

const HeaderSection1 = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    svg {
        margin-left: 1rem;
        color: #fff;
        cursor: pointer;
    }

    p {
        @media (max-width: 750px) {
            display: none;
        }
        color: #fff;
        font-size: 0.7rem;
        font-weight: 300;
        cursor: default;
        font-weight: 400;
        padding: 0.35rem 0.4rem;
        border-radius: 5px;

        &:hover {
            background-color: rgb(70, 70, 70);
        }
    }
`;

const HamburgerIcon = styled(VscMenu)`
    display: none;

    @media (max-width: 750px) {
        display: block;
    }
`;

const HeaderSection3 = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;

    svg {
        cursor: pointer;
    }

    div {
        svg {
            margin: 0 16px;
            cursor: pointer;
        }
    }
`;

const Header = () => {
    return (
        <div>
        <HeaderContainer>
            <HeaderSection1>
                <IoCodeSlash size={20} />
                <HamburgerIcon />
                <p>File</p>
                <p>Edit</p>
                <p>Selection</p>
                <p>View</p>
                <p>Go</p>
                <p>Run</p>
                <p>Terminal</p>
                <p>Help</p>
                </HeaderSection1>
            <HeaderSection3>
                <VscLayoutSidebarLeft />
                <VscLayoutPanelOff />
                <VscLayoutSidebarRightOff />
                <VscLayout />
                <div>
                    <VscChromeMinimize />
                    <VscChromeRestore />
                    <VscChromeClose />
                </div>
            </HeaderSection3>
            </HeaderContainer>
        </div>
    );
};

export default Header;

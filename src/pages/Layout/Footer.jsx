import styled from 'styled-components';
import { VscRemote, VscSourceControl, VscSync, VscError, VscWarning, VscRadioTower, VscBell } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const FooterContainer = styled.footer`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0%;
    height: 2.5vh;
    background-color: #181818;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(43, 43, 43);
    z-index: 500;
`;

const FooterSection = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.7rem;

    svg {
        color: #8f8f8f;
    }

    p {
        font-size: 0.8rem;
        color: #8f8f8f;
    }
`;

const IconBranch = styled.div`
    display: flex;
    gap: 3px;
    align-items: center;
    margin: 0 0.2rem;
    cursor: pointer;
    padding: 0.127rem 0.6rem;

    &:hover {
        background-color: rgb(70, 70, 70);
    }
`;

const IconBlue = styled.div`
    background-color: rgb(1, 128, 160);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.20rem .8rem;

    svg {
        color: #fff;
    }

    &:hover {
        background-color: rgb(4, 164, 204);
    }
`;

const IconFooter = styled.div`
    cursor: pointer;
    display: flex;
    gap: 3px;
    align-items: center;

    svg {
        color: #8f8f8f;
    }

    margin: 0 0.2rem;
    padding: 0.127rem 0.4rem;

    &:hover {
        background-color: rgb(70, 70, 70);
    }
`;

const Footer2 = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 1rem;

    svg {
        color: #8f8f8f;

        &:hover {
            background-color: rgb(70, 70, 70);
        }
    }
`;

const NotificationFooter = styled.div`
    padding: 0rem 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: rgb(70, 70, 70);
    }

    svg {
        color: #8f8f8f;
    }
`;

const LanguageFooter = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.14rem 0.6rem;
    gap: 6px;

    @media (max-width: 500px) {
        display: none;
    }

    &:hover {
        background-color: rgb(70, 70, 70);
    }

    p {
        font-size: .7rem;
        color: #808080;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <IconBlue>
                    <VscRemote size={14} />
                </IconBlue>
                <IconBranch>
                    <VscSourceControl size={14} />
                    <p>main*</p>
                    <VscSync size={14} className='sync' />
                </IconBranch>

                <FooterSection>
                    <IconFooter>
                        <VscError size={14} />
                        <p>0</p>
                        <VscWarning size={14} />
                        <p>0</p>
                    </IconFooter>
                    <IconFooter>
                        <VscRadioTower size={14} />
                        <p>0</p>
                    </IconFooter>
                </FooterSection>
            </FooterSection>

            <Footer2>
                <LanguageFooter>
                    <FaReact size={14} />
                    <p>powered by ReactJS</p>
                </LanguageFooter>
                <NotificationFooter>
                    <VscBell size={14} />
                </NotificationFooter>
            </Footer2>
        </FooterContainer>
    );
};

export default Footer;

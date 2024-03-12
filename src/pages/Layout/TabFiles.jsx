import PropTypes from 'prop-types';
import FileTab from '../../components/FileTab';
import ReactIcon from '../../assets/react.png';
import TSIcon from '../../assets/ts.png';
import HTMLIcon from '../../assets/code-orange.png';
import CSSIcon from '../../assets/brackets-blue.png';
import styled from 'styled-components';

const TabFilesContainer = styled.div`
    width: 100%;
    height: 4vh;
    z-index: 150;
    background-color: rgb(31, 31, 31);
    position: absolute;
    top: 0%;

    margin-left: 55px;
    display: flex;
`

const TabFiles = ({ activeTab }) => {
    return (
        <TabFilesContainer>
            <FileTab
                nameFile='Home.jsx'
                imgIcon={ReactIcon}
                altIcon='ícone do JSX'
                active={activeTab === 'Home'}
            />
            <FileTab
                nameFile='projects.ts'
                imgIcon={TSIcon}
                altIcon='ícone do Typescript'
                active={activeTab === 'Projects'}
            />
            <FileTab
                nameFile='Skills.css'
                imgIcon={CSSIcon}
                altIcon='ícone do CSS'
                active={activeTab === 'Skills'}
            />
            <FileTab
                nameFile='contact.html'
                imgIcon={HTMLIcon}
                altIcon='ícone do HTML'
                active={activeTab === 'Contact'}
            />
        </TabFilesContainer>
    );
};

TabFiles.propTypes = {
    activeTab: PropTypes.string.isRequired,
};

export default TabFiles;

import PropTypes from 'prop-types';
import FileTab from '../../components/FileTab';
import ReactIcon from '../../assets/react.png';
import TSIcon from '../../assets/ts.png';
import HTMLIcon from '../../assets/code-orange.png';
import ReadMEIcon from '../../assets/markdown.png';
import CSSIcon from '../../assets/brackets-blue.png';
import './TabFiles.css'; 

const TabFiles = ({ activeTab }) => {
    return (
        <div className='tabcontainer'>
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
            <FileTab
                nameFile='GITHUB.md'
                imgIcon={ReadMEIcon}
                altIcon='ícone do HTML'
                active={activeTab === 'Github'}
            />
        </div>
    );
};

TabFiles.propTypes = {
    activeTab: PropTypes.string.isRequired,
};

export default TabFiles;

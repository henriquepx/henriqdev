import PropTypes from 'prop-types';
import ReactIcon from '../../assets/react.png';
import TSIcon from '../../assets/ts.png';
import HTMLIcon from '../../assets/code-orange.png';
import ReadMEIcon from '../../assets/markdown.png';
import CSSIcon from '../../assets/brackets-blue.png';
import FileTab from '../../components/FileTab';

const tabData = [
    { nameFile: 'Home.jsx', imgIcon: ReactIcon, altIcon: 'ícone do JSX' },
    { nameFile: 'projects.ts', imgIcon: TSIcon, altIcon: 'ícone do Typescript' },
    { nameFile: 'Skills.css', imgIcon: CSSIcon, altIcon: 'ícone do CSS' },
    { nameFile: 'contact.html', imgIcon: HTMLIcon, altIcon: 'ícone do HTML' },
    { nameFile: 'GITHUB.md', imgIcon: ReadMEIcon, altIcon: 'ícone do README' },
];

const TabFiles = ({ activeIndex }) => {
    const tabInfo = tabData[activeIndex];

    return (
        <div className={`tabcontainer ${activeIndex === 0 ? 'active' : ''}`}>
            <FileTab
                nameFile={tabInfo.nameFile}
                imgIcon={tabInfo.imgIcon}
                altIcon={tabInfo.altIcon}
            />
        </div>
    );
}

TabFiles.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

export default TabFiles;

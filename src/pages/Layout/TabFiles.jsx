import './TabFiles.css';
import ReactIcon from '../../assets/react.png';
import TSIcon from '../../assets/ts.png';
import HTMLIcon from '../../assets/code-orange.png';
import ReadMEIcon from '../../assets/markdown.png';
import CSSIcon from '../../assets/brackets-blue.png';
import FileTab from '../../components/FileTab';

const TabFiles = () => {
    return (
        <div className='tabcontainer'>
            <FileTab
                nameFile='Home.jsx'
                imgIcon={ReactIcon}
                altIcon='ícone do JSX'
            />
            <FileTab
                nameFile='projects.ts'
                imgIcon={TSIcon}
                altIcon='ícone do Typescript'
            />
            <FileTab
                nameFile='Skills.css'
                imgIcon={CSSIcon}
                altIcon='ícone do CSS'
            />
            <FileTab
                nameFile='contact.html'
                imgIcon={HTMLIcon}
                altIcon='ícone do HTML'
            />
            <FileTab
                nameFile='GITHUB.md'
                imgIcon={ReadMEIcon}
                altIcon='ícone do HTML'
            />
        </div>
    )
}

export default TabFiles
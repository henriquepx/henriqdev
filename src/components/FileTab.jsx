import './FileTab.css'
import PropTypes from 'prop-types';

const FileTab = ({ nameFile, imgIcon, altIcon, isActive }) => {
    const fileTabClasses = `filetab ${isActive ? 'active' : ''}`;

    return (
        <div className={fileTabClasses}>
            <img src={imgIcon} alt={altIcon} />
            <h1>{nameFile}</h1>
        </div>
    );
}

FileTab.propTypes = {
    nameFile: PropTypes.string.isRequired,
    imgIcon: PropTypes.string.isRequired,
    altIcon: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default FileTab;

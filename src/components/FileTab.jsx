import PropTypes from 'prop-types';
import './FileTab.css'; 

const FileTab = ({ nameFile, imgIcon, altIcon, active }) => {
    return (
        <div className={`filetab ${active ? 'active' : ''}`}>
            <img src={imgIcon} alt={altIcon} />
            <span>{nameFile}</span>
        </div>
    );
};

FileTab.propTypes = {
    nameFile: PropTypes.string.isRequired,
    imgIcon: PropTypes.string.isRequired,
    altIcon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

export default FileTab;

import './FileTab.css'
import PropTypes from 'prop-types';

const FileTab = ({ nameFile, imgIcon, altIcon }) => {
    return (
        <div className='filetab'>
            <img src={imgIcon} alt={altIcon} />
            <h1>{nameFile}</h1>
        </div>
    );
}

FileTab.propTypes = {
    nameFile: PropTypes.string.isRequired,
    imgIcon: PropTypes.string.isRequired,
    altIcon: PropTypes.string.isRequired,
};

export default FileTab;

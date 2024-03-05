
import PropTypes from 'prop-types';
import './IconSide.css';

const IconSide = ({ icon, active, onClick }) => {
    return (
        <div className={`iconaside ${active ? 'active' : ''}`} onClick={onClick}>
            <span className='sidebaractive'></span>
            {icon}
        </div>
    );
}

IconSide.propTypes = {
    icon: PropTypes.element.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default IconSide;

import PropTypes from 'prop-types';
import './IconSide.css';

const IconSide = ({ icon, active, link, onClick, ...rest }) => {
    return (
        <a href={link} className={`iconaside ${active ? 'active' : ''}`} onClick={onClick} {...rest} >
            <span className='sidebaractive'></span>
            {icon}
        </a>
    );
}

IconSide.propTypes = {
    icon: PropTypes.element.isRequired,
    active: PropTypes.bool.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default IconSide;

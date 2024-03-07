import PropTypes from 'prop-types';
import './IconSide.css';

const IconSide = ({ icon, active, link, onClick, ...rest }) => {
    return (
        <p href={link} className={`iconaside ${active ? 'active' : ''}`} onClick={onClick} {...rest} >
            <span className='sidebaractive'></span>
            {icon}
        </p>
    );
}

IconSide.propTypes = {
    icon: PropTypes.element.isRequired,
    active: PropTypes.bool.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
};

export default IconSide;

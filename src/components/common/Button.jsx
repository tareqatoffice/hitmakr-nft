import PropTypes from 'prop-types';
import './Button.css';
const Button = ({ children, onClick, extraClassName = '' }) => {
    return (
        <button onClick={onClick} className={`nft-common-btn ${extraClassName}`}>
            {children}
        </button>
    );
};
Button.propTypes = {
    children: PropTypes.children,
    onClick: PropTypes.function,
    extraClassName: PropTypes.string
};
export default Button;
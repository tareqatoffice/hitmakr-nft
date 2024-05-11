import PropTypes from 'prop-types';
const HeaderCount = ({ info }) => {
    const { count, title } = info;
    return (
        <div className="header-count">
            <strong><span>{count}</span> <sub>+</sub></strong>
            <small>{title}</small>
        </div>
    );
};
HeaderCount.propTypes = {
    info: PropTypes.object
};
export default HeaderCount;
import PropTypes from 'prop-types';
const Option = ({ option }) => {
    const { title, description } = option || {}
    return (
        <div className="nft-option-details">
            <h2 className="text-[32px] leading-[36px] text-[#fff]">{title}</h2>
            <p className="text-[16px] leading-[20px] text-[#fff]">{description}</p>
        </div>
    );
};

Option.propTypes = {
    option: PropTypes.object
};

export default Option;
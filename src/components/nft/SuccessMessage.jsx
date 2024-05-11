import PropTypes from 'prop-types';
const SuccessMessage = ({ nft }) => {
    return (
        <div className='success-message'>
            <h2>Congratulations</h2>
            <h4>You have been rewarded with {nft?.nftInfo?.title}</h4>
        </div>
    );
};
SuccessMessage.propTypes = {
    nft: PropTypes.object
};
export default SuccessMessage;
import PropTypes from 'prop-types';

const NFTCardInfo = ({ nftInfo }) => {
    const { primaryImg, secondaryImg, title, userName } = nftInfo || {}
    return (
        <div className="nft-card-info">
            <img className='primary-img' src={primaryImg} alt="" />
            <div className="nft-card-name">
                <strong>{title}</strong>
                <small>{userName}</small>
            </div>
            <img className='secondary-img' src={secondaryImg} alt="" />
        </div>
    );
};
NFTCardInfo.propTypes = {
    nftInfo: PropTypes.object
};
export default NFTCardInfo;
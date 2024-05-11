import PropTypes from 'prop-types';
import NFTCardInfo from './NFTCardInfo';
import NFTMoney from './NFTMoney';

const NFTCard = ({ nft, small = false }) => {
    const { coverImg, nftInfo, nfts } = nft || {};
    return (
        <div className={`nft-card-details ${small ? 'small-card' : ''}`}>
            <img className='nft-card-cover' src={coverImg} alt="" />
            <NFTCardInfo nftInfo={nftInfo} />
            <div className="nfts">
                {nfts.map((nftMoney, index) => <NFTMoney key={index} nftMoney={nftMoney} />)}
            </div>
        </div>
    );
};
NFTCard.propTypes = {
    nft: PropTypes.object,
    small: PropTypes.boolean
};
export default NFTCard;
import PropTypes from 'prop-types';
import NFTCardInfo from './NFTCardInfo';
import NFTMoney from './NFTMoney';

const NFTCard = ({ nft }) => {
    const { coverImg, nftInfo, nfts } = nft || {};
    return (
        <div className="nft-card-details">
            <img className='nft-card-cover' src={coverImg} alt="" />
            <NFTCardInfo nftInfo={nftInfo} />
            <div className="nfts">
                {nfts.map((nftMoney, index) => <NFTMoney key={index} nftMoney={nftMoney} />)}
            </div>
        </div>
    );
};
NFTCard.propTypes = {
    nft: PropTypes.object
};
export default NFTCard;
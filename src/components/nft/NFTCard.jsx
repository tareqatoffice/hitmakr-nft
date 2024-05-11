import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import NFTCardInfo from './NFTCardInfo';
import NFTMoney from './NFTMoney';
const NFTCard = ({ nft, small = false, isCenter = true, isAnimating = false }) => {
    const { coverImg, nftInfo, nfts } = nft || {};
    return (
        <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={isAnimating ? {
                scale: isCenter ? 1.1 : (isAnimating && !isCenter) ? 0 : 0.8,
                opacity: isCenter ? 1 : (isAnimating && !isCenter) ? 0 : 0.5,
            } : null}
            transition={{ duration: 0.3 }}
            className={`nft-card-details ${small ? 'small-card' : ''}`}
        >
            <img
                className="nft-card-cover"
                src={coverImg}
                alt=""
            />
            <NFTCardInfo nftInfo={nftInfo} />
            <div className="nfts">
                {nfts.map((nftMoney, index) => (
                    <NFTMoney
                        key={index}
                        nftMoney={nftMoney}
                    />
                ))}
            </div>
        </motion.div>
    );
};
NFTCard.propTypes = {
    nft: PropTypes.object,
    isCenter: PropTypes.boolean,
    isAnimating: PropTypes.boolean,
    small: PropTypes.boolean,
};
export default NFTCard;

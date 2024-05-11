import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import NFTCardInfo from './NFTCardInfo';
import NFTMoney from './NFTMoney';
const NFTCard = ({ nft, small = false, index = 1, isAnimating = false }) => {
    const cardRef = useRef(null);
    const windowWidth = window?.outerWidth ?? 0;
    const { coverImg, nftInfo, nfts } = nft || {};
    return (
        <motion.div
            ref={cardRef}
            initial={{ scale: 1, opacity: 1 }}
            animate={isAnimating ? {
                filter: index === 1 ? null : "blur(5px)",
                x: (index === 0 && windowWidth >= 991) ? cardRef.current.offsetWidth + 16 : (index === 2 && windowWidth >= 991) ? - cardRef.current.offsetWidth - 16 : null,
                y: (index === 0 && windowWidth < 991) ? cardRef.current.offsetHeight + 16 : (index === 2 && windowWidth < 991) ? - cardRef.current.offsetHeight - 16 : null,
            } : null}
            transition={{ duration: 0.3 }}
            className={`nft-card-details ${index === 1 ? 'z-[10]' : 'z-[9]'} ${small ? 'small-card' : ''}`}
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
    index: PropTypes.number,
    isAnimating: PropTypes.boolean,
    small: PropTypes.boolean,
};
export default NFTCard;

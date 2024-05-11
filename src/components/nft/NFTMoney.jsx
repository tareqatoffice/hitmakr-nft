import PropTypes from 'prop-types';
const NFTMoney = ({ nftMoney }) => {
    const { title, info } = nftMoney || {}
    return (
        <div className='nft-money'>
            <strong>{title}</strong>
            <small>{info}</small>
        </div>
    );
};
NFTMoney.propTypes = {
    nftMoney: PropTypes.object
};
export default NFTMoney;
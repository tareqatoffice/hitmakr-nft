import header from '../../assets/header.webp';
import HeaderInfo from './HeaderInfo';
import './header.css';
const Header = () => {
    return (
        <section className="nft-header">
            <HeaderInfo />
            <img className='m-auto' src={header} alt="" />
        </section>
    );
};

export default Header;
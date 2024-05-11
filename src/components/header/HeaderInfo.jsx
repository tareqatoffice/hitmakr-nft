import Button from "../common/Button";
import HeaderCount from "./HeaderCounts";

const HeaderInfo = () => {
    return (
        <div className="header-info">
            <h1 className="header-info-title">
                <span>Discover,</span>
                <span>Collect & Sell</span>
                <span>Extraordinary NFT&rsquo;s</span>
            </h1>
            <p className="header-info-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut in scelerisque facilisis et dis.
            </p>
            <Button extraClassName="w-max">
                Explore
            </Button>
            <HeaderCount />
        </div>
    );
};

export default HeaderInfo;
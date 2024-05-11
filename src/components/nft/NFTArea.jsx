import { nftCards } from "../../lib/nft-card";
import Button from "../common/Button";
import NFTCard from "./NFTCard";
import './nft-card.css';
const NFTArea = () => {
    const clickHandler = () => { }
    return (
        <section className="nft-card-area">
            <h3 className="nft-card-title">Popular Artworks</h3>
            <div className="nft-cards grid">
                {nftCards.map((nft, index) => <NFTCard key={index} nft={nft} />)}
            </div>
            <Button onClick={clickHandler} extraClassName='w-max mx-auto'>Buy NFT</Button>
        </section>
    );
};

export default NFTArea;
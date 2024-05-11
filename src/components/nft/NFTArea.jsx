import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { nftCards } from '../../lib/nft-card';
import Button from '../common/Button';
import Modal from '../modal/Modal';
import NFTCard from './NFTCard';
import SuccessMessage from './SuccessMessage';
import './nft-card.css';
const NFTArea = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const clickHandler = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(prev => !prev)
        }, 300);
    };
    const onCancel = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsAnimating(false)
        }, 300)

    };
    const onOk = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsAnimating(false)
        }, 300)
    };
    return (
        <>
            <AnimatePresence>
                <section className="nft-card-area">
                    <h3 className="nft-card-title">Popular Artworks</h3>
                    <div className="nft-cards">
                        {nftCards.map((nft, index) => (
                            <NFTCard
                                key={index}
                                nft={nft}
                                index={index}
                                isAnimating={isAnimating}
                            />
                        ))}
                    </div>
                    <Button
                        onClick={clickHandler}
                        extraClassName="w-max mx-auto"
                    >
                        Buy NFT
                    </Button>
                </section>
            </AnimatePresence>
            <Modal
                open={isOpen}
                title={'Successfully NFT Buy'}
                onCancel={onCancel}
                onOk={onOk}
                extraClassName="sm:w-[50%]"
                footer={
                    <Button
                        extraClassName="w-full"
                        onClick={onOk}
                    >
                        Ok, Got It.
                    </Button>
                }
            >
                <div className="success-info">
                    <NFTCard
                        small={true}
                        nft={nftCards[0]}
                    />
                    <SuccessMessage nft={nftCards[0]} />
                </div>
            </Modal>
        </>
    );
};

export default NFTArea;

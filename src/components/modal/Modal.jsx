import { AnimatePresence, motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import './modal.css';
const ModalDiv = styled(motion.div)`
    position: fixed;
	z-index: 9999;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
`
const BackDrop = styled(motion.div)`
    background: #aaaaaa2e;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 9998;
`
const Modal = ({ open, title, children, onCancel, footer, extraClassName }) => {
    return (
        <AnimatePresence>
            {open &&
                <>
                    <BackDrop onClick={onCancel} />
                    <ModalDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={extraClassName}
                    >
                        <div className="modal-title">
                            <h4>{title}</h4>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                        <div className="modal-content">
                            {children}
                        </div>
                        {footer ? <div className="modal-footer">
                            {footer}
                        </div> : null}
                    </ModalDiv>
                </>
            }
        </AnimatePresence>
    )
}
Modal.propTypes = {
    open: PropTypes.boolean,
    onCancel: PropTypes.function,
    footer: PropTypes.children,
    children: PropTypes.children,
    title: PropTypes.string,
    extraClassName: PropTypes.string,
};
export default Modal;
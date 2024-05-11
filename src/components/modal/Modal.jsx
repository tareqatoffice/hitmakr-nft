import { AnimatePresence, motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import './modal.css';

const Modal = ({ open, title, children, onCancel, footer, extraClassName }) => {
    return (
        <AnimatePresence>
            {open &&
                <>
                    <motion.div className='modal-backdrop' onClick={onCancel} />
                    <motion.div
                        className={`modal-container ${extraClassName ?? ''}`}
                        initial={{ top: '-50%' }}
                        animate={{ top: '50%' }}
                        exit={{ top: '-50%' }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="modal-title">
                            <h4>{title}</h4>
                            <button onClick={onCancel}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                        <div className="modal-content">
                            {children}
                        </div>
                        {footer ? <div className="modal-footer">
                            {footer}
                        </div> : null}
                    </motion.div>
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
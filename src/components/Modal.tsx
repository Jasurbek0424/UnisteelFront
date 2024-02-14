import React from 'react';
import Modal from 'react-modal';

const customStyles: Modal.Styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '99'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        maxWidth: '500px',
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
    }
};

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Пример модального окна"
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;

import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    function toogleModal() {
        console.log("toogleModal invocacion modalProvider 10")
        setIsOpen(!isOpen);
    }

    const modalValues = {
        isOpen,
        toogleModal
    };

    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { ModalContext, ModalProvider };

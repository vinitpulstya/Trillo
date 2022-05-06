import React, { useState, useContext } from "react";
import { Modal_model } from "../models/Modal";

const ModalContext = React.createContext();
// const ModalUpdateContext = React.createContext();

export function useModal() {
    return useContext(ModalContext);
}

// export function useModalUpdate() {
//     return useContext(ModalUpdateContext);
// }

export function ModalProvider({ children }) {
    const [modaldata, setModaldata] = useState(new Modal_model(false, '', '', '', ''));

    function setModal(new_modal) {
        setModaldata(new_modal);
    }

    return (
        <ModalContext.Provider value={{value: modaldata, func: setModal}}>
            {/* <ModalUpdateContext.Provider value={setModal}> */}
                {children}
            {/* </ModalUpdateContext.Provider> */}
        </ModalContext.Provider>
    )
}
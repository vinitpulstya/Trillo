import React, { useState, useContext } from "react";
import { Modal_model } from "../models/Modal";
import { Statusbar_model } from "../models/Statusbar_model";

const ModalContext = React.createContext();
const StatusbarContext = React.createContext();

export function useModal() {
    return useContext(ModalContext);
}

export function useStatusbar() {
    return useContext(StatusbarContext);
}

export function ModalProvider({ children }) {
    const [modaldata, setModaldata] = useState(new Modal_model(false, '', '', '', ''));
    const [statusbardata, setStatusbardata] = useState(new Statusbar_model(false, '', ''));

    function setModal(new_modal) {
        setModaldata(new_modal);
    }

    function setStatusbar(new_statusbar) {
        setStatusbardata(new_statusbar)
    }

    return (
        <ModalContext.Provider value={{value: modaldata, func: setModal}}>
            <StatusbarContext.Provider value={{value: statusbardata, func: setStatusbar}}>
                {children}
            </StatusbarContext.Provider>
        </ModalContext.Provider>
    )
}
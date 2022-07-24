import React, { useState, useContext } from "react";
import { Modal_model } from "../models/Modal";
import { Statusbar_model } from "../models/Statusbar_model";

const AppStateContext = React.createContext();
// const StatusbarContext = React.createContext();

export function useAppState() {
    return useContext(AppStateContext);
}

// export function useStatusbar() {
//     // return useContext(StatusbarContext);
// }

export function AppStateProvider({ children }) {
    const [modaldata, setModaldata] = useState(new Modal_model(false, '', '', '', ''));
    const [statusbardata, setStatusbardata] = useState(new Statusbar_model(false, '', '', ''));

    function setModal(new_modal) {
        setModaldata(new_modal);
    }

    function setStatusbar(new_statusbar) {
        setStatusbardata(new_statusbar)
    }

    return (
        <AppStateContext.Provider value={{modal: modaldata, setModal: setModal, statusbar: statusbardata, setStatusbar: setStatusbar}}>
            {/* <StatusbarContext.Provider value={{value: statusbardata, func: setStatusbar}}> */}
                {children}
            {/* </StatusbarContext.Provider> */}
        </AppStateContext.Provider>
    )
}
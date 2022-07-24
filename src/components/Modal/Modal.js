import './modal.scss';
import { useAppState } from '../../services/AppstateContext';
import { Modal_model } from '../../models/Modal';
import { useEffect, useState } from 'react';

const Modal = () => {

    const [modalclass, setModalClass] = useState('modal__wrapper');
    const appState = useAppState();
    const modaldata = appState.modal;
    const setModaldata = appState.setModal;

    useEffect(
        () => {
            setTimeout(() => 
            {
                if(modaldata.show) {
                    setModalClass('modal__wrapper modal__wrapper-show');
                } else {
                    setModalClass('modal__wrapper');
                }
            }, 100)
        }, [modaldata]
    );


    const closeModal = () => {
        // setModalClass('modal__wrapper'); 
        setTimeout(
            () => setModaldata(new Modal_model(false, '', '', '')),
            100
        )
    }

    // if (!modaldata.show) {
    //     return null;
    // }

    const getClassName = (base_class, modaldata) => {
        let css_class = base_class;

        switch (modaldata.title.toLowerCase()) {
            case 'error':
                css_class = `${base_class} ${base_class}-error`;
                break;
            
            case 'success':
                css_class = `${base_class} ${base_class}-success`;
                break;

            default:
                css_class = base_class;
                break;
        }

        return css_class;
    }

    return (
        <div className={modalclass}>
            <div className='modal__box'>
                <div className='modal__header'>
                    <h1 className='modal__header-title'>{modaldata.title}</h1>
                </div>
                <div className='modal__body'>
                    <svg className={getClassName('modal__body-icon', modaldata)}>
                        <use xlinkHref={modaldata.icon}></use>
                    </svg>
                    {modaldata.body}
                </div>
                <div className='modal__footer'>
                    <button className='modal__footer-button modal__footer-button-close' onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
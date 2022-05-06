import './modal.scss';
import { useModal } from '../../services/AppstateContext';
import { Modal_model } from '../../models/Modal';

const Modal = () => {
    
    const modal = useModal();
    const modaldata = modal.value;
    const setModaldata = modal.func;

    const closeModal = () => {
        setModaldata(new Modal_model(false, '', '', ''))
    }

    if (!modaldata.show) {
        return null;
    }

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
        <div className="modal__wrapper">
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
                    <button className='modal__footer-button' onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
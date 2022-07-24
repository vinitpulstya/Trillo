import { useEffect } from 'react';
import { Statusbar_model } from '../../models/Statusbar_model';
import { useAppState } from '../../services/AppstateContext';
import './statusbar.scss';
import sprite from '../../img/sprite.svg';

const Statusbar = () => {
    const appState = useAppState();
    const statusbardata = appState.statusbar;
    const setStatusbardata = appState.setStatusbar;

    useEffect(
        () => {
            if(statusbardata.show){
                setTimeout(
                    () => setStatusbardata(new Statusbar_model(false, '', '', ''))
                    ,3000
                )
            }
        }, [setStatusbardata, statusbardata]
    )

    if(!statusbardata.show) {
        return null;
    }

    return (
        // <div className="statusbar statusbar-success">
        <div className={`statusbar ${statusbardata.type === 'error' ? 'statusbar-error' : 
                                        (statusbardata.type === 'success'? 'statusbar-success': '')}`}> 
            <div className='statusbar__wrapper'>
                <svg className='statusbar__icon'>
                    <use xlinkHref={statusbardata.icon}></use>
                </svg>
                <div className='statusbar__text'>
                    {statusbardata.text}
                </div>
                <svg className='statusbar__closeicon'>
                    <use xlinkHref={`${sprite}#icon-close`}></use>
                </svg>
            </div>
        </div>
    )
}

export default Statusbar;
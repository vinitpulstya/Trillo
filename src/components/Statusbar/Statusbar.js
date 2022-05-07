import { useStatusbar } from '../../services/AppstateContext';
import './statusbar.scss';

const Statusbar = () => {
    const statusbar = useStatusbar();
    const statusbardata = statusbar.value;
    const setStatusbardata = statusbar.func;

    return (
        <div className="statusbar statusbar-success">
            <div className='statusbar__wrapper'>
                {/* <svg className={getClassName('statusbar__icon', statusbar)}>
                    <use xlinkHref={statusbardata.icon}></use>
                </svg> */}
                <div className='statusbar__text'>
                    {statusbardata.text}
                </div>
                {/* <svg className='statusbar__closeicon'>
                    <use xlinkHref={statusbar.icon}></use>
                </svg> */}
            </div>
        </div>
    )
}

export default Statusbar;
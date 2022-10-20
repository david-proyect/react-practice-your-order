import React from 'react'
import freedomicon from '../../assets/images/icons/freedom-icon.svg'
import pendingicons from '../../assets/images/icons/pending-icon.svg'


const Body = () => {
return (

<div className="order-body alert__wrap">
    <div className="order-boxes split-border">
        <div className="order-boxes__data">
            <p className="order-boxes__text bigger-steez switch-muted" >
                Entrega
            </p>
            <p className="order-boxes__text switch-btn">
                <span>6</span> de
                <span>200</span>
            </p>
            <label className="order-boxes__text cancel-label">Pedido</label>
            <p className="order-boxes__text cancel-text">
                Cancelado por cliente
            </p>
        </div>
            <div className="order-boxes__keypad">
                <div className="order-boxes__btn">
                    Estado del pedido
                </div>
                <div className="order-boxes__value" >
                    <img src={pendingicons} alt="Icono pendiente" />
                    Pendiente
                </div>
            </div>
        </div>
        <div className="order-info split-border switch-muted">
            <ul className="order-info__ul text-left">
                <li className="order-info__li">
                    Condición de pago: <strong>yyyyyy</strong>
                </li>
                <li className="order-info__li">
                    Condición de entrega: <strong>yyyyyy</strong>
                </li>
                <li className="order-info__li">
                    Tipo de descargue: <strong>yyyy</strong>
                </li>
            </ul>
        </div>
        <div className="order-boxes switch-muted">
        <div className="order-boxes__data">
            <p className="order-boxes__text little-steez">Total</p>
            <p className="order-boxes__text total-steez">
                $ 3.566884 <span className="skinny-iva">(con IVA)</span>
            </p>
        </div>
        {/* <div className="order-boxes__keypad">
            <div className="order-boxes__btn">
                Estado de cartera
            </div>
            <div className="order-boxes__value">
                <img src={lockedicon} alt="Icono Bloqueado" />
                Bloqueado por DNE
            </div>
        </div>
        <div className="order-boxes__keypad">
            <div className="order-boxes__btn">
                Estado de cartera
            </div>
            <div className="order-boxes__value" >
                <img src={lockedicon} alt="Icono Bloqueado" />
                Bloqueado por cartera
            </div>
        </div>
        <div className="order-boxes__keypad">
            <div className="order-boxes__btn">
                Estado de cartera
            </div>
            <div className="order-boxes__value">
                <img src={lockedicon} alt="Icono Liberado" />
                Liberado
            </div>
        </div> */}
        <div className="order-boxes__keypad">
            <div className="order-boxes__btn">
                Estado de cartera
            </div>
            <div className="order-boxes__value">
                <img src={freedomicon} alt="Icono Liberado" />
                Liberado
            </div>
        </div>
    </div>
</div>
  )
}

export default Body
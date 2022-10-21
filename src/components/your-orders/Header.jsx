import React from 'react'
import carticonblue from '../../assets/icons/cart-icon-blue.svg'
import calendariconblue from '../../assets/icons/calendar-icon-blue.svg'
import piniconblue from '../../assets/icons/pin-icon-blue.svg'
import processordericonblue from '../../assets/icons/process-order-icon-blue.svg'

const Header = (props) => {
    console.log(props)
  return (
    <div className="order-head">
        <div className="order-head__item">
            <div className="order-head__item__icon">
                <img src={carticonblue} alt="Icono Pedido" />
            </div>
            <p>Pedido N° {props.order.Cabecera.SONUMBER}</p>
        </div>
        <div className="order-head__item">
            <div className="order-head__item__icon">
                <img src={calendariconblue} alt="Icono Calendario" />
            </div>
            <p>Fecha de pedido {props.order.Cabecera.ORDERDATE}</p>
        </div>
        <div className="order-head__item">
            <div className="order-head__item__icon">
                <img src={piniconblue} alt="Icono dirección" />
            </div>
            <p>{props.order.SHIPTO}</p>
        </div>
        <div className="order-head__item">
            <div className="order-head__item__icon">
                <img src={processordericonblue} alt="Icono # orden" />
            </div>
            <p>Orden de compra: {props.order.Cabecera.PURORDER}</p>
        </div>
    </div>
  )
}

export default Header
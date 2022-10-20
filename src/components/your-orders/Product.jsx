import React from 'react'
import productpackicon from '../../assets/icons/product-pack-icon.svg'
import granelnewicon from '../../assets/icons/granel-new-icon.svg'
import productpackcanceledicon from '../../assets/icons/product-pack-canceled-icon.svg'


const Product = () => {
  return (
    <div className="order-products switch-muted">
        	<div className="product-item__content">
				<div className="product-item__icon">
					<img src={productpackicon} alt="Cemento icono" />
					{/* <img src={granelnewicon} alt="Granel icono" /> */}
				</div>
				{/* <div className="product-item__icon icon-canceled" >
					<img src={productpackcanceledicon} alt="Cemento icono" />
				</div> */}
				<div className="product-item__info">
					<label>Producto 1</label>
					<p>PRODUCTO NAME</p>
					<span>
						Fecha de entrega: <strong>12/06/2022</strong>
					</span>
					<span>
						Cant. Solicitada: <strong>2000</strong>
					</span>
				</div>
				<div className="wrap-converted">
					<label className="wrap-converted__label">
						Estado
					</label>
				</div>
			</div>
    </div>
  )
}

export default Product
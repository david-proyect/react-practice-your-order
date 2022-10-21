import React from 'react'
import Header from './Header'
import Body from './Body'
import Product from './Product'

const YourOrder = () => {

const [orders, setOrders] = React.useState([])

React.useEffect(() => {
  getOrders()
}, [])

const getOrders = async() => {
  const data = await fetch('https://colcementyourordersqa.argosone.com/api/Orders/v0/GetOrdersForWhatsapp?nit=8909011108&orderNumber=&clientCode=&initDate=10/10/2022&finalDate=10/18/2022&startDeliveryDate=&finalDeliveryDate=&isLastDay=false')
  const ordersS = await data.json()
  setOrders(ordersS.Data)
}

  return (
    <div className='orders-section'>
      {
        orders.map(item => (
          <React.Fragment key={item.Cabecera.SONUMBER}>
              <Header order={item} />
              <Body order={item}/>
              <Product order={item} />
          </React.Fragment>                 
        ))
      }
    </div>
  )
}

export default YourOrder
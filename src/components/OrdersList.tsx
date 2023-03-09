import { useState, useEffect } from "react"
import Header from "./Header"

fetch('http://localhost:3000/orders')
.then((res) => res.json())
.then((data) => {
})



const OrdersList = () => {

  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3000/orders')
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])
 
  

  return (
    <>
    <Header/>
    <h1>Orders</h1>
    <ul>
      {data?.map((order) => (
        <li key={order._id}>{order.description}</li>
      ))}
    </ul>
    </>
  )
}

export default OrdersList
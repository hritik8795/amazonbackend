import React,{useState,useEffect} from 'react'
import "./buynow.css"

const Right = ({item}) => {

  const [price,setPrice] =useState(0)

  useEffect(() =>{
    totalAmount();
  },[item])

  const totalAmount =() =>{
    let price =0;
    item.map((item) =>{
      price  += item.price.cost

    })
    setPrice(price)

  }
  return (
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt=''/>
        <div className="cost_right">
        <p>your order is eligible for free delivery . </p> <br/>

        <span style={{color:"#565959"}}>Select this option at checkout .Details</span>

        <h3>Subtotal ({item.length}items) :&#8377; <span style={{ fontWeight:700}}>{price}.00</span></h3>
        <button className='rightbuy_btn'>Process to Buy</button>

        <div className="emi">
            Emi available
        </div>

        </div>
    </div>
  )
}

export default Right
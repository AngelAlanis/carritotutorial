import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css"

import React from 'react'

const CartElements = () => {
    const { cart } = useContext(dataContext)
    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card"></img>
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product}/>
                <h4 className="price">${product.price * product.quantity}</h4>
            </div>
        )
    })
}

export default CartElements
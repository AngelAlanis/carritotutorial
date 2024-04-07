import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css"

import React from 'react'

const Products = () => {
    const { data, cart, setCart } = useContext(dataContext)

    const buyProduct = (product) => {
        setCart([...cart, product])
    }

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
                <button onClick={() => buyProduct(product)}>Buy</button>
            </div>
        )
    })

}

export default Products
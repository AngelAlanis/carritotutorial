import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css"

import React from 'react'

const Products = () => {
    const { data, buyProduct } = useContext(dataContext)

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
                <button onClick={() => buyProduct(product)}>Add to cart</button>
            </div>
        )
    })

}

export default Products
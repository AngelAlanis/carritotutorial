import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((res) => setData(res.data))
    }, [])

    const buyProduct = (product) => {
        const productRepeated = cart.find((item) => item.id === product.id)

        if (productRepeated) {
            setCart(cart.map((item) => item.id === product.id 
            ? { ...product, quantity: product.quantity + 1 } 
            : item))
        } else {
            setCart([...cart, product])
        }
    }

    return (
        <dataContext.Provider value={{ data, cart, setCart, buyProduct }}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider;
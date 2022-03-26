import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Headphone from '../Headphones/Headphone';
import './Choosing.css'

const Products = () => {
    const [headphones,setHeaphones] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setHeaphones(data))
    }, [])

    const handleAddtoCart = (selectedHeadphone) => {
        let newCart = []
        const exist = cart.find(headphone=> headphone.id === selectedHeadphone.id)
        if(!exist){
            newCart = [...cart, selectedHeadphone];
        }
        else{
            newCart = [...cart]
        }
    
        setCart(newCart);
    }
    return (
        <div className='choosing-container'>
            <div className='headphones-container'>
            {
                headphones.map(headphone=><Headphone 
                    key={headphone.id}
                    product={headphone}
                    handleAddtoCart = {handleAddtoCart}
                    ></Headphone> 
                    )
                }
            </div>
            <div className='choice-container'>
                <Cart cart = {cart}></Cart>
            </div>  
        </div>
        

    );
};

export default Products;
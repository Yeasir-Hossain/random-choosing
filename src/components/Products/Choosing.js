import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Headphone from '../Headphones/Headphone';
import './Choosing.css'

const Products = () => {
    const [headphones,setHeaphones] = useState([])
    const [cart, setCart] = useState([])
    let [choosen , setChoosen] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setHeaphones(data))
    }, [])
    
    const handleChooseone = () => {
        if(cart.length === 0)
        {
            alert("Please choose headphones")
            window.location.reload()
        }
        const index = Math.floor(Math.random() * 10) % (cart.length);
        choosen = cart[index]
        setChoosen(choosen)
        
    }
    const handleChooseagain = () =>{
        const emptycart = []
        setCart(emptycart);
        setChoosen(emptycart);
    }

    const handleAddtoCart = (selectedHeadphone) => {
        let newCart = []
        const exist = cart.find(headphone=> headphone.id === selectedHeadphone.id)
        if(cart.length>3){
            alert("Only 4 items are accepted")
            newCart = [...cart]
        }
        else if(!exist){
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
                <Cart cart = {cart} handleChooseone = {handleChooseone} choosen = {choosen} handleChooseagain = {handleChooseagain}></Cart>
            </div>  
        </div>
        

    );
};

export default Products;
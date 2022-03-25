import React, { useEffect, useState } from 'react';
import Headphone from '../Headphones/Headphone';
import './Choosing.css'

const Products = () => {
    const [headphones,setHeaphones] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setHeaphones(data))
    }, [])
    return (
        <div className='choosing-container'>
            <div className='headphones-container'>
            {
                    headphones.map(headphone=><Headphone 
                        key={headphone.id}
                        product={headphone}
                        // handleAddtoCart = {handleAddtoCart}
                       ></Headphone> 
                    )
                }
            </div>
            <div className='choice-container'>
                <h2>Selected Headphones</h2>
            </div>  
        </div>
        

    );
};

export default Products;
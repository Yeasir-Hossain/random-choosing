import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;
    return (
        <div className='cart'>
            <h3>Your choices</h3>
            {
                cart.map(headphone=>(
                    <div className='single' key = {headphone.id}>
                        <img src={headphone.picture} alt="" />
                        <h3>{headphone.name}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;
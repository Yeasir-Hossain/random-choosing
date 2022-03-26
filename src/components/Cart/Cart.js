import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const {choosen} = props;
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
            <h3>Choosen product:</h3>
            <div>
                {
                    <div className='choosen'>
                        <img src={choosen.picture} alt="" />
                        <h3>{choosen.name}</h3>
                    </div>
                }
                <div className='buttons'>
                    <button className='btn choose' onClick={props.handleChooseone}>Choose one</button>
                    <button className='btn again'>Choose again</button>
                </div>
                    
            </div>
        </div>
    );
};

export default Cart;
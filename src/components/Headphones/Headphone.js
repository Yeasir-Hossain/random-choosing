import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Headphone.css'

const Headphone = (props) => {
    const {name,picture,price} = props.product;
    const {handleAddtoCart} = props;
    return (
        <div className='headphone'>
               <img src={picture} alt="" />
            <div className='headphone-info'>
                <h2 className='headphone-name'>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
           <button onClick={() => handleAddtoCart(props.product)} className='button'>
               <p className='button-text'>Add to cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Headphone;
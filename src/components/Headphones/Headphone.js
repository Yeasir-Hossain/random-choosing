import React from 'react';
import './Headphone.css'

const Headphone = (props) => {
    const {name,picture,price} = props.product;
    const {handleAddtoCart} = props;
    return (
        <div className='headphone'>
            <img src={picture} alt="" />
           <div className='headphone-info'>
            <p className='headphone-name'>{name}</p>
            <p>Price: ${price}</p>
           </div>
           <button onClick={() => handleAddtoCart(props.product)} className='btn-cart'>
               <p className='btn-text'>Add to cart</p>
               {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
               </button>
        </div>
    );
};

export default Headphone;
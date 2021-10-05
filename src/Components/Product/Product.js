import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const {name,img,price,seller,stock} = props.product;
    //Icon
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>Price : ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> props.hendleAddToCart(props.product)} className="btn-regular">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart){
        // console.log(product);
        if (!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuntity);
    }
    const shipping =total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotale = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Item Ordered : {totalQuantity}</h5>
            <br/>
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotale.toFixed(2)}</p>

        </div>
    );
};

export default Cart;
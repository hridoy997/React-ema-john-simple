import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        // console.log("product Api celled");
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log('Product recived');
        })
    },[])

    useEffect(()=>{
        // console.log('L S celled');
        if (products.length){
            const sevedCart = getStoredCart();
            const storedCart = [];
            // console.log(sevedCart);
            for(const key in sevedCart){
                 // console.log(key);
                // console.log(products);
                // console.log(key,sevedCart[key]);
                const addedproduct = products.find(product => product.key === key);
                // console.log(key,addedproduct);
                if (addedproduct){
                    const quantity = sevedCart[key];
                    addedproduct.quantity = quantity;
                    // console.log(addedproduct);
                    storedCart.push(addedproduct);
                }
            }
            setCart(storedCart);
        }
    },[products])

    const hendleAddToCart = (product)=>{
        // console.log(product.name);
        // console.log(product);
        // console.log('clicked'); 
        const newCart = [...cart,product];
        setCart(newCart);
        // console.log(product);
        addToDb(product.key)
    }

    const hendelSearch = event => {
        const searchText = event.target.value;
        
    }

    return (
        <div>
            <div onChange={hendelSearch} className="search-container">
                <input type="text" placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key = {product.key}
                            product = {product}
                            hendleAddToCart={hendleAddToCart}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;
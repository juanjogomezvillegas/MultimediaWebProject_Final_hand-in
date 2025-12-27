
/*
 * Project final hand-in: Javascript File Activities.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-01
 */

import React, {useState} from 'react';
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";

function Activities({data, products}) {
    const [cart,setCart] = useState([]);
    const addProduct = (product) => { // function by add product in the cart
        setCart([...cart, product]);
    };
    const delProduct = (product) => { // function by remove product in the cart (filter by different elements to product)
        setCart(cart.filter((prod) => prod.name !== product.name));
    };
    
    return (
        <div role="tabpanel" aria-labelledby="activities" className="Section Activities">
           <h1 id={data["id"]}>{data["title"]}</h1>
           <div>
                <ProductList products={products} onAdd={addProduct} onDel={delProduct} cart={cart} />
                <Cart cart={cart} />
           </div>
        </div>
    );
}

export default Activities;


/*
 * Project final hand-in: Javascript File ProductList.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

import ProductCart from "./ProductCart.js";

function ProductList({products, onAdd, onDel, cart}) {
    products.sort((a,b) => a.price -b.price);

    return (
        <div className="ProductList">
            <h2>Productes Disponibles</h2>
            <div className='Product-elements'>
                {products.map((data) => (<ProductCart key={data.id} product={data} onAdd={onAdd} onDel={onDel} cart={cart} />))}
            </div>
        </div>
    );
}

export default ProductList;


/*
 * Project final hand-in: Javascript File ProductList.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

import ProductCart from "./ProductCart.js";

function ProductList({products, onAdd, onDel, cart, lang}) {
    products.sort((a,b) => a.price -b.price);

    let title;
    if (lang === "ca") {
        title = "Productes Disponibles";
    } else if (lang === "es") {
        title = "Productos Disponibles";
    } else if (lang === "en") {
        title = "Available products";
    } else if (lang === "fr") {
        title = "Produits disponibles";
    }

    return (
        <div className="ProductList">
            <h2>{title}</h2>
            <div className='Product-elements'>
                {products.map((data) => (<ProductCart key={data.id} product={data} onAdd={onAdd} onDel={onDel} cart={cart} lang={lang} />))}
            </div>
        </div>
    );
}

export default ProductList;

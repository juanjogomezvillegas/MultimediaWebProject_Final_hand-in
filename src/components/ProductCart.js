
/*
 * Project final hand-in: Javascript File ProductCart.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

function ProductCart({product, onAdd, onDel, cart}) {
    return (
        <div className="ProductCart">
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button onClick={() => onAdd(product)}>Afegir a la cistella</button>
            <br />
            {cart.indexOf(product) !== -1? 
            (<button onClick={() => onDel(product)}>Eliminar de la cistella</button>) :
            (<br />)}
        </div>
    );
}

export default ProductCart;

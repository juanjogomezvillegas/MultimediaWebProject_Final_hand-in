
/*
 * Project final hand-in: Javascript File ProductCart.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

function ProductCart({product, onAdd, onDel, cart, lang}) {
    let addCart;
    let remCart;
    if (lang === "ca") {
        addCart = "Afegir a la cistella";
        remCart = "Eliminar de la cistella";
    } else if (lang === "es") {
        addCart = "Añadir a la cesta";
        remCart = "Eliminar de la cesta";
    } else if (lang === "en") {
        addCart = "Add to cart";
        remCart = "Remove from cart";
    } else if (lang === "fr") {
        addCart = "Ajouter au panier";
        remCart = "Supprimer du panier";
    }

    return (
        <div className="ProductCart">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.time} h</p>
            <button onClick={() => onAdd(product)}>{addCart}</button>
            <br />
            {cart.indexOf(product) !== -1? 
            (<button onClick={() => onDel(product)}>{remCart}</button>) :
            (<br />)}
        </div>
    );
}

export default ProductCart;

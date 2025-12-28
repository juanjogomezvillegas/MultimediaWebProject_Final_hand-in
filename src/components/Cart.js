
/*
 * Project final hand-in: Javascript File Cart.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

function Cart({cart, lang}) {
    const totalamount = cart.reduce((sum,item) => sum + item.time, 0);
    const newCart = cart.reduce((arr,item) => {
        if (arr[item.id]) { // if arr[item.id] already exists, then increment with 1 the variable count
            arr[item.id].count += 1;
        } else { // else, add to arr a element arr[item.id] with new attribute count=1
            arr[item.id] = {...item, count: 1};
        }
        return arr;
    }, []);

    let title;
    let cistellaBuida;
    if (lang === "ca") {
        title = "Cistella";
        cistellaBuida = "La cistella està buida";
    } else if (lang === "es") {
        title = "Cesta";
        cistellaBuida = "La cesta está vacía";
    } else if (lang === "en") {
        title = "Cart";
        cistellaBuida = "Cart is empty";
    } else if (lang === "fr") {
        title = "Panier";
        cistellaBuida = "Le panier est vide";
    }

    return (
        <div className="Cart">
            <h2>{title}</h2>
            <div>
                {cart.length === 0 ? 
                (<p>{cistellaBuida}</p>) :
                (<ul>
                    {newCart.map((data) => (<li key={data.id}>{data.name}: {data.time}h <b>x{data.count}</b></li>))}
                </ul>)}
                <p><b>Total: </b> {totalamount} h</p>
            </div>
        </div>
    );
}

export default Cart;

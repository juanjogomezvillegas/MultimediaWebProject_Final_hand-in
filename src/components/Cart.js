
/*
 * Project final hand-in: Javascript File Cart.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-27
 */

function Cart({cart}) {
    const totalamount = cart.reduce((sum,item) => sum + item.price, 0);
    const newCart = cart.reduce((arr,item) => {
        if (arr[item.id]) { // if arr[item.id] already exists, then increment with 1 the variable count
            arr[item.id].count += 1;
        } else { // else, add to arr a element arr[item.id] with new attribute count=1
            arr[item.id] = {...item, count: 1};
        }
        return arr;
    }, []);

    return (
        <div className="Cart">
            <h2>Cistella</h2>
            {cart.length === 0 ? 
            (<p>La cistella està buida</p>) :
            (<ul>
                {newCart.map((data) => (<li key={data.id}>{data.name}: {data.price}€ <b>x{data.count}</b></li>))}
            </ul>)}
            <p><b>Total: </b> {totalamount} €</p>
        </div>
    );
}

export default Cart;

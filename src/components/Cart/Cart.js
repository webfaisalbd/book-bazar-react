import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}

    // reduced because array of 
    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
    const total = cart.reduce(totalReducer, 0).toFixed(2);
    const tax = (0.1 * total).toFixed(2);
    const finalPrice = parseFloat(total) + parseFloat(tax);

    // console.log(Cart);
    return (

        <div class="card text-white bg-secondary mt-3 mb-3 p-2" style={{ "maxWidth": "18rem" }}>
            <div class="card-header"><h3>Add to Cart</h3></div>

            <h5>{cart.length}</h5>
            <h5>Book Price: {total}</h5>
            <h5>Tax: {tax}</h5>
            <h5>Final Price{finalPrice}</h5>
            <ul>
                {
                    cart.map(product => <li>{product.name}</li>)
                }
            </ul>

        </div>
    );

};

export default Cart;
// import file
import React from 'react';

const Cart = (props) => {
    // use Destructuring 
    const { cart } = props || {}

    // reduced because array of 
    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
    // calculate total 
    const total = cart.reduce(totalReducer, 0).toFixed(2);
    // calculate tax 
    const tax = (0.1 * total).toFixed(2);
    // calculate final price 
    const finalPrice = parseFloat(total) + parseFloat(tax);

    // console.log(Cart);
    return (
        // show output for calculation 
        <div className="card text-white bg-secondary mt-3 mb-3 p-2" style={{ "maxWidth": "18rem" }}>
            <div className="card-header"><h3>Add to Cart</h3></div>

            <h5><i className="fas fa-book-reader"></i> Books Added: {cart.length}</h5>
            <h5><i className="fas fa-money-bill-alt"></i> Book Price: ${total}</h5>
            <h5><i className="far fa-money-bill-alt"></i> Tax: ${tax}</h5>
            <h5><i className="fas fa-hand-holding-usd"></i>Total Amount: ${finalPrice}</h5>
            <ul>
                {
                    cart.map(product => <div>
                        <div class="card border-primary mb-1" style={{ "maxWidth": "14rem" }}>
                            <div class="card-body text-primary d-flex">
                                <img src={product.img} className="img-fluid w-25 rounded-start" alt="..." />
                                <p class="card-text">{product.name}</p>
                            </div>
                        </div>

                    </div>)
                }
            </ul>

        </div>
    );

};

export default Cart;
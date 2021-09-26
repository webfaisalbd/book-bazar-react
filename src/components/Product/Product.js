// import file
import React from 'react';

const Product = (props) => {

    // use Destructuring 
    const { name, img, category, stock, price, seller } = props.product || {};
    // console.log(props.product);
    return (
        // show cart 
        <div className='col-md-4 rounded mt-2'>
            <div className="card mb-3" style={{ "maxWidth": "440px" }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{name}</h5>
                            <p><span className='fw-bold'>Category: </span>{category}
                                <br />
                                <span className='fw-bold'>Seller: </span>{seller}
                                <br />
                                <span className='fw-bold'>Stock: </span>{stock} pieces
                                <br />
                                <span className='fw-bold'>Price: </span>${price}
                            </p>
                            <button onClick={() => props.handleAddProduct(props.product)} className='btn btn-success'><i className="fas fa-shopping-cart"></i> Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;


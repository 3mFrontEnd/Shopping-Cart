import React from 'react';

// functions
import { shorten } from '../helpers/function';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product pic" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href="">Details</a>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
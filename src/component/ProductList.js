import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    render() {
        console.log(this.props.arrProduct)

        return (
            <div>
                <ProductItem/>
            </div>
        );
    }
}

export default ProductList;

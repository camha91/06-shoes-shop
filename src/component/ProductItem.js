import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <div
        className="card text-left w3-container w3-center w3-animate-zoom"
        style={{ width: "300px" }}
      >
        <img
          className="card-img-top"
          src={this.props.dataProductItem.image}
          alt={this.props.dataProductItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.dataProductItem.name}</h4>
          <p className="card-text">${this.props.dataProductItem.price}</p>
          <button className="text-white w3-button w3-round w3-black">
            Add to cart <i className="fa fa-shopping-cart" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;

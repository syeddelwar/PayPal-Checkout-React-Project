import React from 'react';
import "./style.css";
import ProductImage from "../images/product.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Checkout() {
    const product = {
        description: "Learn how to build a website with React JS",
        price: 65,
    };
  return (
    <div className="checkout">
        <h1>CHAPTER ONE PEUMAYEN NOMPUEHUENU</h1>
        {/* <p className="checkout-title">
            Design and Code React PayPal Checkout Procedure
        </p>
        <p className="checkout-description">
            Learn how to build a website with React JS
        </p> */}
        <h1 className="checkout-price">$65</h1>
        <img className="product-image" src={ProductImage} alt="Product Image" />
        <div className="separator"></div>
        <div className="paypal">
            <p className="checkout-title">PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
                <PaypalCheckoutButton product={product} />
            </div>
        </div>
    </div>
  )
}

export default Checkout
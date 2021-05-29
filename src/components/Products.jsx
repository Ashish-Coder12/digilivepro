import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Product.css";

function Products({
  liFirst,
  liSecound,
  liThird,
  h3,
  h4,
  pera,
  buttonText,
  icons,
}) {
  return (
    <Link to="/" className="product__container-card">
      <div className="product__container-cardInfo">
        <div className="icon">{icons}</div>
        <h3>{h3}</h3>
        <h4>{h4}</h4>
        <p>{pera}</p>
        <ul className="pricing__container-features">
          <li>{liFirst}</li>
          <li>{liSecound}</li>
          <li>{liThird}</li>
        </ul>
        <Button buttonSize="btn--wide" buttonColor="promary">
          {buttonText}
        </Button>
      </div>
    </Link>
  );
}

export default Products;

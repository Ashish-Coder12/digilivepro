import React from "react";
import { FaFire } from "react-icons/fa";
import Products from "../../Products";
import { BsXDiamondFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import "./CardSec.css";
import {
  procuctsCardOne,
  procuctsCardThree,
  procuctsCardTwo,
} from "./ProdutsData";

function Cardsec() {
  return (
    <div>
      <div className="product__section">
        <div className="product__wrapper">
          <h1 className="product__heading">Services</h1>
          <div className="product__container">
            <Products icons={<FaFire />} {...procuctsCardOne} />
            <Products icons={<BsXDiamondFill />} {...procuctsCardTwo} />
            <Products icons={<ImBooks />} {...procuctsCardThree} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardsec;

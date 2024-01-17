import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./index.scss"

function Basket() {
  const { basket, increase, decrease, removeBasket } =
    useContext(BasketContext);
  return (
    <div className="basketPage">
      <div className="card">
        {basket.map((x) => (
          <ul key={x._id} className="pages">
            <li className="image">
              <img src={x.image} />
            </li>
            <li className="name">{x.name}</li>
            <li className="desc">{x.desc}</li>
            <button onClick={() => increase(x)}></button>
            <button onClick={() => decrease(x)}></button>
            <button onClick={() => removeBasket(x)}>Remove</button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Basket;
